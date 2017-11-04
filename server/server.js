import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

let app = express();

var compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'))
