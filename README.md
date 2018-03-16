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

## Things to do
- Continue through webpack sections at https://webpack.js.org/guides/
  - TypeScript (DONE... but need to upgrade to awesome-typescript-loader because ts-loader is slow)
  - Assets: SCSS / CSS, files, font, data (xml)
  - Development: hot module replacement with style-loader etc.
  - Tree shaking, minification
  - Production setup
  - Code splitting
  - Lazy loading
  - Caching, cache busting, etc.
 - Progressive web app - runs offline
- Other Stuff (aside from Wedbpack):
  - React
  - React-Router
  - Redux
  - Maybe a UI library like Bootstrap or react-semantic-ui?
  - Authentication and Authorization... support Facebook login? React-router + Auth0
  - https
  - Backend JSON storage like Cloudfire
  - Deployment/rollout tool
  - Hosting
  - Actual character generator
    - Include a version field in data so can upgrade saved characters as versions change.

## Things Done
- Continue through webpack sections at https://webpack.js.org/guides/
  - Output: HtmlWebpackPlugin to create bundles for endpoints (without fixed names) (DONE), clean-webpack-plugin (DONE)
  - Development: source maps (DONE for dev), watch mode with webpack-dev-server (DONE), hot module replacement (DONE) 