// import React, {useReducer} from 'react';
// import UnitContext from './unitContext';
// import UnitReducer from './unitReducer';
// import {
//    CALC_FARENHEIT
// } from '../types';

// const UnitState = props => {
//    const initialState = {
//       celsiusVal,
//       farenheitVal
//    }

//    const [state, dispatch] = useReducer(UnitReducer, initialState);

//    const calcFarenheit = (celsiusVal) => {
//       return (celsiusVal * 9 / 5) - 32;
//    }

//    const calcCelsius = (farenheitVal) => {
//       return (farenheitVal - 32) * 5 / 9;
//    }

//    return <UnitContext.Provider
//       value={{
//          celsiusVal: state.celsiusVal,
//          farenheitVal: state.farenheitVal,
//          calcCelsius,
//          calcFarenheit
//       }}
//       >
//       {props.children}
//       </UnitContext.Provider>
// }

// export default UnitState;