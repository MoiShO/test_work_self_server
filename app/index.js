import React from 'react';
import App from './App';
import './js/components/languages/i18n';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router-dom'
import {Provider} from 'mobx-react';
import {template} from '../ssr/template'
import stores from './js/store/index'


export function server(ctx, initialState) {

  const context = {}
  const store = stores

  const serverConfig = (ctx, context) => (
    <StaticRouter
      location={ctx.url}
      context={context}
    >
      <App />
    </StaticRouter>
  );

  const renderHTML = ReactDOMServer.renderToString(
    <Provider {...store}>
      {serverConfig(ctx, context)}
    </Provider>
  );

  return template(renderHTML, initialState);
}

export function serverPug(ctx) {

  const context = {}
  const store = stores

  const serverConfig = (ctx, context) => (
    <StaticRouter
      location={ctx.url}
      context={context}
    >
      <App />
    </StaticRouter>
  );

  const renderHTML = ReactDOMServer.renderToString(
    <Provider {...store}>
      {serverConfig(ctx, context)}
    </Provider>
  );

  return renderHTML;
}
