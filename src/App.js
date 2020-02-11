import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home.js';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/" component={() => <Home/>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
