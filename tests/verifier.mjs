// Vérification automatique de l'atelier (à lancer avant chaque envoi sur GitHub).
//   npm i --no-save playwright-core      (Chrome ou Chromium doit être installé)
//   node tests/verifier.mjs [chemin/vers/chrome]
// Sur 4 tailles d'écran : aucune erreur JavaScript, aucune requête réseau (hors ligne),
// pas de défilement horizontal, et chacun des exemples de chaque onglet se charge.
import { chromium } from 'playwright-core';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const chrome = process.argv[2] || process.env.CHROME || '/usr/bin/google-chrome';
const url = pathToFileURL(resolve('index.html')).href;
const ECRANS = { ordinateur: [1440, 900], tablette: [820, 1180], telephone: [390, 844], telephoneL: [844, 390] };
const ONGLETS = ['big-bang', 'matiere', 'etoiles', 'lumiere', 'galaxies', 'molecules', 'systeme-solaire', 'echelles'];
const b = await chromium.launch({ executablePath: chrome, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
let echecs = 0;
const ko = msg => { echecs++; console.log('  ✗ ' + msg); };
for (const [nom, [w, h]] of Object.entries(ECRANS)) {
  const mobile = w < 1000 || h < 600;
  const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: mobile, isMobile: mobile });
  const p = await ctx.newPage(); const errs = [], reqs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('request', r => { if (!/^(file|data|blob):/.test(r.url())) reqs.push(r.url()); });
  await p.goto(url); await p.waitForTimeout(800);
  let n = 0;
  for (const t of ONGLETS) {
    await p.evaluate(t => { location.hash = t; }, t); await p.waitForTimeout(300);
    const cartes = await p.$$eval(`#sim-${t} .excard`, l => l.length);
    for (let i = 0; i < cartes; i++) { await p.evaluate(([t, i]) => document.querySelectorAll(`#sim-${t} .excard`)[i].click(), [t, i]); n++; }
    await p.waitForTimeout(300);
    const vh = await p.evaluate(t => document.querySelector(`#sim-${t} .view`).clientHeight, t);
    if (vh < 120) ko(`${t} : scène trop basse (${vh} px)`);
  }
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  console.log(`${nom} (${w}×${h}) : ${n} exemples chargés`);
  if (sw > w + 1) ko(`débordement horizontal (${sw} px)`);
  if (errs.length) ko('erreurs : ' + errs.join(' | '));
  if (reqs.length) ko('requêtes réseau : ' + reqs.join(' | '));
  await ctx.close();
}
await b.close();
console.log(echecs ? `${echecs} problème(s)` : 'Tout est bon.');
process.exit(echecs ? 1 : 0);
