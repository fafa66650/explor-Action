# FAFATRAINING – Banyuls Aventure V2 INTERACTIVE GUIDE

Application PWA statique prête pour GitHub Pages.

## Nouveautés V2
- 6 poses de l’avatar FAFATRAINING intégrées et utilisées selon le contexte : accueil, briefing, indice, sécurité, réussite, mission.
- 2 logos FAFATRAINING intégrés : identité principale + signature premium.
- « Le savais-tu ? » débloqué après chaque énigme, pour apprendre sans donner la réponse avant l’épreuve.
- Lecture vocale locale des découvertes via la synthèse vocale du navigateur.
- Journal des découvertes dans le sac.
- Briefing visuel propre à chaque mission.
- Badges de progression et vibrations/haptique lorsque le support le permet.
- Bouton d’installation PWA quand le navigateur le propose.
- Codes d’accès corrigés : toutes les missions et chaque mission ont maintenant un scope distinct.
- Cache hors ligne des avatars, logos et fichiers de l’application.

## Installation sur GitHub Pages
1. Décompresser l’archive.
2. Envoyer **tout le contenu** à la racine du dépôt GitHub.
3. GitHub > Settings > Pages > Deploy from a branch > `main` / `(root)`.
4. Ouvrir l’URL HTTPS fournie par GitHub Pages.

## Administration
PIN initial : `2468`.
Change-le depuis l’espace administrateur avant utilisation publique.
Les codes peuvent être créés pour 3 h, 6 h, 12 h, 1 j, 3 j, 7 j, 14 j ou 30 j.

## Hors ligne
Après un premier chargement en ligne, le Service Worker met en cache l’application, les avatars et les logos.
La carte intégrée est schématique et ne dépend pas de Leaflet/OpenStreetMap.
Le GPS reste une fonction du téléphone et ne nécessite pas à lui seul de connexion internet.

## Important terrain
Les coordonnées/points d’intérêt doivent faire l’objet d’une reconnaissance terrain avant exploitation avec un groupe. Horaires, accès, travaux, propriétés privées et précision GPS peuvent évoluer.
