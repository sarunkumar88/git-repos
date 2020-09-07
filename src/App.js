import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Master from './components/master/master';
import Detail from './components/detail/detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Master} />
        <Route path="/detail/:repoId" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
