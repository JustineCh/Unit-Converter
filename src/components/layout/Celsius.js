import React, {useContext} from 'react';
import Unit from '../layout/Unit';
import UnitContext from '../../context/unit/unitContext';

function Celsius() {
   const unitContext = useContext(UnitContext);
   const {val1} = unitContext;
   return <Unit inputType={'celsius'}  value={val1}/>
}

export default Celsius;