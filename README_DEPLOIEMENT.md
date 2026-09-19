# Explor’Action V5.4.6 — POLISH

Base officielle : **V5.4.5 ACCESS & HOME**.

Cette livraison est une version de finition. Elle n’ajoute aucune fonction et ne modifie ni les aventures, ni les étapes, ni les réponses, ni les données terrain.

## Déploiement public

Déployer **uniquement le contenu de ce dossier public** à la racine de GitHub Pages.

Ne jamais publier le générateur privé, le Studio privé ni une clé privée de signature.

## Compatibilité des accès

- protocole d’accès : `EA1` inchangé ;
- clé publique et `keyId` inchangés ;
- QR et liens existants restent prioritaires ;
- code long uniquement en secours ;
- le générateur privé V5.4.5 reste compatible avec cette application publique V5.4.6.

## Finition V5.4.6

- cohérence de l’affichage avec la portée réelle de l’accès joueur ;
- retour et hiérarchie des écrans Territoires / fiche territoire affinés ;
- corrections de libellés contextuels ;
- métriques distance / dénivelé / durée rendues lisibles sur petit écran ;
- zones tactiles et navigation basse sécurisées sur mobile ;
- gestion des safe areas iPhone/iPad ;
- nettoyage de règles CSS contradictoires ;
- cache PWA versionné pour forcer la mise à jour proprement.

## Intégrité

- 11 territoires ;
- 29 aventures configurées ;
- 28 aventures publiables côté joueur ;
- 197 étapes ;
- 197 IDs d’étapes uniques ;
- `data.js` strictement identique à la V5.4.5.

## Important

L’application publique doit être servie en HTTPS (par exemple GitHub Pages) pour bénéficier normalement des API PWA et de sécurité. Les tests logiciels et simulés ne remplacent pas une reconnaissance physique des parcours ni une validation finale sur appareils réels.
