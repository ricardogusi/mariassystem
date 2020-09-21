import React, { useContext } from "react";
import styles from "./carddata.module.css";
import { useState } from "react";

const CardData = () => {
  
    
  const [partidas, setPartidas] = useState([{
    jogo: 1,
    placar: 12,
    max: 12,
    min: 12,
    quebramin: 0,
    quebramax: 0,
  },
  {
    jogo: 2,
    placar: 24,
    max: 24,
    min: 12,
    quebramin: 0,
    quebramax: 1,
  },
  {
    jogo: 3,
    placar: 10,
    max: 24,
    min: 10,
    quebramin: 1,
    quebramax: 1,
  },
  {
    jogo: 4,
    placar: 24,
    max: 24,
    min: 10,
    quebramin: 1,
    quebramax: 1,
  }])


   

  
  

  return (
      <>
      {Array.from(partidas).map((jogo) => (
        <div key={jogo.jogo}className={styles.data}>
          <p>{jogo.jogo}</p>
          <p>{jogo.placar}</p>
          <p>{jogo.min}</p>
          <p>{jogo.max}</p>
          <p>{jogo.quebramin}</p>
          <p>{jogo.quebramax}</p>
        </div>
      ))}
      </>
    
  );
};

export default CardData;
