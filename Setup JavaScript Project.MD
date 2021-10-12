# Project Setup

Create a directory and run the following command.

```sh
npm init 
```

For this tutorial, I will be adding an index.js file to the `src` folder, and this will be our entry point.
Our file directory should look like this.

```
your-project-folder/
|--src/
  |--index.js
|--package.json
```

# Install Packages

## Nodemon
Nodemon is a tool that helps develop Js/Nodejs based applications by automatically restarting the node application when file changes detected.

```sh
npm install nodemon --save-dev
```

## Jest
Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.

```sh
npm install jest --save-dev
```

## Babel

Babel is a tool that is used to convert ECMAScript 2015+ code into a backward compatible version of JavaScript so that older browsers and environment will be able to understand your code.

Run the following command to install babel:

```sh
npm install @babel/core @babel/cli @babel/preset-env @babel/node @babel/runtime --save-dev
```

Next, we need to tell babel how to transpile our files by creating a `.babelrc` file in the root directory
and adding the following code to it.

```js
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

If you want to set up a custom alias for directories, specific files, or even other npm modules. Let's take a look to this handy [plugin](https://github.com/tleunen/babel-plugin-module-resolver)

## ESLint + Airbnb + Prettier

These tools will be identifying, reporting and formatting on patterns found in ECMAScript/JavaScript code, with the goal of making the code more consistent and avoiding bugs.

Run the following command to install:

```sh
npm install eslint \
            eslint-config-airbnb-base \
            eslint-config-prettier \
            eslint-plugin-import \
            eslint-plugin-prettier \
            eslint-plugin-jest \
            prettier --save-dev
```

### Prettier Configuration

Create the file named `.prettierrc` in the root directory and adding the following code to it.

```js
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

If you'd like a JSON schema to validate your configuration, one is available here: [http://json.schemastore.org/prettierrc](http://json.schemastore.org/prettierrc).

### Eslint Configuration

Create the file named `.eslintrc.json` in the root directory and add the following code to it.

```js
{
  "extends": [
    "airbnb-base",
    "prettier",
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["jest"],
  "rules": {
    "allowForLoopAfterthoughts": 0,
    "func-names": "off",
    "no-plusplus": 0,
    "no-unused-vars": "warn",
    "no-console": 0,
    "no-process-exit": 0,
    "no-param-reassign": 0,
    "no-restricted-syntax": 0,
    "no-lonely-if": 0,
    "max-classes-per-file": 0
  },
  "env": {
    "jest/globals": true
  }
}
```

## Scripts

Open up `package.json` then add the following code to the scripts section

```js
{
  ...
  "scripts": {
    "build": "babel ./src --out-dir ./build",
    "start": "nodemon --exec babel-node src/index.js",
    "lint": "eslint .",
    "test": "jest"
  },
  ...
}
```

## Integrated with VSCode

Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions

Configure VS Code

```js
{
  ..
  "editor.formatOnSave": false,
  ..
}
```