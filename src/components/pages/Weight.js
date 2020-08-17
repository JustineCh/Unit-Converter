import React, {Fragment} from 'react';
import Navbar from '../layout/Navbar';
import PoundKilogramConverter from '../converters/PoundKilogramConverter';

function Weight() {
   return (
      <Fragment>
         <Navbar title={'Weight Converter'} iconClass={'back-icon-secondary'}/>
         <div className="card-body mt-3">
            <form className="form">
               <PoundKilogramConverter />
            </form>
         </div>
      </Fragment>
   )
}

export default Weight;