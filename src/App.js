import React from 'react';
import styles from './App.module.scss';
import './assets/sass/main.scss';
import Portfolio from './views/Portfolio/Portfolio';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <HashRouter hashType="slash">
      <div className={styles.app}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path={"/home"} component={() => <Portfolio />} />
          <Route path={"/:id"} component={() => <Portfolio />} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
