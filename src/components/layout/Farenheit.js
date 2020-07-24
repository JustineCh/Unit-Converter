import React, {Fragment, useContext} from 'react';
import UnitContext from '../../context/unit/unitContext';

function Farenheit() {
   const unitContext = useContext(UnitContext);
   const {farenheitVal} = unitContext;

 
   const onChange = e => {
      unitContext.calcCelsius(e.target.value);
   };


   return (
      <Fragment>
            <input
               type="number"
               name="farenheit"
               placeholder="Enter the value..."
               value={farenheitVal}
               onChange={onChange}
            />
      </Fragment>
   )
}

export default Farenheit;