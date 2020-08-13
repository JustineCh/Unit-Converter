import React, { Fragment, useState, useContext} from "react";
import UnitContext from '../../context/unit/unitContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TwoInputConverter(Input1, Input2, formula1to2, formula2to1) {
   const [val1, setVal1] = useState("");
   const [val2, setVal2] = useState("");
   const unitContext = useContext(UnitContext);
   const {arrow} = unitContext;
 
   return (
     <Fragment>
        <Input1
         value={val1}
         onChange={e => {
           setVal1(e.target.value);
           setVal2(formula1to2(e.target.value));
         }}
       />
       <div className="btn btn-border btn-border-primary m-2">
         {<FontAwesomeIcon icon={arrow} size="lg" />}
       </div>
       <Input2
         value={val2}
         onChange={e => {
           setVal2(e.target.value);
           setVal1(formula2to1(e.target.value));
         }}
       />
     </Fragment>
   );
 }

 export default TwoInputConverter;