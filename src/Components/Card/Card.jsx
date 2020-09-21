import React from "react";
import styles from "./card.module.css";

const Card = ({children}) => {
  return (
    <div className={styles.card}>
      <button>Adicionar Jogo</button>
      <div className={styles.header}>
        <h3>Jogo</h3>
        <h3>Placar</h3>
        <h3>Mínimo da Temporada</h3>
        <h3>Máximo da Temporada</h3>
        <h3>Quebra recorde Mínimo</h3>
        <h3>Quebra recorde Máximo</h3>
      </div>
      {children}
    </div>
  );
};

export default Card;
