import React from 'react'
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import {Provider} from 'mobx-react';
import App from '../src/App';
import '../src/js/components/languages/i18n';
import {syncHistoryWithStore } from 'mobx-react-router';
import RootStore from '../src/js/store/rootStore'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}

const rootStore = new RootStore(window.__INITIAL_STATE__);
const element = document.getElementById('app');

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, rootStore.routing);

ReactDOM.hydrate(
  <Provider {...rootStore}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  element
);