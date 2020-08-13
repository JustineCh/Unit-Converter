import React, { Fragment } from "react";
import TwoInputConverter from "../layout/TwoInputConverter";
import Celsius from "../layout/Celsius";
import Farenheit from "../layout/Farenheit";

function FarenheitToCelsiusConverter() {
   const formula1to2 = (x) => ((x * 9 / 5) + 32);
   const formula2to1 = (x) => ((x - 32) * 5 / 9);
 
   return (
      <Fragment>
         {TwoInputConverter(Celsius, Farenheit, formula1to2, formula2to1)}
      </Fragment>
   )
 }

 export default FarenheitToCelsiusConverter;