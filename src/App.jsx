import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import SwitchLanguage from './js/components/switchingLanguage/index';
import './App.css';
import HomeComp from './Home';
import Details from './Details';

const App = () => {
  return (
    <div className="row">
      <Link className="col-sm-1 home offset-sm-1 link_homepage" to="/">{i18next.t('nav-home') !== 'nav-home' ? i18next.t('nav-home') : 'HOME'}</Link>
      <SwitchLanguage />
      <Switch>
        <Route exact path="/" component={HomeComp} />
        <Route path="/:id" component={Details} />
        <Route path="/:id" component={Details} />
      </Switch>
    </div>
  )
}

export default withTranslation()(App)
