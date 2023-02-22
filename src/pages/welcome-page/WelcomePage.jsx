import React from "react";

import Form from "../form/Form";
import Scoops from "./Scoops";
import Toppings from "./Toppings";

const WelcomePage = (props) => {
  return (
    <div>
      <div>
        <Scoops />
      </div>
      <div>
        <Toppings />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default WelcomePage;
