import React from 'react';
import ValueWithLabel from '../ValueWithLabel';

function Farenheit({value, onChange}) {
   return <ValueWithLabel val={value} onChange={onChange} label={'Farenheit'} colorClassName={" btn-primary-color"}/>
}

export default Farenheit;