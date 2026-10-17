const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");

fs.copyFileSync(
  path.join(buildDir, "index.html"),
  path.join(buildDir, "404.html")
);

console.log("Created 404.html for GitHub Pages");