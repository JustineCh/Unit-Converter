import React, { Fragment, useContext } from "react";
import CurrencyContext from "../../../context/currency/currencyContext";


function CurrencyOption({selectedCurrency,onChangeCurrency}) {
  const currencyContext = useContext(CurrencyContext);
  const { currencyOptions } = currencyContext;

  const onChangeCurrencyHandler = (e) => {
    onChangeCurrency(e.target.value);
    e.preventDefault()
  }

  return (
    <Fragment>
      <select
        value={selectedCurrency}
        onChange={onChangeCurrencyHandler}
        className="btn label btn-teritiary-color"
      >
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Fragment>
  );
}

export default CurrencyOption;
