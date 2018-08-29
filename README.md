# Webpack4Demo

See http://jbt.github.io/markdown-editor/ for Github markdown editor.

## Installing Webpack4

- See https://webpack.js.org/guides/getting-started/
  - npm init -y    (Sets up a package.json)
  - npm install --save-dev webpack   
  - Add /src and /dist folders
  - Add index.html
  - Add /src/index.js
  - npm install --save-dev webpack-cli
  - Add scripts section to package.json with build: webpack (npm run build)
  - Add mode: "development" to webpack.config.js; see https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
- Add HtmlWebpackPlugin; creates HTML entry point pages and scripts in /dist, with '[name].bundle.js' script defined in output.
  - npm install html-webpack-plugin --save-dev 
  - Add CleanWebpackPlugin to delete files in dist before each build
  - npm install clean-webpack-plugin --save-dev
- Add devtool "inline-source-map" to generate source maps.
- Add Webpack Dev Server to serve my app
  - npm install webpack-dev-server --save-dev 
  - Add devServer: { contentBase: './dist' }, to wepack config
  - Add "start": "webpack-dev-server --open", to script in package.json
  - npm start to run the app.
- Add hot reloading with webpack-dev-server
  - Add webpack, NamedModulesPlugin, HotModuleReplacementPlugin to wepack.config, set webpack-dev-server to hot
- Shifted webpack.config into a /webpack folder, adjust /dist path. 
- Added Typescript support
  - npm install ts-loader --save-dev
  - npm install typescript --save-dev
  - Add tsconfig file
  - Add rules and resolve for .tsx to webpack config
  - Add index.ts and swap entry point to point to it
  - Works, but ts-loader is really slow... should swap to awesome-typescript-loader...
- Added awesome-typescript-loader (ATS) for faster TS compilation
  - npm install awesome-typescript-loader --save-dev  
  - Set module loader to use awesome-typescript-loader, which requires babel
  - npm install babel-loader --save-dev
  - npm install react-hot-loader --save-dev
  - ATS 4 has an issue with Webpack 4, kills hot reloading... had to upgrade ATS to v5.0.0-1 which includes patch
  - npm install awesome-typescript-loader@5.0.0-1 --save-dev
- Git credential caching was not working, had to run git config --global credential.helper winstore
  - Had to install Git For Windows
- Add CSS loading
  - Add modules, rules for CSS
  - npm install style-loader css-loader --save-dev 
  - Also want to support splitting the CSS into its own file via extract-text-webpack-plugin
  - npm install extract-text-webpack-plugin --save-dev 
  - extract-text-webpack-plugin is not currently working with webpack 4... https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701 
  suggests using mini-css-extract-plugin
  - npm install mini-css-extract-plugin --save-dev 
- Add SCSS loading:
  - Add rules, module for SCSS
  - npm install sass-loader --save-dev
  - npm install node-sass --save-dev
- Add image file loading:
  - npm install file-loader --save-dev 
  - add rules, module for file-loader for jpg, gif, png.
  - import image on entry page (just as import "./filename.gif")
- Add font file loading:
  - Also uses file-loader
  - Add rules, module for file-loader for various font typescript
  - Add @font-face to scss or css file.
- Add loading XML and CSV data (JSON data is supported natively)
  - npm install csv-loader xml-loader --save-dev 
  - Add rules, module for loaders for .csv and .xml file typescript
  - Had to add a typings.d.ts file with a wildcare definition for xml and csv module types.
  - Then just import * as dogs from "./dogs.xml"
- Add React
  - As per https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
  - npm install --save react react-dom @types/react @types/react-dom
  - npm install --save-dev source-map-loader
  - Update tsconfig.json with react and sourcemap settings
  - Add src/Hello.tsx
  - import Hello component in index.tsx
- Add Redux
  - This turned into a mess as I tried to get the latest versions of redux, react-redux, redux-thunk, etc. to 
  all play together nicely, and to get clean, simple code as a result. For example, the latest Typescript definitions
  for react-redux seem to be a) really unnecessarily complex, and b) are not compatible with react-thunk.
  - Plus, I just want the simplest possible setup for redux, without action creator libraries or side effect handlers 
  like redux-thunk (whch I'd like to replace with react-saga).
  - I'd also like to try ducks setup for redux, where you keep all the code for each module in one file (instead of 
  scattered acroos a bunch of different reducer, action, component, etc. folders).
  - So, back to the start... uninstalling redux, react-redux, redux-immutable-state-invariant, redux-thunk, 
  typescript-fsa.
  - I'm going to begin with aiming for something similar to this React+Saga setup: https://ohyayanotherblog.ghost.io/redux-saga-clock/, with 
  demo code at https://github.com/granmoe/redux-saga-clock-tutorial 
  - Initially, I just want a simple redux-only stopwatch app... no action creator libraries, no side-effect handlers.
  I'll add them in in subsequent commits. 
  - See https://github.com/rokoroku/react-redux-typescript-boilerplate for minimal setup... even this turned out to be 
 a mess. 
  - In the end I just put together a very basic Redux setup that just keeps an array of Widget objects in state, and allows you to 
add new widgets.
- Add React-Router
  - npm install react-router-dom --save
  - npm install @types-react @types-react-router-dom --save-dev
  - Added publicPath and historyApiFallback to webpack.config. This is so if you request a route like
  localhost:8080/thief, the request is redirected to the default page, so the JS can load then deal 
  with the routing on the clientside.
  - Wrapped example RouterExample in <BrowserRouter>
  - Created /RoutingExample
