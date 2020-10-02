import React, { Fragment } from "react";
import TwoInputConverter from "../TwoInputConverter";
import Celsius from "../temperature/Celsius";
import Farenheit from "../temperature/Farenheit";

function FarenheitCelsiusConverter() {
   const formula1to2 = (x) => ((x * 9 / 5) + 32);
   const formula2to1 = (x) => ((x - 32) * 5 / 9);
 
   return (
      <Fragment>
         {TwoInputConverter(Celsius, Farenheit, formula1to2, formula2to1)}
      </Fragment>
   )
 }

 export default FarenheitCelsiusConverter;