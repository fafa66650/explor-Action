# Mise en ligne GitHub Pages — V4

## Important : nettoyage de l’ancienne version
Dans le dépôt GitHub, supprime les anciens fichiers de l’application avant d’envoyer la V4. Ne mélange pas V2/V3/V4.

La racine finale doit contenir uniquement les fichiers et le dossier `assets/` fournis dans cette archive.

## Procédure
1. GitHub > dépôt Explor’Action.
2. Supprime les anciens `index.html`, `app.js`, `data.js`, `style.css`, `sw.js`, `manifest.webmanifest`, anciens dossiers de missions et anciens fichiers Leaflet inutilisés.
3. Téléverse tout le contenu de l’archive V4.
4. Vérifie que `VERSION.txt` affiche **4.0.0**.
5. Settings > Pages > Deploy from a branch > `main` > `/(root)`.
6. Attends le déploiement.
7. Ouvre le site puis fais une recharge forcée une fois.
8. Si une ancienne PWA est installée sur le téléphone : supprime son raccourci, ouvre la V4 dans le navigateur, puis réinstalle-la.

## Contrôle rapide
Dans GitHub, ouvre `app.js` et recherche :
`const VERSION='4.0.0';`

Dans `sw.js`, vérifie :
`explor-action-v4-20260907`
