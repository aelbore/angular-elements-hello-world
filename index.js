const { resolve, join, dirname } = require('path');

const { serverStart } = require('@ngx-devtools/server');
const { build  } = require('@ngx-devtools/build');
const { clean, copyFile, mkdirp } = require('@ngx-devtools/common');

const dest = 'dist';

const copy = (dest) => {
  const srcPath = resolve(join('src', 'index.html'));
  const destPath = resolve(join(dest, 'index.html'));
  mkdirp(dirname(destPath));
  return copyFile(srcPath, destPath);
};

clean(dest)
  .then(() => build())
  .then(() => Promise.all([ copy(dest), serverStart() ]));