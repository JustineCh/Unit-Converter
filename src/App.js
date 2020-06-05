import React from 'react';
import './styles/index.css'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  document.body.style.backgroundColor = '$primary-color';

  return (
    <div className="App">
        <div className="App-container">
          <div className="card card-container">
            <h1>Temperature and Weight Calculator</h1>
            <div className="card">
              <a href="temperature.js">Calculate Temperature</a>
              <a href="weight.js">Calculate Weight</a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
