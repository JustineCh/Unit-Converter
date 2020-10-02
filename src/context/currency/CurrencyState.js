import React, { useReducer } from "react";
import CurrencyContext from "./currencyContext";
import CurrencyReducer from "./currencyReducer";
import {
  GET_CURRENCY_OPTIONS,
  CURRENCY_1_CHANGE,
  CURRENCY_2_CHANGE,
  GET_EX_RATE,
} from "../types";

const CurrencyState = props => {
  const initialState = {
    currencyOptions: [],
    currency1: "",
    currency2: "",
    exchangeRate: 1,
  };

  const [state, dispatch] = useReducer(CurrencyReducer, initialState);

  const url = "https://api.exchangeratesapi.io/latest";

  const getCurrencyOptions = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const currOptions = [data.base, ...Object.keys(data.rates)];
    const curr1 = data.base;
    const curr2 = data.base;

    dispatch({
      type: GET_CURRENCY_OPTIONS,
      payload: {
        currencyOptions: currOptions,
        currency1: curr1,
        currency2: curr2,
      },
    });
  };

  const changeCurrency1 = newValue => {
    let newCurrency = newValue;
    dispatch({
      type: CURRENCY_1_CHANGE,
      payload: newCurrency,
    });
  };

  const changeCurrency2 = newValue => {
    let newCurrency = newValue;
    dispatch({
      type: CURRENCY_2_CHANGE,
      payload: newCurrency,
    });
  };

  const getExchangeRate = async (currency1, currency2) => {
    if (currency1 != null && currency2 != null) {
      let exRate;
      const response = await fetch(
        `${url}?base=${currency1}&symbols=${currency2}`
      );
      const data = await response.json();
      exRate = data.rates[currency2];
      console.log('state:', exRate )
      dispatch({
        type: GET_EX_RATE,
        payload: exRate,
      });
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        currencyOptions: state.currencyOptions,
        currency1: state.currency1,
        currency2: state.currency2,
        exchangeRate: state.exchangeRate,
        getCurrencyOptions,
        changeCurrency1,
        changeCurrency2,
        getExchangeRate,
      }}
    >
      {props.children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyState;
