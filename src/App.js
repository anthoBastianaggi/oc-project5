import React from 'react';
import styles from './App.module.scss';
import Portfolio from './views/Portfolio/Portfolio';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
 
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Switch>
          <Route exact path={"/"} component={() => <Portfolio />} />
          <Route exact path={"/home"} component={() => <Portfolio />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
