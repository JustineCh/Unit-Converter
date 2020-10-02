import React, {Fragment} from 'react';
import TwoInputConverter from "../TwoInputConverter";
import Kilogram from "../weight/Kilogram";
import Pound from "../weight/Pound";

function PoundKilogramConverter() {
   const formula1to2 = (x) => (x * 2.2046226218);
   const formula2to1 = (x) => (x / 2.2046226218);

   return (
      <Fragment>
         {TwoInputConverter(Kilogram, Pound, formula1to2, formula2to1)}
      </Fragment>
   )
}

export default PoundKilogramConverter;