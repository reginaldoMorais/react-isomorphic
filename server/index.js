require('babel-register')({});

const express = require('express');
const app = express();
const PORT = 8080;

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Dashboard = require('../views/view/Dashboard/Dashboard.jsx');

app.use(express.static('public'));

app.get('/', (req, res) => {
  var props = { title: 'React Isomorphic' }
  var html = ReactDOMServer.renderToString(React.createElement(Dashboard, props));
  res.send(html);
  /*
  const template = ({ state, title, content, assets }) => (`
    <!DOCTYPE html>

    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>

        <link href="${assets.css}" rel="stylesheet" />
        <script>
          window.__INITIAL_STATE__ = ${state};
        </script>
      </head>
      <body>
        <div id="wrapper">${content}</div>
        <script async defer src="${assets.js}"></script>
      </body>
    </html>
  `);
  const store = {};
  const assets = {
    css: '/bundle.css',
    js: '/bundle.js'
  };
  
  res.send(template({
    state: JSON.stringify(store),
    title: 'React Isomorphic',
    content: ReactDOMServer.renderToString(React.createElement(Dashboard)),
    assets
  }));*/
});

app.listen(PORT, () => {
  console.log('Server running: http://localhost:', PORT);
});