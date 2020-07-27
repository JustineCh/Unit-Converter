import React, {useReducer} from 'react';
import UnitContext from './unitContext';
import UnitReducer from './unitReducer';
import { faArrowRight, faArrowLeft, faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import {
   CALC_FARENHEIT,
   CALC_CELSIUS
} from '../types';

const UnitState = props => {
   const initialState = {
      celsiusVal: '',
      farenheitVal: '',
      arrow: faArrowsAltH
   }

   const [state, dispatch] = useReducer(UnitReducer, initialState);

   const calcFarenheit = (celsiusVal) => {
      dispatch({
         type: CALC_FARENHEIT,
         payload: {
            farenheit: ((celsiusVal * 9 / 5) + 32).toString(),
            celsius: celsiusVal,
            arrow: faArrowRight
         }
      })
   }

   const calcCelsius = (farenheitVal) => {
      dispatch({
         type: CALC_CELSIUS,
         payload: {
            farenheit: farenheitVal,
            celsius: ((farenheitVal - 32) * 5 / 9).toString(),
            arrow: faArrowLeft
         }
      })
   }

   return <UnitContext.Provider
      value={{
         celsiusVal: state.celsiusVal,
         farenheitVal: state.farenheitVal,
         arrow: state.arrow,
         calcCelsius,
         calcFarenheit
      }}
      >
      {props.children}
      </UnitContext.Provider>
}

export default UnitState;