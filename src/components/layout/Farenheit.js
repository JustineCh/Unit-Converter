import React, {useContext} from 'react';
import Unit from '../layout/Unit';
import UnitContext from '../../context/unit/unitContext';

function Farenheit() {
  const unitContext = useContext(UnitContext);
  const {val2} = unitContext;
  
  return <Unit inputType={'farenheit'} value={val2}/>
}

export default Farenheit;