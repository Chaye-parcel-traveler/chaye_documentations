---
status: mixed
generated_at: 2026-08-25
sources: [chaye_API/docker-compose.yml, chaye_API/Dockerfile, chaye_database/docker-compose.yml]
source_commit: 96e14cca661f5e0e6fec50c46074fe6a617bce86
---

# Docker

Le développement API utilise MariaDB, phpMyAdmin, une étape d'initialisation
des migrations/seeders et le serveur AdonisJS. Le Dockerfile multi-stage utilise
Node 24 Alpine et `dumb-init`. `chaye_database` maintient la définition DB
autonome avec MariaDB 11, healthcheck, volume nommé et secrets locaux exigés.
