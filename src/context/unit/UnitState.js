import React, {useReducer} from 'react';
import UnitContext from './unitContext';
import UnitReducer from './unitReducer';
import { faArrowRight, faArrowLeft, faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import {
   CALC_FARENHEIT,
   CALC_CELSIUS,
   CALC_LBS,
   CALC_KG
} from '../types';

const UnitState = props => {
   const initialState = {
      celsiusVal: '',
      farenheitVal: '',
      kgVal: '',
      lbsVal: '',
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

   const calcLbs = (kgVal) => {
      dispatch({
         type: CALC_LBS,
         payload: {
            kg: kgVal,
            lbs: (kgVal * 2.20462).toString(),
            arrow: faArrowLeft
         }
      })
   }

   const calcKg = (lbsVal) => {
      dispatch({
         type: CALC_KG,
         payload: {
            lbs: lbsVal,
            kg: (lbsVal / 2.20462).toString(),
            arrow: faArrowLeft
         }
      })
   }

   return <UnitContext.Provider
      value={{
         celsiusVal: state.celsiusVal,
         farenheitVal: state.farenheitVal,
         arrow: state.arrow,
         kgVal: state.kgVal,
         lbsVal: state.lbsVal,
         calcCelsius,
         calcFarenheit,
         calcLbs,
         calcKg
      }}
      >
      {props.children}
      </UnitContext.Provider>
}

export default UnitState;