import React, { Fragment } from "react";
import CurrencyState from "../../context/currency/CurrencyState";
import Navbar from "../layout/Navbar";
import CurrencyConverter from "../layout/currency/CurrencyConverter";

const Currency = props => {
  return (
    <CurrencyState>
      <Fragment>
        <Navbar
          className="card-header navbar navbar-primary"
          title={"Currency Converter"}
          iconClass={"back-icon-teritiary"}
        />
        <p className="m-2">
          Choose the currencies and the amounts to get the exchange rate
        </p>
        <div className="card-body mt-3">
          <form className="form">
            <CurrencyConverter />
          </form>
        </div>
      </Fragment>
    </CurrencyState>
  );
};

export default Currency;
