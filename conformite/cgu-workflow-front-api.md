# Workflow CGU Frontend/API

Ce document cadre le workflow d'acceptation des CGU entre le frontend et l'API.

Public concerne:

- agents frontend qui implementent `FE-CGU-001`;
- agents API qui font evoluer `API-CGU-001` ou `API-CGU-002`;
- equipe produit/conformite qui valide la source de version CGU.

Lire ce document avant de modifier:

- l'inscription frontend;
- les endpoints `POST /members` et `POST /auth/accept-cgu`;
- le contenu ou la version des CGU;
- un futur flux de reacceptation apres mise a jour des CGU.

Mettre a jour ce document quand:

- la source de la version CGU courante est tranchee;
- un endpoint de configuration legale est ajoute;
- `/me` expose un indicateur de reacceptation;
- le format de version CGU change.

Repos concernes:

- `chaye_API`
- `chaye_web_frontend`

## Capacites API Actuelles

L'API sait historiser une acceptation CGU quand le frontend fournit une version.

Capacites disponibles:

- `POST /members` accepte `acceptedCguVersion` pendant l'inscription.
- `POST /auth/accept-cgu` accepte `acceptedCguVersion` pour un utilisateur authentifie.
- L'API stocke l'utilisateur, la version, l'horodatage serveur et l'adresse IP.
- Plusieurs acceptations par utilisateur sont autorisees pour historiser les nouvelles versions.

Limites actuelles:

- l'API ne fournit pas encore la version CGU courante;
- l'API ne dit pas encore, via `/me`, si l'utilisateur doit re-accepter une version plus recente;
- le contenu des CGU et son URL canonique ne sont pas encore formalises ici.

## Workflow Frontend Minimal Attendu

Pour l'inscription:

1. Le formulaire affiche une case CGU obligatoire.
2. La soumission est bloquee cote frontend si la case n'est pas cochee.
3. Le payload `POST /members` contient `acceptedCguVersion`.
4. Les erreurs backend restent visibles, notamment la validation `acceptedCguVersion`.
5. Le frontend ne doit pas inventer une preuve d'acceptation locale; la preuve est la ligne API.

Pour une future reacceptation:

1. L'utilisateur authentifie voit la version CGU a accepter.
2. L'utilisateur confirme explicitement l'acceptation.
3. Le frontend appelle `POST /auth/accept-cgu` avec `acceptedCguVersion`.
4. Le frontend considere la reacceptation terminee seulement apres succes API.

## Decisions A Prendre

Ces decisions doivent etre tranchees avant de considerer `FE-CGU-001` complet en production.

| Decision | Options | Impact si non tranche |
| --- | --- | --- |
| Source de la version CGU courante | Configuration frontend versionnee, par exemple `VITE_CURRENT_CGU_VERSION`; ou endpoint public API de configuration legale. | Le frontend peut afficher la case, mais ne sait pas quelle valeur fiable envoyer dans `acceptedCguVersion`. |
| Format de version CGU | Date ISO, version semantique, ou identifiant documentaire. | Les preuves seront difficiles a rapprocher du document CGU publie. |
| Source du contenu CGU | Page statique frontend, CMS/document versionne, ou endpoint/public asset API. | La case peut pointer vers un contenu absent ou non versionne. |
| Detection de reacceptation | `/me` expose `latestAcceptedCguVersion`/`mustAcceptCgu`; ou le frontend force un modal apres deploiement; ou un endpoint dedie existe. | `POST /auth/accept-cgu` est utilisable, mais le frontend ne sait pas robustement qui doit re-accepter. |

## Recommandation Produit/Technique

Decision recommandee pour un MVP simple:

- stocker la version CGU courante dans une configuration frontend explicite;
- utiliser une date ISO lisible, par exemple `2026-06-01`;
- afficher un lien vers la page CGU/mentions legales publiee;
- traiter la detection fine de reacceptation dans une issue separee si aucune mise a jour CGU n'est prevue immediatement.

Decision recommandee pour un workflow plus robuste:

- ajouter un endpoint public de configuration legale expose par l'API;
- exposer dans `/me` la derniere version CGU acceptee et/ou `mustAcceptCgu`;
- bloquer les actions sensibles tant que `mustAcceptCgu` est vrai.

## Etat D'Alignement

Etat actuel:

- API: capable d'enregistrer les acceptations si le frontend fournit une version.
- Frontend: non aligne tant que `acceptedCguVersion` n'est pas envoye a `POST /members`.
- Spec: le besoin "case obligatoire + envoyer la version" existe, mais les decisions ci-dessus restent a prendre.
