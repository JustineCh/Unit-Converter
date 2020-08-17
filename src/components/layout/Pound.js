import React from 'react';
import ValueWithLabel from '../layout/ValueWithLabel';


function Pound({value, onChange}) {
   return <ValueWithLabel val={value} onChange={onChange} label={'Pound'} colorClassName={" btn-secondary-color"} />
}

export default Pound;