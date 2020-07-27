import React, {Fragment, useContext} from 'react';
import PropTypes from "prop-types";
import UnitContext from '../../context/unit/unitContext';

function TempUnit({inputType}) {
   const unitContext = useContext(UnitContext);
   const {celsiusVal, farenheitVal} = unitContext;

   const onChange = e => {
      if(inputType === 'celsius') {
         unitContext.calcFarenheit(e.target.value);
      } else if(inputType === 'farenheit') {
         unitContext.calcCelsius(e.target.value);
      }
   };

   return (
      <Fragment>
            <input
               type="number"
               name={inputType}
               placeholder="Enter the value..."
               value={inputType === 'celsius' ? celsiusVal : farenheitVal}
               onChange={onChange}
            />
      </Fragment>
   )
}

TempUnit.propTypes = {
   inputType: PropTypes.string.isRequired,
 };

export default TempUnit;