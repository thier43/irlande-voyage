// build.js — injecte la version dans sw.js avant chaque déploiement
const fs = require('fs');
const path = require('path');

const version = Date.now(); // timestamp unique à chaque build
const swPath = path.join(__dirname, 'sw.js');

let sw = fs.readFileSync(swPath, 'utf8');
sw = sw.replace('__VERSION__', version);
fs.writeFileSync(swPath, sw);

console.log(`✓ sw.js mis à jour — version : ${version}`);
