import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Packages from './pages/Packages';
import Customize from './pages/Customize';
import './assets/styles/theme.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/packages" component={Packages} />
        <Route path="/customize" component={Customize} />
      </Switch>
    </Router>
  );
};

export default App;