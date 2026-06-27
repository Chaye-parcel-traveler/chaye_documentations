# Sources PDF

Ce dossier conserve les documents PDF historiques du projet Chaye.

## Règle d’immutabilité

Les PDF sont des archives de référence initiales. Ils ne doivent jamais être modifiés, remplacés ou régénérés par un agent.

Une faute, une contradiction ou une évolution fonctionnelle découverte dans un PDF doit être documentée dans un fichier Markdown. Le PDF d’origine reste inchangé afin de préserver l’historique.

## Documents conservés

| Fichier | Date du document | Rôle historique |
| --- | --- | --- |
| `Chaye_CDC_V3.1_Final.pdf` | Juin 2026 | Cahier des charges principal et référence initiale |
| `Chaye_Brief_Technique.pdf` | 8 juin 2026 | Déclinaison technique issue d’une consultation juridique |
| `Chaye_Brief_Equipe_Juridique.pdf` | 8 juin 2026 | Synthèse d’équipe concernant la consultation juridique |
| `Chaye_BusinessPlan_MVP_Mecenat.pdf` | Juin 2026 | Hypothèses économiques du MVP et appel au mécénat |

## Hiérarchie d’utilisation

1. Le cahier des charges constitue la source fonctionnelle initiale.
2. Les trois autres PDF sont des documents dérivés et peuvent préciser ou contredire le cahier des charges.
3. Les écarts sont consignés dans `../produit/alignement-des-sources.md`.
4. Une décision validée dans un Markdown daté peut faire évoluer le comportement attendu sans altérer le PDF historique.
5. GitHub Issues et les PR portent ensuite l’implémentation.

## Interdictions

Un agent ne doit pas :

- corriger directement l’orthographe d’un PDF ;
- supprimer une page ou masquer une contradiction ;
- fusionner physiquement plusieurs PDF ;
- générer une nouvelle version portant le même nom ;
- considérer une affirmation juridique ou financière comme validée sans preuve associée.

## Audit courant

L’audit du 27 juin 2026 est disponible dans :

```text
produit/alignement-des-sources.md
```

Il doit être mis à jour lorsqu’une divergence est arbitrée ou lorsqu’un nouveau PDF historique est ajouté par un humain.
