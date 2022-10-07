#!/usr/bin/env node

import {spawn} from 'node:child_process';
import {dirname as pathDirname, normalize as pathNormalize, sep as pathSep} from 'node:path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);
// console.log('__dirname: ', __dirname);

const packagePath = pathNormalize(__dirname + './..')
// console.log('packagePath', packagePath);

const httpServerCommandPath = packagePath + pathSep + 'node_modules' + pathSep + '.bin' + pathSep + 'http-server';
// console.log('httpServerCommandPath: ', httpServerCommandPath);

const httpServerPathArgument = packagePath + pathSep + 'dist'
// console.log('httpServerPathArgument: ' + httpServerPathArgument);

spawn(httpServerCommandPath, [httpServerPathArgument, '-o ?name=package-browser'], { shell: true, stdio: 'inherit' });