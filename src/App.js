import React from 'react';
import styles from './App.module.scss';
import './assets/sass/main.scss';
import Layout from './components/Layout/Layout';
import Home from './views/Sections/Home/Home';
import GeneralConditions from './views/Sections/GeneralConditions/GeneralConditions';
import LegalMentions from './views/Sections/LegalMentions/LegalMentions';
import StreetMaps from './views/Sections/StreetMaps/StreetMaps';
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

function App() {
  const pathname = window.location.pathname;
  const routeId = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
  return (
    <BrowserRouter>  
      <div className={styles.app}>
        <Route exact path="/legal-mentions" component={LegalMentions} />
        <Route exact path="/general-conditions" component={GeneralConditions} />
        <Route exact path="/street-maps" component={StreetMaps} />
        <HashRouter hashType="noslash">
          <Switch>
            { pathname === "/" ? <Redirect exact from="/" to="/home" /> : null }
            {routeId.map((id) => <Route key={id} path={`/:${id}`} component={() => Layout(Home)} />)}
          </Switch>
        </HashRouter>
      </div>
    </BrowserRouter>
  );
}

export default App;
