import React, {useState, useContext} from 'react';
import UnitContext from '../../context/unit/unitContext';

function Celsius() {
   // const unitContext = useContext(UnitContext);
   const [celsiusValue, setCelsiusValue] = useState("");


   const onChange = e => setCelsiusValue(e.target.value);


   return (
      <div>
         <form className="form">
            <input
               type="number"
               name="clesius"
               placeholder="Enter the value..."
               value={celsiusValue}
               onChange={onChange}
            />
        </form>
      </div>
   )
}

export default Celsius;