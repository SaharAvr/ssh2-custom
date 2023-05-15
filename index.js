'use strict'

const path = require('node:path');
const __nodeModulesDir = path.join(__dirname, 'prebuilt_node_modules');
globalThis.__nodeModulesDir = `${__nodeModulesDir}/`;

const ssh2 = require('./prebuilt_node_modules/ssh2/lib/index.js');
module.exports = ssh2;
