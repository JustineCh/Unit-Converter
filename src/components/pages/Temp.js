import React, {Fragment, useState, useContext} from 'react';
import Navbar from '../layout/Navbar';
import Celsius from '../layout/Celsius';
import UnitContext from '../../context/unit/unitContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';


function Temp() {
   const unitContext = useContext(UnitContext);
   const {farenheitVal} = unitContext;

   return (
      <Fragment>
         <Navbar className="card-header navbar" title={'Temperature Converter'} />
         <div className="card-body">
            <div className="d-flex items-container justify-content-around">
               <div className="btn-unit btn-primary-color"><sup>o</sup>C</div>
               <button className="btn btn-border-primary">{<FontAwesomeIcon icon={faArrowsAltH} size="lg"/>}</button>
               <button className="btn btn-primary"><sup>o</sup>F</button>
            </div>
            <div className="d-flex items-container justify-content-around">
               {/* <input type="number" name="celsius" id="celsius" placeholder="Enter the value..." className=""/> */}
               <Celsius />
               <button className="btn btn-primary">RUN</button>
               <input  name="farenheit" id="farenheit" placeholder="Enter the value..." value={farenheitVal} className=""/>
            </div>
         </div>
      </Fragment>
   )
}

export default Temp;