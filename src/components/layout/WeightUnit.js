import React, {Fragment, useContext} from 'react';
import PropTypes from "prop-types";
import UnitContext from '../../context/unit/unitContext';

function WeightUnit({inputType}) {
   const unitContext = useContext(UnitContext);
   const {kgVal, lbsVal} = unitContext;

   const onChange = e => {
      if(inputType === 'kilogram') {
         unitContext.calcLbs(e.target.value);
      } else {
         unitContext.calcKg(e.target.value);
      } 
   };

   return (
      <Fragment>
            <input
               type="number"
               name={inputType}
               placeholder="Enter the value..."
               value={inputType === 'kilogram' ? kgVal : lbsVal}
               onChange={onChange}
            />
      </Fragment>
   )
}

WeightUnit.propTypes = {
   inputType: PropTypes.string.isRequired,
 };

export default WeightUnit;