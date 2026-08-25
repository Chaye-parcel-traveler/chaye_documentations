---
status: mixed
generated_at: 2026-08-25
sources:
  - chaye_API@96e14cca661f5e0e6fec50c46074fe6a617bce86
  - chaye_web_frontend@bd199ba4003ac0fba482e89e581cb456a3111804
---

# Architecture Chaye

Chaye est organisé autour d'une API AdonisJS/TypeScript, d'un client web
React/Vite, d'un client mobile encore vide et d'une infrastructure MariaDB.
L'API possède le modèle de données exécutable : modèles Lucid, migrations,
seeders, OpenAPI et tests fonctionnels.

Les responsabilités métier principales observées sont l'identité et la
conformité CGU, les annonces de transport ou colis, les coopérations entre
membres, les destinataires et la messagerie liée aux discussions.
