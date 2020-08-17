import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faArrowsAltH,
  faArrowsAltV,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function TwoInputConverter(Input1, Input2, formula1to2, formula2to1) {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  
  let desktopArrow;
  let mobileArrow;

  const directions = {
    VAL1TOVAL2: 0,
    VAL2TOVAL1: 1,
    NOTHING: 2,
  };

  const [direction, setDirection] = useState(directions.NOTHING);

   switch (direction) {
     case directions.VAL1TOVAL2:
       desktopArrow = faArrowRight;
       mobileArrow = faArrowDown;
       break
     case directions.VAL2TOVAL1:
       desktopArrow = faArrowLeft;
       mobileArrow = faArrowUp;
       break
     case directions.NOTHING:
       desktopArrow = faArrowsAltH;
       mobileArrow = faArrowsAltV;
       break
     default:
       desktopArrow = faArrowsAltH;
       mobileArrow = faArrowsAltV;
   }

  return (
    <Fragment>
      <Input1
        value={val1}
        onChange={e => {
          if (e.target.value === "") {
            setVal1("");
            setVal2("");
            setDirection(directions.NOTHING);
          } else {
            setVal1(e.target.value);
            setVal2(formula1to2(e.target.value));
            setDirection(directions.VAL1TOVAL2);
          }
        }}
      />
      <div className="desktop-view-arrow btn btn-border btn-border-icon m-2">
        {<FontAwesomeIcon icon={desktopArrow} size="lg" />}
      </div>
      <div className="mobile-view-arrow btn btn-border btn-border-icon m-2">
        {<FontAwesomeIcon icon={mobileArrow} size="lg" />}
      </div>
      <Input2
        value={val2}
        onChange={e => {
          if (e.target.value === "") {
            setVal1("");
            setVal2("");
            setDirection(directions.NOTHING);
          } else {
            setVal2(e.target.value);
            setVal1(formula2to1(e.target.value));
            setDirection(directions.VAL2TOVAL1);
          }
        }}
      />
    </Fragment>
  );
}

export default TwoInputConverter;
