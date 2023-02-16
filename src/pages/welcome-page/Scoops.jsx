import axios from "axios";
import React, { useEffect, useState } from "react";

const Scoops = () => {
  const [cesitler, setCesitler] = useState([]);
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


  return (
    <div>
      <h1>Dondurma Çeşitleri</h1>
      <p>Topu 5₺</p>
      <h2>Çeşitler Ücret: 0</h2>
      <div className="row d-flex gap-4">
        {cesitler.map((cesit)=> {
            return (
                <div>
                    <img 
                    style={{width:"3.5rem"}}
                    src={cesit.imagePath} alt=""/>
                </div>
                
            );
        })}
        </div>
    </div>
  );
};

export default Scoops;
