# CRA-Express-Typescript-Starter
![node](http://img.shields.io/badge/node-16+-brightgreen.svg)
![npm](http://img.shields.io/badge/npm-8+-orange.svg)

A starter project for Create React App/Express Project with Typescript.
Uses Typescript for both client and server side programming.

This one has better client/server separation, where both are treated as separate code bases in thier own folders and are treated as separate node projects.
Using [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) you can share node_modules and run npm scripts from root directory.

If you choose you can treat them as completely separate node projects by issuing npm commands inside those project folders.
If you need both client/server managed as single node project, then look into [react-express-typescript-starter](https://github.com/vkkotha/react-express-typescript-starter).

## Perquisites
- node.js 16+
- npm 8+

## Features
- Both React Client and Express Server code in same project.
- [eslint](https://eslint.org) on both Client and Server with different linting rules.
- Sensible industry recommended eslint rules with few overrides.
- [prettier](https://prettier.io) for Code formatting
- [jest](https://jestjs.io) and [@testing-library](https://testing-library.com/docs/) for Unit testing React app.
- [react-scripts](https://www.npmjs.com/package/react-scripts) for Client side app bundling, Running in dev mode, testing.
- Hashed application resource files generation for React app. (handled by react-scripts)
- Template based index.html file generation and html pretty output. (handled by react-scripts)
- npm scripts to lint, test, start server in dev mode.
- npm scripts to watch for client/server changes and redeploy the app on both client and server.
- npm script to run client only tests.
- npm scripts to build for production with optimized resource generation. (handled by react-scripts)
- npm script to start production server.
- Client app generation to build folder along with copy content from public folder.
- Start Client and Server apps separately, and develop independently if needed.
- Client proxies to Server in Development mode for backend API access.
- Configured to used [Typescript](https://www.typescriptlang.org/) as primary language for both Client app and Server side coding.
- Express server app accesslogs with [morgan](https://www.npmjs.com/package/morgan)
- Sensible minimal .gitingore, eslint, prettier configs.
- npm workspaces to share node_modules

## Usage
- Clone the repository.
- Open shell prompt and run
```shell script
$ npm install --workspace=client
$ npm start --workspace=client
```
- Open second shell prompt and run
```shell script
$ npm install --workspace=server
$ npm start --workspace=server
```
- Client is by deployed on [http://localhost:3000](http://localhost:3000) by default.
- Server is by deployed on [http://localhost:9000](http://localhost:9000) by default.
- Proxy for Server is Configured in client/package.json. Edit `proxy: http://localhost:9000` property if ports change.

## Building project
- To build client for production run
```shell script
$ npm run build --workspace=server
```
- To build client for production, that deploys on a specific domain
```shell script
$ PUBLIC_URL=https:<domain>/<path> npm run build --workspace=server
```

- To build server for production run
```shell script
$ npm run build --workspace=server
```

## Development
- To install additional packages issue 
```shell script
$ npm i <package> -w <workspace>
```
Do not install packages without workspace name.

## Using in your own project
- Search and Replace 'cra-express-ts-starter' with your own project name.
- Update Readme.md to you project needs.
- Checkin to your own repository.

## Lessons learned
- eslint 8.x was failing with Intellij, so had to downgrade to 7.x
- To make intellij work properly Install prettier plugin and set the preferences to use prettier from node_modules
- Turned on Automatic ESLint configuration in Intellij.
- To debug the express server in Intellij, build the project and then add `npm run serve` in Intellij Edit Configuration and Run in debug mode.
- tsconfig.json controls Typescript compilation with tsc (compiler) or ts-node (on the fly compiler and runner)
- tsconfig.json target and module properties control what version of Javascript is generated and the which module style(commonjs, esnext) is generated code.
  <br/>For Browser applications webpack uses ts-loader to load and compile to javascript and do the bundling.
  <br/>Webpack also uses tsconfig.json settings to generate the version of javascript and module style.
- Experimented with ES6+ Javascript Generation with esnext module Style, so node can directly run ES6+ code. (es5 and commonjs styles so far seems to be more robust.)
  <br/>For this set `"module": "esnext"` in tsconfig.json. This generates JS output with esnext module system.
  <br/>Set `type:"module"` in package.json and run `node --es-module-specifier-resolution=node ./dist/server.js`
  <br/>`type="module"` allows node.js to load modules to load from .js files instead of .mjs files.
  <br/>`--es-module-specifier-resolution=node` option allows `import p from ./package/p` instead of `import p from ./package/p.js`
- The option `baseUrl: "src"` in tsconfig.json allows you use absolute imports from the root instead of relative path. 
  <br/>So in a deeply nested project structure you can do `import p from 'app/package1/subpacakge1/p` instead of `import p from '../..package1/p`
  <br/>However node.js can't load this structure when `type="module"` It only understands
- Code like `__dirname, __filename` won't work when you generate JS code with esnext module system. 
  <br/>They rely on import.meta.url to get current Script path.
- ESlint, Prettier and typescript coordination for linting along with Intellij IDE properly working takes some playing around with installing proper packages/versions, setting correct prettier rules and correct eslint plugins.
- Eslint can check typescript code using additional packages `@typescript-eslint/eslint-plugin`  `@typescript-eslint/parser`
- ESlint works with prettier configs using `eslint-config-prettier` `eslint-plugin-prettier`
- With this configuration Intellij ESLint checks can do prettier configs as well.
- To format Code using prettier, use `cmd` + `opt` + `shift` + `.` in Intellij IDEA editor.
- Short list of ECMAScript versions

|Edition|Name|Features|Node version|
|-------|----|--------|------------|
|5|es5|javascript|v6|
|6|es2015|classes, import|v8,v10|
|7|es2016|block scoping, await/async keywords, math **|v12|
|8|es2017|async/await, atomics, Object.values|v14|
|9|es2018|spread operator, rest params, async iteration, promise.finally|v16|

Here is [ECMA Reference](https://en.wikipedia.org/wiki/ECMAScript)
<br/>Here is the [Compatabilty Matrix](https://kangax.github.io/compat-table/es2016plus/)

- Module system evolved from Following
  <br/>IIFE -> AMD -> CommonJS -> UMD -> SystemJS & ES6
  <br/>Here is good article on [JS Module Evolution](https://www.kevinleary.net/javascript-module-patterns-evolution/)


## TODO
- Environment specific config options for Server side app using npm [config](https://www.npmjs.com/package/config) module.
- Unit testing framework for Server side app.
- e2e testing framework with [cypress](https://www.cypress.io).
- mock test examples on both client and server.
- Add DB Connectivity on server.
- DB dev setup framework.
- DB Upgrade framework.
- CI/CD scripts using github actions.
- Deploy to K8 Cluster with helm charts.
- Deployment with Server config based on environment.
- Configuration Secrets management.
- Add React samples with Redux Store, Effects, Sagas
- React sample which can interact with backend api.
- Security framework integration for authentication.
- User/Role framework.
- Feature flagging framework.
- Navigation & Routing.
- Error handling.
- Sample for data Grids/Forms.
- Responsive React app.
- Setting up with [React Native](https://reactnative.dev/) framework.
- Deploy Client app on mobile devices. 

## References
- A quick FE app generator [createapp.dev](https://createapp.dev/webpack/no-library)
- [Create React APP](https://create-react-app.dev/)
- [Express App generator](https://expressjs.com/en/starter/generator.html)

## License
[MIT License](https://github.com/vkkotha/cra-express-ts-starter/blob/master/LICENSE).