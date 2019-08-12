import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import { routes } from './const/routes'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => <div>Root</div>} />
        {
          routes.map(route =>
            <Route exact path={`/${route}`} render={() => <div>{route}</div>} />
          )
        }
      </Switch>
      hello
    </div>
  );
}

export default App;
