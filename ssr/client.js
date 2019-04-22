import React from 'react'
import { createBrowserHistory } from 'history';
import stores from '../src/js/store/index'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import {Provider} from 'mobx-react';
import App from '../src/App';
import '../src/js/components/languages/i18n';
import {syncHistoryWithStore } from 'mobx-react-router';
import ssr from '../src/js/store/storeSSR'

import RootStore from '../src/js/store/rootStore'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}

console.log(window.__INITIAL_STATE__)
const rootStore = new RootStore(window.__INITIAL_STATE__);
const element = document.getElementById('app');

console.log(rootStore)

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routing);

ReactDOM.hydrate(
  <Provider {...rootStore}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  element
);