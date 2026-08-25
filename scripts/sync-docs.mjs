import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

const generatedAt = process.env.SOURCE_GENERATED_AT
if (!generatedAt) throw new Error('SOURCE_GENERATED_AT is required')
if (process.argv.length !== 6) throw new Error('Expected four name=path@commit sources')

const walk = (root, current = root) => readdirSync(current).flatMap((name) => {
  if (name === '.git' || name === 'node_modules') return []
  const path = join(current, name)
  return statSync(path).isDirectory() ? walk(root, path) : [path.slice(root.length + 1)]
})

const repositories = process.argv.slice(2).map((arg) => {
  const equal = arg.indexOf('=')
  const at = arg.lastIndexOf('@')
  const name = arg.slice(0, equal)
  const path = resolve(arg.slice(equal + 1, at))
  const commit = arg.slice(at + 1)
  if (!existsSync(path) || (commit !== 'EMPTY' && !/^[0-9a-f]{40}$/.test(commit))) throw new Error(`Invalid source: ${name}`)
  const files = walk(path).sort()
  const packageJson = existsSync(join(path, 'package.json')) ? JSON.parse(readFileSync(join(path, 'package.json'), 'utf8')) : null
  return {
    repository: `Chaye-parcel-traveler/${name}`,
    commit: commit === 'EMPTY' ? null : commit,
    status: commit === 'EMPTY' ? 'empty' : 'available',
    packageManager: files.includes('package-lock.json') ? 'npm' : null,
    scripts: packageJson?.scripts || {},
    dockerFiles: files.filter((file) => /(^|\/)(Dockerfile|.*compose.*\.ya?ml)$/.test(file)),
    migrations: files.filter((file) => file.startsWith('database/migrations/')),
  }
})

mkdirSync('docs/generated', { recursive: true })
writeFileSync('docs/generated/repository-manifest.json', `${JSON.stringify({ generatedAt, repositories }, null, 2)}\n`)
const documentation = walk(resolve('docs')).filter((file) => file.endsWith('.md')).sort().map((file) => {
  const content = readFileSync(join('docs', file), 'utf8')
  return { path: `docs/${file}`, status: content.match(/^status:\s*(\w+)/m)?.[1] || 'manual' }
})
writeFileSync('docs/generated/documentation-manifest.json', `${JSON.stringify({ generatedAt, documentation }, null, 2)}\n`)

for (const source of repositories) {
  const lines = ['---', 'status: generated', `generated_at: ${generatedAt}`, `source_repository: ${source.repository}`, `source_commit: ${source.commit || 'null'}`, '---', '', `# Inventaire ${basename(source.repository)}`, '', `- État : ${source.status}`, `- Gestionnaire de paquets : ${source.packageManager || 'non détecté'}`, `- Migrations : ${source.migrations.length}`, `- Fichiers Docker/Compose : ${source.dockerFiles.join(', ') || 'aucun'}`, `- Scripts : ${Object.keys(source.scripts).sort().join(', ') || 'aucun'}`, '']
  writeFileSync(`docs/generated/${basename(source.repository)}-inventory.md`, `${lines.join('\n')}\n`)
}
