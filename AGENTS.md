# Guide agentique - Chaye Documentations

Ce fichier est le point d’entrée des agents IA qui travaillent dans `chaye_documentations`.

## Langue et qualité rédactionnelle

- Rédiger en français clair, précis et correctement accentué.
- Vérifier l’orthographe, les accords, la ponctuation et la cohérence du vocabulaire.
- Conserver en anglais uniquement les termes techniques réels : endpoints, champs, commandes, labels, noms de fichiers et noms de dépôts.
- Ne pas traduire les identifiants techniques.

Exemple :

```text
L’utilisateur suspendu ne peut pas appeler `POST /announcements`.
```

## Rôle du dépôt

Ce dépôt est la source de vérité produit et organisationnelle transverse.

Il sert à cadrer :

- les règles métier ;
- les parcours utilisateur ;
- les décisions produit ;
- la conformité ;
- les processus d’équipe et agentiques ;
- la traçabilité entre besoin, issue et PR.

Les détails techniques propres à un seul dépôt restent dans :

- `../chaye_API/AGENTS.md` et `../chaye_API/docs/` ;
- `../chaye_web_frontend/AGENTS.md` et `../chaye_web_frontend/README.md`.

## Sources PDF immuables

Les PDF stockés dans `sources-pdf/` sont des sources historiques initiales.

Un agent ne doit jamais :

- modifier un PDF existant ;
- remplacer un PDF par une version corrigée ;
- régénérer un PDF pour y intégrer une évolution fonctionnelle ;
- présenter silencieusement un PDF dérivé comme une nouvelle source de vérité.

Toute correction, évolution fonctionnelle ou divergence doit être expliquée dans un fichier Markdown daté. Ce Markdown doit citer le PDF et les pages concernés, préciser le statut de l’information et indiquer si une validation humaine, juridique, financière ou technique reste nécessaire.

Le référentiel courant se trouve dans `produit/alignement-des-sources.md`.

## Organisation des sources

| Information | Source de vérité |
| --- | --- |
| Sources historiques initiales | `sources-pdf/` |
| Règles produit et décisions fonctionnelles courantes | `produit/` et `decisions/` |
| Conformité et règles de confiance | `conformite/` |
| Processus d’équipe et agentiques | `processus/workflow-agentique.md` |
| Contrats HTTP publics | `../chaye_API/docs/openapi/openapi.yaml` |
| Backlog et statut d’implémentation | GitHub Issues et PR |
| Détails techniques locaux | Dépôt technique concerné |

## Note explicative obligatoire

Chaque nouveau document structurant doit expliquer :

- son objectif ;
- son public ;
- quand le lire ;
- quand le mettre à jour ;
- les dépôts, décisions ou issues concernés.

## Noms des dossiers

Les dossiers doivent être nommés en français lorsqu’un nom français clair existe.

Exemples :

- `produit/`
- `conformite/`
- `processus/`
- `contrats/`
- `decisions/`
- `diagrammes/`
- `sources-pdf/`

## Workflow obligatoire

1. Lire l’issue GitHub avec `gh issue view`.
2. Lire le PDF source sans le modifier.
3. Vérifier si un Markdown plus récent explique déjà une évolution.
4. Identifier les contradictions et les validations encore nécessaires.
5. Mettre à jour le document propriétaire de l’information, sans dupliquer les autres dépôts.
6. Vérifier les liens, l’orthographe et le rendu Markdown.
7. Ouvrir une PR documentaire claire avec `gh`.

## Issues GitHub

- Les issues, critères d’acceptation et descriptions fonctionnelles sont rédigés en français.
- Les labels techniques restent en anglais pour l’automatisation.
- Une issue agentique doit produire une valeur vérifiable.
- La taille cible est `size:M`.
- Avant toute création, vérifier les doublons :

```bash
gh auth status
gh issue list --repo Chaye-parcel-traveler/chaye_documentations --state all --limit 100 --json number,title
```

Le workflow complet se trouve dans `processus/workflow-agentique.md`.

## Définition de fini

Une modification documentaire est terminée lorsque :

- le contenu est compréhensible par un nouveau membre de l’équipe ;
- les sources et pages PDF sont citées lorsqu’elles sont pertinentes ;
- les décisions, hypothèses et points à valider sont clairement distingués ;
- aucun PDF historique n’a été modifié ;
- les liens internes sont valides ;
- l’orthographe et la ponctuation ont été relues ;
- les impacts API et frontend sont visibles si nécessaire.
