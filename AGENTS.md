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
- le workflow equipe;
- le workflow agentique;
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
- Utiliser `gh` quand l'authentification GitHub est disponible.

Avant de creer une issue, verifier les doublons:

```bash
gh issue list --repo Chaye-parcel-traveler/chaye_documentations --state all --limit 100 --json number,title
```

## Definition De Fini

Une modification de documentation est terminee quand:

- le contenu est clair pour un nouveau membre de l'equipe;
- le document explique comment il doit etre utilise;
- les liens vers les repos techniques sont corrects;
- les decisions importantes sont tracees;
- les impacts API/frontend sont visibles si besoin.
