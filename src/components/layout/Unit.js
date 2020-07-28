import React, {Fragment, useContext} from 'react';
import PropTypes from "prop-types";
import UnitContext from '../../context/unit/unitContext';

function Unit({inputType}) {
   const unitContext = useContext(UnitContext);
   const {val1, val2} = unitContext;

   const onChange = e => {
      if(inputType === 'celsius') {
         unitContext.calcFarenheit(e.target.value);
      } else if(inputType === 'farenheit') {
         unitContext.calcCelsius(e.target.value);
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
               value={inputType === 'celsius' || inputType === 'kilogram' ? val1 : val2}
               onChange={onChange}
            />
      </Fragment>
   )
}

Unit.propTypes = {
   inputType: PropTypes.string.isRequired,
}


export default Unit;
