import React, { Fragment } from "react";
import CurrencyOption from './CurrencyOption';

function CurrencyRow({ value, onChange, selectedCurrency, onChangeCurrency }) {
  return (
    <Fragment>
      <CurrencyOption selectedCurrency={selectedCurrency} onChangeCurrency={onChangeCurrency} />
      <input className="input" value={value} onChange={onChange} />
    </Fragment>
  );
}

export default CurrencyRow;
