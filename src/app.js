// app.js
const Module = require('module');

const originalLoad = Module._load;

Module._load = function (request, parent, isMain) {
  console.log(`!!!! Loading module: ${request}`);
  
  return originalLoad.apply(this, arguments);
};

// Example usage: Load some modules
const fs = require('fs'); // This will trigger the patched _load
const path = require('path'); // This will also trigger the patched _load
const http2 = require("node:http2");

// Example functionality
console.log('Current directory:', fs.readdirSync(path.resolve('.')));
console.log('Monkey-patching complete!');