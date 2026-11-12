# L'Atelier Cosmique — du Big Bang au système solaire

**Bêta 3** · même ergonomie que [L'Atelier des Forces](https://oumarmaiil-oss.github.io/atelierforces/)

Laboratoire virtuel interactif (collège · lycée) pour raconter l'histoire de l'univers : du Big Bang aux quarks, des atomes aux étoiles, des molécules au système solaire.

👉 **Essayer en ligne : [oumarmaiil-oss.github.io/ateliercosmique](https://oumarmaiil-oss.github.io/ateliercosmique/)**

## Contenu

| Onglet | Ce qu'on y fait |
|---|---|
| **1 · Big Bang** | Les sept étapes, de l'inflation à la naissance du Soleil, dans l'ordre (l'univers explique pourquoi une étape brûlée est impossible) ; calendrier cosmique. |
| **2 · Matière** | Trois quarks font un nucléon (règle des couleurs) ; construire un atome ou un ion ; stabilité du noyau ; tableau périodique ; éteindre un champ (fort, Higgs, électromagnétique, faible). |
| **3 · Étoiles** | Le Soleil jusqu'à la naine blanche, une étoile de 25 masses solaires jusqu'à la supernova ; courbe de l'énergie de liaison (pourquoi tout s'arrête au fer). |
| **4 · Molécules** | Molécules en 3D (géométries calculées) ; défi de la valence ; en vitrine, les deux principes actifs de l'Amloperin. |
| **5 · Système solaire** | Positions réelles du jour (JPL), vitesse du temps, inclinaison des axes, saisons et durée du jour selon la latitude, phase de la Lune, gravitation éteinte. |
| **Défis** | 18 défis qui se valident tout seuls quand on les réussit soi-même. |

## L'ergonomie (reprise de l'Atelier des Forces)

- **Panneau de gauche** : **📚 Exemples** (52 situations toutes prêtes, rangées par thème, avec une ligne « ce que ça illustre » ; badge « modifié » dès qu'on change un réglage) et **⚙ Réglages** en étapes numérotées, chacune avec une aide d'une ligne.
- **Scène** : encart d'explication en haut à gauche (cliquer le titre pour le réduire), légende en haut à droite, **barre de commandes** sous la scène (recommencer, action principale — étape suivante, lecture/pause ou rotation —, valeurs en direct, plein écran).
- **Bas de l'écran** : calendrier cosmique, fiche de l'atome et tableau périodique, courbe du fer, fiche de la molécule et vitrine Amloperin, phase de la Lune.
- **Niveaux d'affichage** : **1 · Découvrir** (le récit), **2 · Comprendre** (+ « Comment le sait-on ? »), **3 · Expert** (+ formules et valeurs).
- **Outils** : mode léger, taille des textes (A− A+), raccourcis clavier (Espace, R, ← →, 1 2 3, E, L, P, C, F ; liste avec la touche ?), **image** de la scène, **lien de partage** (onglet + exemple + niveau), bouton **« Signaler une erreur »** (WhatsApp, message prérempli), sources et simplifications (bouton ⓘ).
- **Téléphone et tablette** : la scène reste en haut ; Exemples, Réglages et les fiches s'ouvrent dans un volet à onglets.

## Utilisation

Un seul fichier : ouvrez `index.html` dans un navigateur. Three.js r128 (rendu 3D du système solaire) est intégré au fichier : l'atelier fonctionne **sans connexion** et peut se partager par WhatsApp ou clé USB.

## Pour les développeurs

- `node tests/verifier.mjs` : charge les 5 onglets et les 52 exemples sur 4 tailles d'écran et signale toute erreur JavaScript, toute requête réseau (fonctionnement hors ligne) et tout débordement horizontal — après `npm i --no-save playwright-core` (Chrome ou Chromium installé).
- Les données (étapes, étoiles, molécules, planètes, éléments) sont dans des blocs `<script type="application/json">` modifiables sans toucher au code.

## Licence

[MIT](LICENSE) — © 2026 Dr Oumar Sow. Réutilisation et contributions bienvenues.