- Testing with Jest
  - Recommendations from https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3
  - Jest is a FB library used by FB for testing React
  - Jest site at https://jestjs.io/
  - Use ts-jest for integration with TypeScript
  - npm install --save-dev jest ts-jest @types/jest
  - Add jest section to package.json.
  - Add /jestTest
  - Add "test" script to package.son scripts section
  - npm test
  - Recent bug in jest... Security Exception regards localStorage.. add testUrl to jest section in package.config
  - Fix issue with invalid tsconfig.json. Now working using .ts tests. 
- Going to start looking at FeatherJS for REST/Sockets/Authentication.
  - See C:\Users\MikeMundy\Documents\VIsual Studio Code\2018\FeathersJS_01 
  - Going to try installing a feathers app over the existing code using the generator
  - npm install @feathersjs/cli -g
  - feathers generate app
  - Get conflict as it will overwrite package.json... ynaxdH , H = help
  - I'll let it do the overwrite, then use source control to add back in the stuff that was lost
  - feathers generate app
  - It overwrote package.json, .gitignore, .readme.md
  - Manually integrated changes to package.json, .gitignore and readme
  - Still works with npm start
  - Feathers app works with npm run start_feathers
  - But now have two different hosting/test-runner setups. 
  - Feathers tests run via npm run test_feathers
  - So... I'm now using FeathersJS to scaffold my app, and I can use its generators to add services/hooks/etc. 
  However, it uses a different host/test setup, and obviously it generates code written in JS, not in TS. Can 
  I just swich JS to TS and have it work ok? Will TS play nicely?
  - Another option would be to re-do this process, starting with Feathers and layering on top of that. 
  - I'll add in the rest of the feathers tutorial, then backtrack. 
  - feathers generate service
  - feathers generate authentication
  - add authenticate hook to src/services/messages/messages.hooks.js
  - feathers generate hook (for process-message)
  - Add authentication code to src/hooks/process-message.js
  - feathers generate hook (for gravatar)
  - Add code to src/hooks/gravatar.js
  - feathers generate hook (for populate-user)  
  - Add code for src/hooks/populate-user.js
  - Update public/index.html
  - Add app.js and add code
  - Bingo, working chat app; npm run start_feathers, http://localhost:3030
  - Question is... is it worth committing to using feathers generators? They use ES6 and generate Mocha tests... is it better to abandon using
  the generators, manually switch the code over to TypeScript, and create future services/hooks by hand?
  - ... Right, what I'm gonna do is create a little React+Redux front end page with a login UI, and drag the feathers stuff into that.  
  - Created a couple of Login and Registration components inside the app component. Probably should seperate them into a user admin component
   with it's own redux connection. 
  - Nearly working... issue with nested containers. 




- But first I'm adding in internationalization
  - Options: https://phraseapp.com/blog/posts/react-i18n-best-libraries/ 
  - I'll try React-Intl. Supported by Yahoo.
  - npm install react-intl --save
  - Come back to that... app structure is a mess, need to arrange routing, redux provider properly first
- Redux + Routing:
  - https://redux.js.org/advanced/usagewithreactrouter
  - 



## Things to do
- Continue through webpack sections at https://webpack.js.org/guides/
  - TSLinting
  - Development: hot module replacement (DONE) with style-loader (DONE) etc.
  - Tree shaking, minification
  - Production setup
  - Code splitting
  - Lazy loading
  - Caching, cache busting, etc.
  - Progressive web app - runs offline
- Other Stuff (aside from Wedbpack):
  - React (DONE)
    - This includes compiling .tsx... see wepack config, modules, rules, .ts, uncomment // plugins: ['react-hot-loader/babel'], 
  - React-Router (DONE)
  - Redux (DONE)
  - Redux Dev Tools (DONE)
  - Enzyme for testing React components (to work alongside Jest)
  - Saga (rather than thunks) for side effects
  - Maybe a UI library like Bootstrap or react-semantic-ui? Probably Material-UI.
  - Authentication and Authorization... support Facebook login? React-router + Auth0
  - https
  - Backend JSON storage like Cloudfire
  - Deployment/rollout tool
  - Hosting
  - Actual character generator
    - Include a version field in data so can upgrade saved characters as versions change.
  - Tests
  - Server-side rendering?
  - Accessibility
  - Internationalisation
  - After March, downgrade awesome-typescript-loader to v4.0.0 and see if still works. (had to upgrade to 5.0.0-1 to patch hot reload bug with webpack 4)
  - After March, check if can eliminate mini-css-extract-plugin... may be natively supported by webpack 4 by then

## Things Done
- Continue through webpack sections at https://webpack.js.org/guides/
  - Output: HtmlWebpackPlugin to create bundles for endpoints (without fixed names) (DONE), clean-webpack-plugin (DONE)
  - Development: source maps (DONE for dev), watch mode with webpack-dev-server (DONE), hot module replacement (DONE) 
  - TypeScript (DONE... but need to upgrade to awesome-typescript-loader because ts-loader is slow)
  - Assets: SCSS / CSS (DONE), files/images (DONE), fonts (DONE), data (xml and csv) (DONE)

## Feathers readme

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).

