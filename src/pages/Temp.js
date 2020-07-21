import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';


function Temp() {
   return (
      <Fragment>
         <div className="card-header navbar">Temperature Converter</div>
         <div className="card-body">
            <div className="d-flex items-container justify-content-around">
               <button className="btn btn-primary"><sup>o</sup>C</button>
               <button className="btn btn-border-primary">{<FontAwesomeIcon icon={faArrowsAltH} size="lg"/>}</button>
               <button className="btn btn-primary"><sup>o</sup>F</button>
            </div>
            <div className="d-flex items-container justify-content-around">
               <input type="number" name="celsius" id="celsius" placeholder="Enter the value..." className=""/>
               <button className="btn btn-primary">RUN</button>
               <input type="number" name="farenheit" id="farenheit" placeholder="Enter the value..." className=""/>
            </div>
         </div>
      </Fragment>
   )
}

export default Temp;