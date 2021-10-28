# CRA-Express-Typescript-Starter

A starter project for Create React App/Express Project with Typescript.
Uses Typescript for both client and server side programming.

This one has better client/server separation, where both are treated as separate code bases with their own node_modules.
If you need both client/server managed as single node project, then look into [react-express-typescript-starter](https://github.com/vkkotha/react-express-typescript-starter).

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

## Usage
- Clone the repository.
- Open shell prompt and run
```shell script
$ cd server
$ npm install
$ npm start
```
- Open second shell prompt and run
```shell script
$ cd client
$ npm install
$ npm start
```
- Client is by deployed on [http://localhost:3000](http://localhost:3000) by default.
- Server is by deployed on [http://localhost:9000](http://localhost:9000) by default.
- Proxy for Server is Configured in client/package.json. Edit `proxy: http://localhost:9000` property if ports change.

## Building project
- To build client for production run
```shell script
$ cd client
$ npm run build
```
- To build client for production, that deploys on a specific domain
```shell script
$ cd client
$ PUBLIC_URL=https:<domain>/<path> npm run build
```

- To build server for production run
```shell script
$ cd server
$ npm run build
```

## Using in your own project
- Search and Replace 'cra-express-ts-starter' with your own project name.
- Update Readme.md to you project needs.
- Checkin to your own repository.

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

## License
[MIT License](https://github.com/vkkotha/cra-express-ts-starter/blob/master/LICENSE).