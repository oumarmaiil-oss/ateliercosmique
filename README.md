# L'Atelier Cosmique — du Big Bang au système solaire

**Bêta 5** · culture scientifique · même ergonomie que [L'Atelier des Forces](https://oumarmaiil-oss.github.io/atelierforces/)

Laboratoire virtuel de **culture scientifique** : l'histoire de l'univers, du Big Bang aux quarks, des atomes aux étoiles, de la lumière aux galaxies, des molécules au système solaire, et du quark à l'univers observable. Chaque affirmation porte un **badge de certitude** : *établi*, *bien soutenu*, *hypothèse* ou *débattu*.

👉 **Essayer en ligne : [oumarmaiil-oss.github.io/ateliercosmique](https://oumarmaiil-oss.github.io/ateliercosmique/)**

## Contenu

| Onglet | Ce qu'on y fait |
|---|---|
| **1 · Big Bang** | Les sept étapes, de l'inflation à la naissance du Soleil, dans l'ordre (l'univers explique pourquoi une étape brûlée est impossible) ; calendrier cosmique. |
| **2 · Matière** | Trois quarks font un nucléon (règle des couleurs) ; construire un atome ou un ion ; stabilité du noyau ; tableau périodique ; éteindre un champ (fort, Higgs, électromagnétique, faible). |
| **3 · Étoiles** | Le Soleil jusqu'à la naine blanche, une étoile de 25 masses solaires jusqu'à la supernova ; courbe de l'énergie de liaison (pourquoi tout s'arrête au fer). |
| **4 · Lumière** | Spectres d'émission (H, He, Na, Hg, Ne), raies de Fraunhofer du Soleil, couleur et température (lois de Wien et de Planck), décalage vers le rouge et loi de Hubble-Lemaître ; défis « étoile mystère » et « galaxie mystère ». |
| **5 · Galaxies et télescopes** | **Voyage en 3D** par paliers : la Voie lactée, le voisinage du Soleil, Alpha du Centaure (avec la planète candidate de 2025, badge *hypothèse*), Proxima et ses planètes, TRAPPIST-1 (comparée à l'orbite de Mercure). **Trou noir interactif** : rayons de lumière (trajectoire exacte), matière lancée au doigt (capture, orbite, spaghettification), disque d'accrétion et jets. **Observer au télescope** : 6 cibles × des paliers préréglés (œil, jumelles, lunette de Galilée, télescope d'amateur, VLT, Hubble, Webb, radiotélescopes), image zoomable et instrument en 3D. Plus : Voie lactée de dessus et de profil, matière noire, composition de l'univers, Andromède. |
| **6 · Molécules** | Molécules en 3D (géométries calculées) ; défi de la valence ; en vitrine, les deux principes actifs de l'Amloperin. |
| **7 · Système solaire** | Positions réelles du jour (JPL), vitesse du temps, inclinaison des axes, saisons et durée du jour selon la latitude, phase de la Lune, gravitation éteinte. |
| **8 · Échelles** | Zoom continu sur 45 puissances de dix, du quark (moins de 10⁻¹⁸ m) à l'univers observable (≈ 93 milliards d'années-lumière), avec 26 objets repères et une règle logarithmique. |
| **Défis** | 26 défis qui se valident tout seuls quand on les réussit soi-même. |

## L'ergonomie (reprise de l'Atelier des Forces)

- **Panneau de gauche** : **📚 Exemples** (106 situations toutes prêtes, rangées par thème, avec une ligne « ce que ça illustre » ; badge « modifié » dès qu'on change un réglage) et **⚙ Réglages** en étapes numérotées, chacune avec une aide d'une ligne.
- **Scène** : encart d'explication en haut à gauche (cliquer le titre pour le réduire), légende en haut à droite, **barre de commandes** sous la scène (recommencer, action principale — étape suivante, lecture/pause ou rotation —, valeurs en direct, plein écran).
- **Bas de l'écran** : calendrier cosmique, fiche de l'atome et tableau périodique, courbe du fer, fiche de la molécule et vitrine Amloperin, phase de la Lune.
- **Niveaux d'affichage** : **1 · Découvrir** (le récit et le badge de certitude), **2 · Comprendre** (+ « Comment le sait-on ? » et la raison du badge), **3 · Expert** (+ formules et valeurs).
- **Outils** : mode léger, taille des textes (A− A+), raccourcis clavier (Espace, R, ← →, 1 2 3, E, L, P, C, F ; liste avec la touche ?), **image** de la scène, **lien de partage** (onglet + exemple + niveau), bouton **« Signaler une erreur »** (WhatsApp, message prérempli), sources et simplifications (bouton ⓘ).
- **Profils par appareil** : *Complet*, *Équilibré* ou *Léger*, choisi automatiquement selon l'appareil (modifiable dans l'en-tête) : nombre d'étoiles, finesse du rendu, images des planètes.
- **Zoom partout** : molette ou pincement, glisser pour se déplacer ou tourner, double-clic pour revenir.
- **Téléphone et tablette** : la scène reste en haut ; Exemples, Réglages et les fiches s'ouvrent dans un volet à onglets.

## Utilisation

Un seul fichier : ouvrez `index.html` dans un navigateur. Three.js r128 (rendu 3D du système solaire) est intégré au fichier : l'atelier fonctionne **sans connexion** et peut se partager par WhatsApp ou clé USB.

## Pour les développeurs

- `node tests/verifier.mjs` : charge les 8 onglets et les 106 exemples sur 4 tailles d'écran et signale toute erreur JavaScript, toute requête réseau (fonctionnement hors ligne) et tout débordement horizontal — après `npm i --no-save playwright-core` (Chrome ou Chromium installé).
- Les données (étapes, étoiles, molécules, planètes, éléments) sont dans des blocs `<script type="application/json">` modifiables sans toucher au code.

## Images

Cartes des planètes, de la Lune et du Soleil : [Solar System Scope](https://www.solarsystemscope.com/textures/), d'après des données de la NASA, licence [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) (images réduites). Exoplanètes : vues d'artiste. Vues des télescopes : simulations calculées.

## Licence

[MIT](LICENSE) — © 2026 Dr Oumar Sow. Réutilisation et contributions bienvenues.
