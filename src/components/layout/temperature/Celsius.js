import React from 'react';
import ValueWithLabel from '../ValueWithLabel';

function Celsius({value, onChange}) {
   return <ValueWithLabel val={value} onChange={onChange} label={'Celsius'} colorClassName={" btn-primary-color"}/>
}

export default Celsius;