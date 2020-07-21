import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Temp from './pages/Temp';
import Weight from './pages/Weight';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  // document.body.style.backgroundColor = '$primary-color';

  return (
    <Router>
      <div className="app">
          <div className="app-container">
            <div className="card card-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/temp" component={Temp} />
                <Route exact path="/weight" component={Weight} />
              </Switch>
            </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
