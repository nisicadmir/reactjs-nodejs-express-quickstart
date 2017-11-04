# ReactJS, NodeJS and Express quickstart

This is a quickstart app for ReactJS, NodeJS and Express using one node_modules folder. After downloading, you are ready to start developing your web application. 

 * IMPORTANT - This application does not include hot reloading.

## Tools
package.json includes following packages:
```
  "dependencies": {
    "express": "^4.16.2",
    "react": "^16.0.0",
    "react-dom": "^16.0.0"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "webpack": "^3.8.1",
    "webpack-dev-middleware": "^1.12.0"
  }
```
webpack.config.js is the main configuration file. Check: https://github.com/webpack/webpack-dev-middleware for more configuration.

## Installation
Clone the project:
```
git clone https://github.com/nisicadmir/reactjs-nodejs-express-quickstart.git
```
Get into the folder
```
cd reactjs-nodejs-express-quickstart
```
Run installation
```
npm install
```

## Using app
Run server
```
npm run server
```
Go to localhost:3000
```
http://localhost:3000/
```
## Files
- Client (ReactJS) files are in /client/src

- Public folder is in /client/public:


- NodeJS and express are in /server