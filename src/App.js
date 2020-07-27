import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Temp from './components/pages/Temp';
import Weight from './components/pages/Weight';
import Currency from './components/pages/Currency';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import UnitState from './context/unit/UnitState';

function App() {
  return (
    <UnitState>
      <Router>
        <div className="card card-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/temp" component={Temp} />
            <Route exact path="/weight" component={Weight} />
            <Route exact path="/currency" component={Currency} />
          </Switch>
        </div>
      </Router>
    </UnitState>
  );
}

export default App;
