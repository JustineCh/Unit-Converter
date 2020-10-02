import React, { Fragment, useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faArrowsAltH,
  faArrowsAltV,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import CurrencyRow from "./CurrencyRow";
import CurrencyContext from "../../../context/currency/currencyContext";

function CurrencyConverter() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const currencyContext = useContext(CurrencyContext);
  const {
    exchangeRate,
    getCurrencyOptions,
    currency1,
    currency2,
    changeCurrency1,
    changeCurrency2,
    getExchangeRate
  } = currencyContext;

  useEffect(() => {
    getCurrencyOptions();
    // eslint-disable-next-line
  }, []);

  const formula1to2 = x => x * exchangeRate;
  const formula2to1 = x => x / exchangeRate;

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
      break;
    case directions.VAL2TOVAL1:
      desktopArrow = faArrowLeft;
      mobileArrow = faArrowUp;
      break;
    case directions.NOTHING:
      desktopArrow = faArrowsAltH;
      mobileArrow = faArrowsAltV;
      break;
    default:
      desktopArrow = faArrowsAltH;
      mobileArrow = faArrowsAltV;
  }

  // const recalculateValue1 = (value) => {
  //   setVal1(formula2to1(value))
  // }

  const changeCurrency1Handler = (newValue) => {
    changeCurrency1(newValue)
    getExchangeRate(newValue, currency2)
  }

  const changeCurrency2Handler = (newValue) => {
    changeCurrency2(newValue)
    getExchangeRate(currency1, newValue)
  }

  const changeVal1 = (e) => {
    if (e.target.value === "") {
      setVal1("");
      setVal2("");
      setDirection(directions.NOTHING);
    } else {
      setVal1(e.target.value);
      setVal2(formula1to2(e.target.value));
      setDirection(directions.VAL1TOVAL2);
    }
  }

  const changeVal2 = (e) => {
    if (e.target.value === "") {
      setVal1("");
      setVal2("");
      setDirection(directions.NOTHING);
    } else {
      console.log(e.target.value)
      setVal2(e.target.value);
      setVal1(formula2to1(e.target.value));
      setDirection(directions.VAL2TOVAL1);
    }
  }

  return (
    <Fragment>
      <CurrencyRow
        value={val1}
        selectedCurrency={currency1}
        onChangeCurrency={changeCurrency1Handler}
        onChange={changeVal1}
      />
      <div className="desktop-view-arrow btn btn-border btn-border-icon m-2">
        {<FontAwesomeIcon icon={desktopArrow} size="lg" />}
      </div>
      <div className="mobile-view-arrow btn btn-border btn-border-icon m-2">
        {<FontAwesomeIcon icon={mobileArrow} size="lg" />}
      </div>
      <CurrencyRow
        value={val2}
        selectedCurrency={currency2}
        onChangeCurrency={changeCurrency2Handler}
        onChange={changeVal2}
      />
    </Fragment>
  );
}

export default CurrencyConverter;
