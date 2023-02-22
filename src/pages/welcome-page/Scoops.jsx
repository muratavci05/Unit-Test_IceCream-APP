import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./../../components/Card";

const Scoops = (props) => {
  const [cesitler, setCesitler] = useState([]);
  const [sepet, setSepet] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/cesitler")
      .then((res) => {
        setCesitler(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // SIFIRLAMA İŞLEMİ

  const handleReset = (param) => {
    const reseted = sepet.filter((i) => i.name !== param.name);
    setSepet(reseted);
  };

  // ADET BULMA FONKSİYONU
  const findAmount = (param) => {
    const bulundu = sepet.filter((i) => i.name === param.name);
    return bulundu.length;
  };

  return (
    <div className="container">
      <div className="container d-flex py-3 gap-5">
        <h1 className="text-start">Dondurma Çeşitleri</h1>

        <p className="text-start p-3">Tanesi 10₺</p>

        <h2 className="text-start p-1 ">Çeşitler Ücreti: {sepet.length * 10} ₺</h2>
      </div>
      <div className="row mt-4 d-flex gap-5 p-3 justify-content-between">
        {cesitler.map((cesit) => {
          const adet = findAmount(cesit);
          return (
            <Card
              cesit={cesit}
              findAmount={findAmount}
              handleReset={handleReset}
              adet={adet}
              sepet={sepet}
              setSepet={setSepet}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Scoops;
