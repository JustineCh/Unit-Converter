import {
   CALC_FARENHEIT
} from '../types';

export default (state, action) => {
   switch(action.type) {
      case CALC_FARENHEIT:
         return {
            ...state,
            farenheitVal: action.payload
         }
   }
}