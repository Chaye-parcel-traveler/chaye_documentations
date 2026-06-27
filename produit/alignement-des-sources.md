# Alignement des sources produit

Ce document compare le cahier des charges V3.1 aux trois PDF dérivés présents dans `sources-pdf/`.

Il doit être lu avant toute décision concernant le périmètre MVP, le budget, le planning, la conformité, l’organisation de l’équipe ou la stack cible.

Il doit être mis à jour lorsqu’un écart est arbitré. Les PDF cités restent immuables.

Date de l’audit : 27 juin 2026.

Issue de suivi : `Chaye-parcel-traveler/chaye_documentations#2`.

## Sources comparées

| Identifiant | Document | Pages | Statut |
| --- | --- | ---: | --- |
| `CDC` | `sources-pdf/Chaye_CDC_V3.1_Final.pdf` | 16 | Source fonctionnelle initiale |
| `BP` | `sources-pdf/Chaye_BusinessPlan_MVP_Mecenat.pdf` | 12 | Document économique dérivé |
| `BT` | `sources-pdf/Chaye_Brief_Technique.pdf` | 3 | Document technique dérivé |
| `BJ` | `sources-pdf/Chaye_Brief_Equipe_Juridique.pdf` | 1 | Synthèse juridique dérivée |

## Méthode

L’audit combine :

- l’extraction du texte des quatre PDF ;
- la comparaison des chiffres, rôles, jalons et exigences ;
- le contrôle visuel de chaque page ;
- la comparaison avec les dépôts techniques actuels lorsque le PDF décrit une implémentation.

Un document dérivé ne remplace pas automatiquement le cahier des charges. Une divergence devient une nouvelle règle uniquement après une décision explicite consignée dans un Markdown.

## Contrôle visuel

Chaque page a été rendue en image puis inspectée.

| Document | Résultat visuel |
| --- | --- |
| `CDC` | Les 16 pages sont lisibles. Aucun texte tronqué, chevauchement ou défaut de pagination n’a été relevé. |
| `BP` | Les 12 pages sont lisibles et correctement structurées. Plusieurs pages utilisent toutefois une petite partie de l’espace disponible. |
| `BT` | Les 3 pages sont lisibles. La fonctionnalité relative aux mineurs est barrée en page 2, alors qu’elle reste présente dans le récapitulatif de la page 3. |
| `BJ` | La page unique est lisible, sans chevauchement. La hiérarchie visuelle ne résout cependant pas les contradictions de fond. |

## Conclusion

Les documents sont **partiellement alignés**, mais ils ne peuvent pas être utilisés ensemble sans arbitrage.

Les principaux écarts concernent :

- le budget MVP et le seuil de rentabilité ;
- le calendrier de lancement ;
- les rôles de l’équipe ;
- la base de données et l’hébergement ;
- le statut réel des validations juridiques ;
- le périmètre conformité du sprint 1 ;
- le blocage des transactions pour les mineurs ;
- la chronologie du Reward System ;
- le nombre de pays visés à douze mois.

## Points convergents

| Sujet | Constat |
| --- | --- |
| Positionnement | Les documents décrivent une plateforme collaborative d’envoi de colis pour les diasporas des DOM et d’Afrique francophone. |
| Proposition de valeur | La réduction de coût annoncée reste comprise entre 30 et 60 %. |
| Identité | Le nom Chayé, la signature « La confiance voyage avec vous » et le colibri sont cohérents. |
| Modèle de revenu | La commission de transaction est présentée comme le revenu principal du MVP. |
| Pilote | Un pilote fermé de 50 utilisateurs à Bordeaux est présent dans le cahier des charges et le business plan. |
| Conformité | Tous les documents reconnaissent que les sujets juridiques, douaniers, KYC et de responsabilité sont déterminants avant le lancement. |
| Double corridor | Le MVP vise les DOM et plusieurs pays d’Afrique francophone. |

## Divergences à arbitrer

