import {
   CALC_FARENHEIT, 
   CALC_CELSIUS,
   CALC_LBS,
   CALC_KG
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
      case CALC_LBS:
      return {
         ...state,
         arrow: action.payload.arrow,
         kgVal: action.payload.kg,
         lbsVal: action.payload.lbs
      }
      case CALC_KG:
      return {
         ...state,
         arrow: action.payload.arrow,
         kgVal: action.payload.kg,
         lbsVal: action.payload.lbs
      }
      default: 
         return state;
   }
}