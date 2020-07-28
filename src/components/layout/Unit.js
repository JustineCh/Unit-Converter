import React, {Fragment, useContext} from 'react';
import PropTypes from "prop-types";
import UnitContext from '../../context/unit/unitContext';

function Unit({inputType, value}) {
   const unitContext = useContext(UnitContext);
   const {val1, val2} = unitContext;

   const onChange = e => {
      if(value === val1 && inputType === 'celsius') {
         unitContext.calcVal2(e.target.value);
      } else if(value === val2 && inputType === 'farenheit') {
         unitContext.calcVal1(e.target.value);
      } else if(inputType === 'kilogram') {
         unitContext.calcLbs(e.target.value);
      } else if(inputType === 'pound') {
         unitContext.calcKg(e.target.value)
      }
   };

   return (
      <Fragment>
            <input
               type="number"
               name={inputType}
               placeholder="Enter the value..."
               value={value}
               onChange={onChange}
            />
      </Fragment>
   )
}

Unit.propTypes = {
   inputType: PropTypes.string.isRequired,
}


export default Unit;
