import React, {Fragment} from 'react';
import Navbar from '../layout/Navbar';
import FarenheitCelsiusConverter from '../layout/temperature/FarenheitCelsiusConverter';

function Temp() {
   return (
      <Fragment>
         <Navbar className="card-header navbar navbar-primary" title={'Temperature Converter'} iconClass={'back-icon-primary'}/>
         <div className="card-body mt-3">
            <form className="form">
              <FarenheitCelsiusConverter />
            </form>
         </div>
      </Fragment>
   )
}

export default Temp;