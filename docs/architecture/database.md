---
status: mixed
generated_at: 2026-08-25
source_repository: Chaye-parcel-traveler/chaye_API
source_path: database/
source_commit: 96e14cca661f5e0e6fec50c46074fe6a617bce86
---

# Base de données

MariaDB est accédée via Lucid ORM. Les migrations de l'API constituent la
source de vérité exécutable; `chaye_database` décrit l'infrastructure et la
dérive, sans recopier le backend. Les domaines persistés incluent membres,
acceptations CGU, annonces, coopérations, destinataires, discussions/messages,
colis, trajets, paiements et réclamations.
