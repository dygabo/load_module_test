// app.js
const Module = require("module");

const originalLoad = Module._load;

Module._load = function (request, parent, isMain) {
  console.log(`!!!! Loading module: ${request}`);
  
  return originalLoad.apply(this, arguments);
};

// Example usage: Load some modules
const fs = require("fs");     // This should trigger the patched _load
const path = require("path"); // This should trigger the patched _load
const http2 = require("node:http2"); // the builtins don't trigger the evaluate hook
const code = require("./code"); // this triggers the evaluate hook if available

// do something
console.log("Current directory:", fs.readdirSync(path.resolve(".")));
console.log(`code export: ${code.a}`);
