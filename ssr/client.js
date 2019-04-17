import React from 'react'
import { createBrowserHistory } from 'history';
import stores from '../app/js/store/index'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import {Provider} from 'mobx-react';
import App from '../app/App';
import '../app/js/components/languages/i18n';
import {syncHistoryWithStore } from 'mobx-react-router';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routing);

ReactDOM.hydrate(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
document.getElementById('app')
);