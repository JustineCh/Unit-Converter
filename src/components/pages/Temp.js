import React, {Fragment, useContext} from 'react';
import Navbar from '../layout/Navbar';
import Celsius from '../layout/Celsius';
import Farenheit from '../layout/Farenheit';
import UnitContext from '../../context/unit/unitContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Temp() {
   const unitContext = useContext(UnitContext);
   const {arrow} = unitContext;

   return (
      <Fragment>
         <Navbar className="card-header navbar" title={'Temperature Converter'} />
         <div className="card-body">
            <form className="">
               <label className="btn-unit btn-primary-color"><sup>o</sup>C</label>
               <Celsius />
               <button className="btn btn-border-primary m-2">{<FontAwesomeIcon icon={arrow} size="lg"/>}</button>
               <label className="btn-unit btn-primary-color"><sup>o</sup>F</label>
               <Farenheit />
            </form>
         </div>
      </Fragment>
   )
}

export default Temp;