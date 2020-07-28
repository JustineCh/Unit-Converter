import {
   CALC_TEMP,
   CALC_LBS,
   CALC_KG
} from '../types';

export default (state, action) => {
   switch(action.type) {
      case CALC_TEMP:
         return {
            ...state,
            arrow: action.payload.arrow,
            val1: action.payload.celsius,
            val2: action.payload.farenheit
         }
      case CALC_LBS:
      return {
         ...state,
         arrow: action.payload.arrow,
         val1: action.payload.kg,
         val2: action.payload.lbs
      }
      case CALC_KG:
      return {
         ...state,
         arrow: action.payload.arrow,
         val1: action.payload.kg,
         val2: action.payload.lbs
      }
      default: 
         return state;
   }
}