import React, { useContext } from "react";
import styles from "./carddata.module.css";
import DataContext from "../../Data/DataContext";

const CardData = () => {
  const data = useContext(DataContext);

  const jogos = data[0].jogos;
  

  console.log(jogos);
  

  return (
      <>
      {jogos.map((jogo) => (
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
