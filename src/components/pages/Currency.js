import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar'
import CurrencyRow from '../layout/CurrencyRow';

function Currency() {
   return (
      <Fragment>
         <Navbar title={'Currency Converter'} iconClass={'back-icon-teritiary'} />
         <p className="m-2">Choose the currencies and the amounts to get the exchange rate</p>
         <CurrencyRow />
         <CurrencyRow />
      </Fragment>
   )
}

export default Currency;
