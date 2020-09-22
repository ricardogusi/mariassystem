import React from "react";
import styles from "./card.module.css";




const Card = ({handleClick, children}) => {



  return (
  
      <>
      <h1>Just do it!</h1>
      <button className={styles.adicionarButton} onClick={handleClick}>
        Adicionar Jogo
      </button>
      <div className={styles.header}>
        <h3>Jogo</h3>
        <h3>Placar</h3>
        <h3>Mín da Temporada</h3>
        <h3>Máx da Temporada</h3>
        <h3>Quebra recorde Mín</h3>
        <h3>Quebra recorde Máx</h3>
      </div>
      <div className={styles.card}>
        {children}
      </div>
      </>
   
    
  );
};

export default Card;
