import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <form className="mt-4 row justify-content-center align-items-center">
      <div className="col-4 d-flex gap-4 ">
        <input
          type="checkbox"
          id="kosullar"
          onChange={(event) => setIsChecked(event.target.checked)}
        />
        <label htmlFor="kosullar">Koşulları okudum ve kabul ediyorum</label>
      </div>
      <button disabled={!isChecked} className="btn btn-warning col-2">
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
