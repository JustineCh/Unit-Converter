import React, {Fragment} from 'react';
import TwoInputConverter from "../layout/TwoInputConverter";
import Kilogram from "../layout/Kilogram";
import Pound from "../layout/Pound";

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