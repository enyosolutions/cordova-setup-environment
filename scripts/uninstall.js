#!/usr/bin/env node

//After uninstall script to remove the incrementBuildNum.js script from the users scripts/ directory

var fs = require('fs'),
    path = require('path'),
    cwd = process.cwd();

var buildIncrementPath = path.join(cwd, '../../scripts', 'setupEnv.js');

fs.unlink(buildIncrementPath);
console.log('Removed: ', buildIncrementPath);
