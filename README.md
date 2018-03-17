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
  

## Things to do
- Continue through webpack sections at https://webpack.js.org/guides/
  - Assets: SCSS / CSS (DONE), files, font, data (xml)
  - TSLinting
  - Development: hot module replacement (DONR) with style-loader (DONE) etc.
  - Tree shaking, minification
  - Production setup
  - Code splitting
  - Lazy loading
  - Caching, cache busting, etc.
 - Progressive web app - runs offline
- Other Stuff (aside from Wedbpack):
  - React
    - This includes compiling .tsx... see wepack config, modules, rules, .ts, uncomment // plugins: ['react-hot-loader/babel'], 
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
  - Tests
  - Accessibility
  - Internationalisation
  - After March, downgrade awesome-typescript-loader to v4.0.0 and see if still works. (had to upgrade to 5.0.0-1 to patch hot reload bug with webpack 4)
  - After March, check if can eliminate mini-css-extract-plugin... may be natively supported by webpack 4 by then

## Things Done
- Continue through webpack sections at https://webpack.js.org/guides/
  - Output: HtmlWebpackPlugin to create bundles for endpoints (without fixed names) (DONE), clean-webpack-plugin (DONE)
  - Development: source maps (DONE for dev), watch mode with webpack-dev-server (DONE), hot module replacement (DONE) 
  - TypeScript (DONE... but need to upgrade to awesome-typescript-loader because ts-loader is slow)
