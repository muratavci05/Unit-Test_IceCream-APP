import React from 'react';
import Form from './../form/Form';
import Scoops from './Scoops';
import Toppings from './Toppings';

const WelcomePage = () => {
  return (
    <div>
      {/* ÇEŞİTLER */}
      <Scoops />

      {/* SOSLAR */}
      <Toppings />
      {/* FORM */}
      <Form />
    </div>
  );
};

export default WelcomePage;