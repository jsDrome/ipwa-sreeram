import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { StaticRouter } from 'react-router-dom';

import Routes from '../../client/web/routes';

import { isUserLoggedIn, getEmailFromCookies } from '../server.utils';

const router = express.Router();

router.get('/(:a/:b/:c/:d)?', (req, res) => {
  const sheets = new ServerStyleSheets();
  const _isUserLoggedIn = isUserLoggedIn(req.cookies);
  const _user = getEmailFromCookies(req.cookies);

  const app = ReactDOMServer.renderToString(
    sheets.collect(
      <StaticRouter location={req.url} context={{}}>
        <Routes />
      </StaticRouter>
    )
  );

  const css = sheets.toString();
  const helmet = Helmet.renderStatic();
  return res.send(template(helmet, app, css, _isUserLoggedIn, _user));
});

const template = (helmet, html, css, isUserLoggedIn, user) => `
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.style.toString()}
      ${helmet.script.toString()}
      <style id="jss-server-side">${css}</style>
    </head>
    <script>
      window._ipwa = {
        isUserLoggedIn: ${isUserLoggedIn},
        user: '${user}',
      };
    </script>
    <body>
      <div id="root">${html}</div>
      <script type="text/javascript" src="/app.bundle.js"></script>
      <script type="text/javascript" src="/npm.bundle.js"></script>
    </body>
  </html>
`;

export default router;
