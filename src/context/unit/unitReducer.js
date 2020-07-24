import {
   CALC_FARENHEIT, 
   CALC_CELSIUS
} from '../types';

export default (state, action) => {
   switch(action.type) {
      case CALC_FARENHEIT:
         return {
            ...state,
            arrow: action.payload.arrow,
            celsiusVal: action.payload.celsius,
            farenheitVal: action.payload.farenheit
         }
      case CALC_CELSIUS:
         return {
            ...state,
            arrow: action.payload.arrow,
            farenheitVal: action.payload.farenheit,
            celsiusVal: action.payload.celsius
         }
      default: 
         return state;
   }
}