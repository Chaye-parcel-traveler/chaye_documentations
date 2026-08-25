---
status: mixed
generated_at: 2026-08-25
source_repository: Chaye-parcel-traveler/chaye_API
source_paths: [start/routes.ts, app/controllers/auth_controller.ts, app/controllers/members_controller.ts, database/migrations]
source_commit: 96e14cca661f5e0e6fec50c46074fe6a617bce86
---

# Identité, membres et conformité

Le domaine couvre login/logout, OAuth Google/Facebook, consultation de son
profil, gestion des membres, historique de connexion et acceptation versionnée
des CGU. Les routes privées utilisent le middleware d'authentification et les
policies backend; le frontend ne constitue jamais la barrière de sécurité.
