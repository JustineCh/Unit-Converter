import React, {Fragment, useContext} from 'react';
import UnitContext from '../../context/unit/unitContext';

function Celsius() {
   const unitContext = useContext(UnitContext);
   const {celsiusVal} = unitContext;

   const onChange = e => {
      unitContext.calcFarenheit(e.target.value);
   };

   return (
      <Fragment>
            <input
               type="number"
               name="celsius"
               placeholder="Enter the value..."
               value={celsiusVal}
               onChange={onChange}
            />
      </Fragment>
   )
}

export default Celsius;