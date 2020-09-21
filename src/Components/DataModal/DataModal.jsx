import React from "react";
import styles from "./datamodal.module.css";
import { useState } from "react";


const Modal = ({ setModal }) => {
  

  const [partidas, setPartidas]=useState([{}])

  function removeModal(event) {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  }

  return (
    <div className={styles.container} onClick={removeModal}>
      <div className={`${styles.modal} ${styles.anime}`}>
        <div className={styles.header}>          
          <button className={styles.headerButton} onClick={removeModal}>X</button>
          <p>Adicione as informações do seu jogo</p>
        </div>
        <div className={styles.form}>
            <h2>Jogo número:</h2>
            <input type="number" min="0" max="999"/>
            <h2>Pontuação:</h2>
            <input type="number" min="0" max="1000"/>
            <button className={styles.cadastrarButton} >Cadastra Partida</button>

        </div>
        
      </div>
    </div>
  );
};

export default Modal;