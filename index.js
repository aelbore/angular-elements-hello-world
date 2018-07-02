const { resolve, join, dirname } = require('path');

const { serverStart } = require('@ngx-devtools/server');
const { build  } = require('@ngx-devtools/build');
const { clean, copyFile, mkdirp } = require('@ngx-devtools/common');

const dest = 'dist';

/** copy the index.html to destination folder */
const copy = (dest) => {
  const srcPath = resolve(join('src', 'index.html'));
  const destPath = resolve(join(dest, 'index.html'));
  mkdirp(dirname(destPath));
  return copyFile(srcPath, destPath);
};

/**
 * 1. delete all files in the destination folder
 * 2. build into production code
 * 3. copy index.html and start the server to serve the static files.
*/
clean(dest)                   
  .then(() => build())   
  .then(() => Promise.all([ copy(dest), serverStart() ]));