# Guide Agentique - Chaye Documentations

Ce fichier est le point d'entree pour les agents IA qui travaillent dans `chaye_documentations`.

## Langue

- Ecrire en francais.
- Garder les termes techniques en anglais seulement quand ils correspondent a des tokens reels: endpoints, champs, commandes, labels, noms de fichiers, noms de repos.
- Ne pas traduire les identifiants techniques.

Exemple:

```text
L'utilisateur suspendu ne peut pas appeler `POST /announcements`.
```

## Role Du Repo

Ce repo est la source de verite produit et organisationnelle transverse.

Il sert a cadrer:

- les regles metier;
- les parcours utilisateur;
- les decisions produit;
- la conformite;
- le processus equipe;
- le processus agentique;
- la tracabilite besoin -> issue -> PR.

Il ne sert pas a stocker les details techniques propres a un seul repo.

## Regle De Note Explicative

Chaque nouveau dossier ou document structurant doit expliquer:

- son objectif;
- son public;
- quand le lire;
- quand le mettre a jour;
- quels repos ou issues sont concernes.

Si tu ajoutes une page sans expliquer comment l'utiliser, la documentation devient difficile a maintenir.

## Sources Techniques

Les details d'execution restent dans les repos techniques:

- `../chaye_API/AGENTS.md`
- `../chaye_API/docs/`
- `../chaye_web_frontend/AGENTS.md`
- `../chaye_web_frontend/docs/`

Quand une information produit existe seulement dans un repo technique, propose de la remonter ici.

Quand une information est purement technique, ne la duplique pas ici.

## Noms Des Dossiers

Les dossiers de ce repo doivent etre nommes en francais.

Exemples attendus:

- `produit/`
- `conformite/`
- `processus/`
- `contrats/`
- `decisions/`
- `diagrammes/`
- `sources-pdf/`

Ne pas creer de nouveau dossier avec un nom anglais si un nom francais clair existe.

## Sources PDF

Les PDF d'origine sont stockes dans `sources-pdf/`.

Ils servent de sources historiques. Quand une information d'un PDF est utile au projet, elle doit etre reprise dans un fichier Markdown en francais, dans le dossier adapte.

Ne laisse pas une regle importante uniquement dans un PDF.

## Workflow Recommande

1. Lire `README.md`.
2. Identifier le document concerne.
3. Verifier si la meme information existe deja.
4. Mettre a jour la documentation en francais.
5. Ajouter ou corriger les liens vers les issues GitHub.
6. Mettre a jour la tracabilite si le statut produit change.
7. Ouvrir une PR claire.

## Issues GitHub

- Les issues de documentation doivent etre en francais.
- Les criteres d'acceptation doivent etre en francais.
- Les labels peuvent rester en anglais pour l'automatisation, par exemple `agent:ready`, `type:documentation`, `risk:legal`.
- Une issue agentique doit produire une valeur verifiable, pas seulement modifier un fichier, une table ou une commande.
- Utiliser `size:M` comme taille cible pour les agents; marquer `agent:too-small`, `agent:too-large` ou `agent:needs-scope` quand le cadrage n'est pas bon.
- Utiliser `gh` quand l'authentification GitHub est disponible.
- Verifier l'authentification avec `gh auth status` avant toute action GitHub.
- Si `gh` n'est pas authentifie, demander a un humain d'executer `gh auth login -h github.com`.
- Ne pas creer d'issue ou de PR sans verifier les doublons via `gh`.

Avant de creer une issue, verifier les doublons:

```bash
gh issue list --repo Chaye-parcel-traveler/chaye_documentations --state all --limit 100 --json number,title
```

Voir aussi `processus/github-cli-gh.md`.
Voir aussi `processus/granularite-issues-agentiques.md`.
Voir aussi `processus/tests-docker-first.md`.

## Tests Et Quality Gates

- Les agents doivent toujours essayer les quality gates Docker avant toute commande host.
- Les commandes host ne sont qu'un fallback documente quand Docker est indisponible ou ne couvre pas encore la verification.
- Les details techniques des commandes restent dans les repos `chaye_API` et `chaye_web_frontend`.

## Definition De Fini

Une modification de documentation est terminee quand:

- le contenu est clair pour un nouveau membre de l'equipe;
- le document explique comment il doit etre utilise;
- les liens vers les repos techniques sont corrects;
- les decisions importantes sont tracees;
- les impacts API/frontend sont visibles si besoin.
