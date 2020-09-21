import React from "react";
import styles from "./card.module.css";
import { useState } from "react";
import Modal from '../DataModal/DataModal'
import CardData from '../CardData/CardData'

const Card = () => {

  const [modal, setModal] = useState(true)

  function handleClick() {
    setModal(true)
  }

  return (
    <>
    {modal && <Modal setModal={setModal}/> }
    <div className={styles.card}>
      <button className={styles.adicionarButton} onClick={handleClick} >Adicionar Jogo</button>
      <div className={styles.header}>
        <h3>Jogo</h3>
        <h3>Placar</h3>
        <h3>Mínimo da Temporada</h3>
        <h3>Máximo da Temporada</h3>
        <h3>Quebra recorde Mínimo</h3>
        <h3>Quebra recorde Máximo</h3>
      </div>
      <CardData/>
    </div>
    </>
  );
};

export default Card;
