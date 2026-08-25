---
status: mixed
generated_at: 2026-08-25
source_repository: Chaye-parcel-traveler/chaye_API
source_commit: 96e14cca661f5e0e6fec50c46074fe6a617bce86
---

# Backend

L'API utilise AdonisJS, Lucid ORM, VineJS, MariaDB et des tokens d'accès.
Les routes sont centralisées dans `start/routes.ts`; les règles d'accès sont
portées par les middlewares et policies. L'OpenAPI se trouve dans
`docs/openapi/openapi.yaml`. Les commandes réelles de qualité sont
`npm run typecheck`, `npm run lint`, `npm run lint:openapi`,
`npm run coverage:check` et `npm run build`.
