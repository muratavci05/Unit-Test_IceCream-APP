import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  return (
    <form className="mt-4 row justify-content-center align-items-center">
      <div className="col-4 d-flex gap-4 ">
        <input
          type="checkbox"
          id="kosullar"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div className="text-nowrap kosullar">
          <p
            style={{ opacity: isVisible ? '1' : '0' }}
            className="bg-light text-dark p-2 rounded shadow popup"
          >
            Size Gerçekten Birşey Teslim Etmeyeceğiz 
          </p>
          <label
          className="mb-5 d-flex pb-3"
           htmlFor="kosullar">Koşulları okudum ve kabul ediyorum</label>
        </div>
      </div>
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        disabled={!isChecked}
        className="btn btn-warning mt-5"
        style={{ width: "150px" }}
      >
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
