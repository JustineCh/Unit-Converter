import React, {useReducer} from 'react';
import UnitContext from './unitContext';
import UnitReducer from './unitReducer';
import { faArrowRight, faArrowLeft, faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import {
   CALC_TEMP,
   CALC_LBS,
   CALC_KG
} from '../types';

const UnitState = props => {
   const initialState = {
      val1: '',
      val2: '',
      arrow: faArrowsAltH
   }

   const [state, dispatch] = useReducer(UnitReducer, initialState);

   const calcVal2 = (val1) => {
      if(val1 === ''){
         dispatch({
            type: CALC_TEMP,
            payload: {
               farenheit: '',
               celsius: '',
               arrow: faArrowsAltH
            }
         })
      } else {
         dispatch({
            type: CALC_TEMP,
            payload: {
               farenheit: ((val1 * 9 / 5) + 32).toString(),
               celsius: val1,
               arrow: faArrowRight
            }
         })
      }
   }

   const calcVal1 = (val2) => {
      if(val2 === ''){
         dispatch({
            type: CALC_TEMP,
            payload: {
               farenheit: '',
               celsius: '',
               arrow: faArrowsAltH
            }
         })
      } else {
         dispatch({
            type: CALC_TEMP,
            payload: {
               farenheit: val2,
               celsius: ((val2 - 32) * 5 / 9).toString(),
               arrow: faArrowLeft
            }
         })
      }
   }

   const calcLbs = (val1) => {
      if(val1 === ''){
         dispatch({
            type: CALC_LBS,
            payload: {
               lbs: '',
               kg: '',
               arrow: faArrowsAltH
            }
         })
      } else {
         dispatch({
            type: CALC_LBS,
            payload: {
               kg: val1,
               lbs: (val1 * 2.20462).toString(),
               arrow: faArrowRight
            }
         })
      }
   }

   const calcKg = (val2) => {
      if(val2 === ''){
         dispatch({
            type: CALC_KG,
            payload: {
               lbs: '',
               kg: '',
               arrow: faArrowsAltH
            }
         })
      } else {
         dispatch({
            type: CALC_KG,
            payload: {
               lbs: val2,
               kg: (val2 / 2.20462).toString(),
               arrow: faArrowLeft
            }
         })
      }
   }

   return <UnitContext.Provider
      value={{
         arrow: state.arrow,
         val1: state.val1,
         val2: state.val2,
         calcVal1,
         calcVal2,
         calcLbs,
         calcKg
      }}
      >
      {props.children}
      </UnitContext.Provider>
}

export default UnitState;