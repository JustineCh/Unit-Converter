import React, {Fragment} from 'react';
import Navbar from '../layout/Navbar';
import FarenheitToCelsiusConverter from '../converters/FarenheitCelsiusConverter';

function Temp() {
   return (
      <Fragment>
         <Navbar className="card-header navbar navbar-primary" title={'Temperature Converter'} iconClass={'back-icon-primary'}/>
         <div className="card-body mt-3">
            <form className="">
              <FarenheitToCelsiusConverter />
            </form>
         </div>
      </Fragment>
   )
}

export default Temp;