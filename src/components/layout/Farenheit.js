import React from 'react';
import ValueWithLabel from '../layout/ValueWithLabel';

function Farenheit({value, onChange}) {
   return <ValueWithLabel val={value} onChange={onChange} label={'Farenheit'} colorClassName={" btn-primary-color"}/>
}

export default Farenheit;