| ID | Sujet | Cahier des charges | Document dérivé | Statut |
| --- | --- | --- | --- | --- |
| `FIN-001` | Budget MVP | `37 500 €` (`CDC`, p. 15) | `3 350 €` (`BP`, p. 2 et 4) | Décision financière requise |
| `FIN-002` | Coûts fixes et seuil | Environ `310 €` et `52 tx/mois` (`CDC`, p. 15) | La p. 2 conserve `52 tx/mois`, mais la p. 6 calcule `265 €` et `45 tx/mois` | Contradiction interne au business plan |
| `PLAN-001` | Pilote et lancement | Pilote à `M+8`, lancement à `M+10` (`CDC`, p. 13) | Pilote à `M+5`, lancement à `M+6` (`BP`, p. 7 et 12) | Décision produit requise |
| `ORG-001` | Rôles techniques | Ludovic est responsable du backend et Jonathan du frontend et du mobile (`CDC`, p. 14) | Jonathan devient développeur fullstack et Ludovic consultant technique (`BP`, p. 3) | Organisation à confirmer |
| `TECH-001` | Base de données | MariaDB, avec migration PostgreSQL envisagée (`CDC`, p. 10) | PostgreSQL est présenté comme composant du MVP (`BP`, p. 3 et 5) | Décision technique requise |
| `TECH-002` | Hébergement | OVH ou Scaleway, données en France (`CDC`, p. 10) | Hostinger KVM2 est recommandé, Hetzner proposé en alternative (`BP`, p. 5) | Étude technique et RGPD requise |
| `JUR-001` | Validation juridique | Le statut LCEN et les CGU doivent encore être validés par un avocat (`CDC`, p. 4 et 7) | Le brief affirme que sept points sur neuf sont confirmés, tout en indiquant trois blocs sans réponse (`BJ`, p. 1) | Preuve de consultation requise |
| `JUR-002` | Délai de signalement | Traitement sous 48 heures comme mesure préventive (`CDC`, p. 7) | Présenté comme un « SLA légal » (`BT`, p. 1) | Conserver comme objectif interne tant que le fondement légal n’est pas documenté |
| `CONF-001` | Fonctionnalités légales | Le CDC prévoit le signalement, les réclamations et un rôle de modération, sans détailler les six fonctionnalités du brief | Le brief ajoute six fonctionnalités détaillées au sprint 1 (`BT`, p. 1 à 3) | Exigences proposées, à valider individuellement |
| `CONF-002` | Mineurs | Le sujet n’est pas détaillé dans le périmètre MVP du CDC | La fonctionnalité est barrée visuellement en p. 2 du brief technique, mais reste comptée en p. 3 | Contradiction interne à arbitrer |
| `API-001` | Endpoint CGU | Aucun chemin détaillé dans le CDC | `POST /api/auth/accept-cgu` (`BT`, p. 1) | Le chemin courant doit venir d’OpenAPI, pas du PDF |
| `PROD-001` | Reward System | Reward basique au MVP ; sondages positionnés de façon variable entre V2 et V3 (`CDC`, p. 6, 12, 15 et 16) | Le business plan place sondages et services premium en V2, tout en conservant le parrainage au MVP (`BP`, p. 6) | Versions à harmoniser |
| `PROD-002` | Expansion géographique | Cinq pays africains au démarrage, puis expansion à `M+18` (`CDC`, p. 13) | Quinze destinations DOM et Afrique sont annoncées à douze mois (`BP`, p. 8 à 10) | Objectif à confirmer |
| `KYC-001` | KYC du pilote | KYC N1 avant transaction et KYC N2 à la première transaction voyageur (`CDC`, p. 6 et 9) | Le budget suppose au maximum 50 vérifications KYC pour le pilote (`BP`, p. 4) | Type et volume de vérification à préciser |

## Contradictions et défauts de forme relevés

Les PDF ne sont pas modifiés. Les corrections ci-dessous servent uniquement à éviter leur reprise dans les nouveaux Markdown.

### Brief technique

- « tout ce qui doit être coder » devrait être « tout ce qui doit être codé » ;
- « la case à cocher CGU doit être obligatoirement bloquer » devrait être reformulé en « la case doit bloquer la validation tant qu’elle n’est pas cochée » ;
- la fonctionnalité relative aux mineurs est barrée en page 2, mais incluse dans le total de six jours en page 3 ;
- plusieurs affirmations juridiques sont formulées comme des certitudes sans référence jointe.

### Brief juridique

- « sept points sur neuf » est incompatible avec l’annonce de trois blocs restant sans réponse ;
- l’expression « relecture par Ludovic » ne définit pas clairement la responsabilité de développement ;
- les conclusions juridiques doivent être reliées à un compte rendu ou à un avis formel.

### Business plan

- « Toout les membres » devrait être « Tous les membres » ;
- le seuil affiché en page 2 diffère du calcul de la page 6 ;
- certaines phrases manquent de ponctuation ;
- plusieurs prix, capacités d’hébergement et avantages fiscaux sont des hypothèses datées qui doivent être revérifiées avant diffusion externe.

## Règles d’interprétation courantes

En attendant les arbitrages :

1. Ne jamais modifier les PDF.
2. Ne pas implémenter une divergence sur la seule base d’un PDF dérivé.
3. Considérer les chiffres économiques comme des hypothèses non validées lorsqu’ils se contredisent.
4. Considérer les conclusions juridiques comme « à valider » tant que leur preuve n’est pas jointe.
5. Utiliser l’OpenAPI de `chaye_API` pour les endpoints et payloads publics.
6. Utiliser le code et les décisions techniques du dépôt propriétaire pour la stack réellement déployée.
7. Créer une décision Markdown datée pour chaque arbitrage.

## Décisions prioritaires à prendre

| Priorité | Décision | Validation attendue |
| ---: | --- | --- |
| 1 | Statut des conclusions de la consultation juridique | Produit et conseil juridique |
| 2 | Maintien ou retrait du blocage des transactions pour les mineurs | Produit et conseil juridique |
| 3 | Budget MVP, coûts fixes et seuil de rentabilité | Produit et finance |
| 4 | Planning pilote et lancement | Produit et équipe technique |
| 5 | Répartition des rôles de l’équipe | Équipe |
| 6 | Base de données et hébergement cibles | Équipe technique et RGPD |
| 7 | Versionnement du Reward System | Produit |
| 8 | Objectif de pays desservis à douze mois | Produit et juridique |

## Suivi

Lorsqu’une décision est prise :

1. créer ou mettre à jour un document dans `decisions/` ;
2. indiquer la date, les participants et les éléments de preuve ;
3. mettre à jour la ligne correspondante de cet audit ;
4. créer les issues d’implémentation dans les dépôts concernés ;
5. conserver les PDF inchangés.
