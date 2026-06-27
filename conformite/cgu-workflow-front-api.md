# Workflow CGU frontend/API

Ce document cadre le workflow d’acceptation des CGU entre le frontend et l’API.

## Public concerné

- agents frontend qui implémentent `FE-CGU-001` ;
- agents API qui font évoluer `API-CGU-001` ou `API-CGU-002` ;
- équipe produit et conformité qui valide la source de la version des CGU.

## Quand le lire

Lire ce document avant de modifier :

- l’inscription frontend ;
- les endpoints `POST /members` et `POST /auth/accept-cgu` ;
- le contenu ou la version des CGU ;
- un futur parcours de réacceptation après une mise à jour des CGU.

## Quand le mettre à jour

Mettre à jour ce document lorsque :

- la source de la version courante des CGU est tranchée ;
- un endpoint de configuration légale est ajouté ;
- `/me` expose un indicateur de réacceptation ;
- le format de version des CGU change.

Dépôts concernés :

- `chaye_API`
- `chaye_web_frontend`

## Capacités API actuelles

L’API sait historiser une acceptation des CGU lorsque le frontend fournit une version.

Capacités disponibles :

- `POST /members` accepte `acceptedCguVersion` pendant l’inscription ;
- `POST /auth/accept-cgu` accepte `acceptedCguVersion` pour un utilisateur authentifié ;
- l’API stocke l’utilisateur, la version, l’horodatage serveur et l’adresse IP ;
- plusieurs acceptations par utilisateur sont autorisées afin d’historiser les nouvelles versions.

Limites actuelles :

- l’API ne fournit pas encore la version courante des CGU ;
- l’API n’indique pas encore, via `/me`, si l’utilisateur doit accepter une version plus récente ;
- le contenu des CGU et son URL canonique ne sont pas encore formalisés ici.

## Workflow frontend minimal attendu

Pour l’inscription :

1. Le formulaire affiche une case CGU obligatoire.
2. La soumission est bloquée côté frontend si la case n’est pas cochée.
3. Le payload `POST /members` contient `acceptedCguVersion`.
4. Les erreurs backend restent visibles, notamment l’erreur de validation de `acceptedCguVersion`.
5. Le frontend ne doit pas inventer une preuve d’acceptation locale ; la preuve est conservée par l’API.

Pour une future réacceptation :

1. L’utilisateur authentifié voit la version des CGU à accepter.
2. L’utilisateur confirme explicitement son acceptation.
3. Le frontend appelle `POST /auth/accept-cgu` avec `acceptedCguVersion`.
4. Le frontend considère la réacceptation comme terminée uniquement après le succès de l’API.

## Décisions à prendre

Ces décisions doivent être tranchées avant de considérer `FE-CGU-001` comme complet en production.

| Décision | Options | Impact en l’absence de décision |
| --- | --- | --- |
| Source de la version courante des CGU | Configuration frontend versionnée, par exemple `VITE_CURRENT_CGU_VERSION`, ou endpoint public de configuration légale | Le frontend peut afficher la case, mais ne sait pas quelle valeur fiable envoyer dans `acceptedCguVersion`. |
| Format de version des CGU | Date ISO, version sémantique ou identifiant documentaire | Les preuves seront difficiles à rapprocher du document publié. |
| Source du contenu des CGU | Page statique frontend, CMS ou document versionné, ou endpoint public de l’API | La case peut pointer vers un contenu absent ou non versionné. |
| Détection de la réacceptation | `/me` expose `latestAcceptedCguVersion` ou `mustAcceptCgu`, un endpoint dédié existe, ou un parcours temporaire est défini | `POST /auth/accept-cgu` reste utilisable, mais le frontend ne sait pas déterminer de manière fiable qui doit accepter les nouvelles CGU. |

## Recommandations produit et techniques

Pour un MVP simple :

- stocker la version courante des CGU dans une configuration frontend explicite ;
- utiliser une date ISO lisible, par exemple `2026-06-01` ;
- afficher un lien vers la page publiée des CGU ou des mentions légales ;
- traiter la détection fine de la réacceptation dans une issue séparée si aucune mise à jour des CGU n’est prévue immédiatement.

Pour un workflow plus robuste :

- ajouter un endpoint public de configuration légale exposé par l’API ;
- exposer dans `/me` la dernière version acceptée et/ou `mustAcceptCgu` ;
- bloquer les actions sensibles tant que `mustAcceptCgu` vaut `true`.

## État d’alignement

- API : capable d’enregistrer les acceptations lorsque le frontend fournit une version.
- Frontend : non aligné tant que `acceptedCguVersion` n’est pas envoyé à `POST /members`.
- Spécification : le besoin « case obligatoire et envoi de la version » existe, mais les décisions ci-dessus restent à prendre.
