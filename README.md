## Angular Elements Hello World

```
git clone https://github.com/aelbore/angular-elements-hello-world.git
npm install
```

### Add index.html in `src` folder
```html
<!doctype html>
<html>
  <head>
    <base href="/">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Angular Elements Hello World</title>
  </head>
  <body>
    <app-root></app-root>
    <script src="node_modules/@webcomponents/custom-elements/src/native-shim.js"></script>
    <script src="node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.min.js"></script>

    <!--this will be the destination path of the production code  -->
    <script src="dist/main/bundles/main.umd.min.js"></script>
  </body>
</html>
```

### Build and Run the Application
+ Create index.js file.
+ Add following code
```js
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
```


### Start the Application
+ run the app
```
node . --prod --pkg src/app/package.json
```
+ Go to browser then http://localhost:4000

### Check if Custom Elements is working
+ In chrome browser, `Inspect` or Go to `Developer tools.`
+ In console do the following:
```js
/// get the define custom element
let CustomElement = customElements.get('app-root'); 

/// create new instance of customElement
let element = new CustomElement();

/// append to body
document.body.append(element.cloneNode(true))
```



