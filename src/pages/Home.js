import React, {Fragment} from 'react';

function Home() {
   return (
      <Fragment>
         <h1 className="card-header">Temperature and Weight Converter</h1>
         <div className="card-body">
            <p className="card-text">What you need to convert?</p>
            <button className="btn btn-block btn-primary" href="temperature.js">Temperature</button>
            <button className="btn btn-block btn-primary" href="weight.js">Weight</button>
         </div>
      </Fragment>
   )
}

export default Home;