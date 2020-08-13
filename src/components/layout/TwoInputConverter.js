import React, { Fragment, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

function TwoInputConverter(Input1, Input2, formula1to2, formula2to1) {
   const [val1, setVal1] = useState("");
   const [val2, setVal2] = useState("");
   const [arrow, setArrow] = useState(faArrowsAltH);
 
   return (
     <Fragment>
       <Input1
         value={val1}
         onChange={e => {
           if (e.target.value === "") {
             setVal1("");
             setVal2("");
             setArrow(faArrowsAltH);
           } else {
             setVal1(e.target.value);
             setVal2(formula1to2(e.target.value));
             setArrow(faArrowRight);
           }
         }}
       />
       <div className="btn btn-border btn-border-primary m-2">
         {<FontAwesomeIcon icon={arrow} size="lg" />}
       </div>
       <Input2
         value={val2}
         onChange={e => {
           if (e.target.value === "") {
             setVal1("");
             setVal2("");
             setArrow(faArrowsAltH);
           } else {
             setVal2(e.target.value);
             setVal1(formula2to1(e.target.value));
             setArrow(faArrowLeft);
           }
         }}
       />
     </Fragment>
   );
 }

 export default TwoInputConverter;