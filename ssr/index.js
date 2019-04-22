import React from 'react';
import App from '../src/App';
import '../src/js/components/languages/i18n';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router-dom'
import {Provider} from 'mobx-react';
import stores from '../src/js/store/index'
import ssr from '../src/js/store/storeSSR'
import RootStore from '../src/js/store/rootStore'

const db = require('../controller/db_controllers');
const mobx = require('mobx');

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
    <Provider {...stores}>
      {serverConfig(ctx, context)}
    </Provider>
  );

  return renderHTML;
}
