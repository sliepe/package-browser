#!/usr/bin/env node

import {spawn} from 'node:child_process';
import {dirname as pathDirname, normalize as pathNormalize, sep as pathSep} from 'node:path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);
// console.log('__dirname: ', __dirname);

const packagePath = pathNormalize(__dirname + './..')
// console.log('packagePath', packagePath);

spawn('npx http-server dist -o ?name=package-browser', { shell: true, stdio: 'inherit', cwd: packagePath});