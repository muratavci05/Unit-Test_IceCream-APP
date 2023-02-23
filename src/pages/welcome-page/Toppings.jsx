import React, { useEffect, useState } from "react";
import axios from "axios";

const Toppings = () => {
  const [soslar, setSoslar] = useState([]);
  const [sepet, setSepet] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/soslar")
      .then((res) => {
        setSoslar(res.data);
      })
      .catch((err) => {
        //! TODO
      });
  }, []);

  const handleChange = (e, sos) => {
    const filtred = sepet.filter((i) => i.name !== sos.name);

    e.target.checked ? setSepet([...sepet, sos]) : setSepet(filtred);
  };

  return (
    <div className="container text-start my-1">
      <div className="container d-flex py-0 gap-2">
        <h1 className="container">Sos Çeşitleri</h1>
        <p className="container m-3">Tanesi 3₺</p>
        <h2 className="container m-3 ">Soslar Ücret: {sepet.length * 3} ₺</h2>
      </div>
      <div className="row gap-3">
        {soslar.map((sos) => (
          <div
            key={sos.name}
            className="d-flex flex-column align-items-center"
            style={{ width: "150px" }}
          >
            <img src={sos.imagePath} className="w-100" alt="" />
            <label htmlFor={sos.name} className="text-nowrap">
              {sos.name}
            </label>
            <input
              id={sos.name}
              type="checkbox"
              onChange={(e) => handleChange(e, sos)}
              className="form-check-input"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
