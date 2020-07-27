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
         <Navbar className="card-header navbar navbar-primary" title={'Temperature Converter'} iconClass={'back-icon-primary'}/>
         <div className="card-body mt-3">
            <form className="">
               <label className="btn-unit btn-primary-color"><sup>o</sup>C</label>
               <Celsius />
               <div className="btn btn-border btn-border-primary m-2">{<FontAwesomeIcon icon={arrow} size="lg"/>}</div>
               <label className="btn-unit btn-primary-color"><sup>o</sup>F</label>
               <Farenheit />
            </form>
         </div>
      </Fragment>
   )
}

export default Temp;