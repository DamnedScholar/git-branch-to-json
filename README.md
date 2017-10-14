# git-branch-to-json

![Node](https://img.shields.io/node/v/git-branch-to-json.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/git-branch-to-json.svg?style=flat-square)](https://www.npmjs.com/package/git-branch-to-json)
[![Travis](https://img.shields.io/travis/DamnedScholar/git-branch-to-json/master.svg?style=flat-square)](https://travis-ci.org/DamnedScholar/git-branch-to-json)
[![David](https://img.shields.io/david/DamnedScholar/git-branch-to-json.svg?style=flat-square)](https://david-dm.org/DamnedScholar/git-branch-to-json)
[![Coverage Status](https://img.shields.io/coveralls/DamnedScholar/git-branch-to-json.svg?style=flat-square)](https://coveralls.io/github/DamnedScholar/git-branch-to-json)
[![NPM](https://img.shields.io/npm/dt/git-branch-to-json.svg?style=flat-square)](https://www.npmjs.com/package/git-branch-to-json)

> This package converts the output of `git branch` into a sensible JS object.

### Usage

```js
import gitBranchToJson from 'git-branch-to-json';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add git-branch-to-json (--dev)

or npm

	npm install git-branch-to-json (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import gitBranchToJson from 'git-branch-to-json';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
gitBranchToJson

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/DamnedScholar/git-branch-to-json) example.

### Builds

If you don't use a package manager, you can [access `git-branch-to-json` via unpkg (CDN)](https://unpkg.com/git-branch-to-json/), download the source, or point your package manager to the url.

`git-branch-to-json` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `git-branch-to-json` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist/umd` folder](https://unpkg.com/git-branch-to-json/dist/umd/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/git-branch-to-json) on your page. The UMD builds make `git-branch-to-json` available as a `window.gitBranchToJson` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
