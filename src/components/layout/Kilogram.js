import React from 'react';
import ValueWithLabel from '../layout/ValueWithLabel';

function Kilogram({value, onChange}) {
  return <ValueWithLabel val={value} onChange={onChange} label={'Kilogram'} colorClassName={" btn-secondary-color"} />
}

export default Kilogram;