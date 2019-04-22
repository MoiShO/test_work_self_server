import React from 'react';
import App from '../src/App';
import '../src/js/components/languages/i18n';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router-dom'
import {Provider} from 'mobx-react';

export async function serverPug(ctx, context) {

  context = {}

  const serverConfig = (ctx, context) => (
    <StaticRouter
      location={ctx.url}
      context={context}
    >
      <App />
    </StaticRouter>
  );

  const renderHTML = ReactDOMServer.renderToString(
    <Provider {...ctx.mobx.store}>
      {serverConfig(ctx, context)}
    </Provider>
  );

  return renderHTML;
}
