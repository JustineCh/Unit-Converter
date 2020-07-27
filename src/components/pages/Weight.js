import React, {Fragment, useContext} from 'react';
import Navbar from '../layout/Navbar';
import Kilogram from '../layout/Kilogram';
import Pound from '../layout/Pound';
import UnitContext from '../../context/unit/unitContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Weight() {
   const unitContext = useContext(UnitContext);
   const {arrow} = unitContext;

   return (
      <Fragment>
         <Navbar title={'Weight Converter'} iconClass={'back-icon-secondary'}/>
         <div className="card-body mt-3">
            <form className="form-container">
               <label className="btn-unit btn-secondary-color">KG</label>
               <Kilogram />
               <div className="btn btn-border btn-border-secondary m-2">{<FontAwesomeIcon icon={arrow} size="lg"/>}</div>
               <label className="btn-unit btn-secondary-color">LBS</label>
               <Pound />
            </form>
         </div>
      </Fragment>
   )
}

export default Weight;