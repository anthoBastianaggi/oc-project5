import React from 'react';
import styles from './App.module.scss';
import './assets/sass/main.scss';
import Portfolio from './views/Portfolio/Portfolio';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
function App() {
 
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path={"/home"} component={() => <Portfolio />} />
          <Route path={"/:id"} component={() => <Portfolio />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
