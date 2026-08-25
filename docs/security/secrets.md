---
status: manual
generated_at: 2026-08-25
---

# Secrets

Les secrets administratifs ne doivent jamais être stockés dans Actions. Les
dépôts publics sont lus anonymement; `GITHUB_TOKEN` reste limité au dépôt du
workflow. Les fichiers `.env` réels, tokens, mots de passe et clés privées ne
sont jamais copiés dans la documentation.

L'historique de l'API et celui du frontend nécessitent une rotation puis une
réécriture d'historique coordonnée avant de pouvoir être considérés propres.
