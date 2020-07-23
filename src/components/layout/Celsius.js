import React, {useState, useContext} from 'react';
import UnitContext from '../../context/unit/unitContext';

function Celsius() {
   const unitContext = useContext(UnitContext);
   const [celsiusVal, setCelsiusVal] = useState("");


   const onChange = e => {
      setCelsiusVal(e.target.value);
      unitContext.calcFarenheit(celsiusVal);
   };


   return (
      <div>
         <form className="form">
            <input
               // type="number"
               name="celsius"
               placeholder="Enter the value..."
               value={celsiusVal}
               onChange={onChange}
            />
        </form>
      </div>
   )
}

export default Celsius;