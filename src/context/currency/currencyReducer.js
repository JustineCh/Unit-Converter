import {
  GET_CURRENCY_OPTIONS,
  CURRENCY_1_CHANGE,
  CURRENCY_2_CHANGE,
  GET_EX_RATE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CURRENCY_OPTIONS:
      return {
        ...state,
        currencyOptions: action.payload.currencyOptions,
        currency1: action.payload.currency1,
        currency2: action.payload.currency2,
      };
      case CURRENCY_1_CHANGE:
      return {
        ...state,
        currency1: action.payload
      };
      case CURRENCY_2_CHANGE:
        return {
          ...state,
          currency2: action.payload
        };
        case GET_EX_RATE:
          console.log('ready')
        return {
          ...state,
          exchangeRate: action.payload
        };
    default:
      return state;
  }
};
