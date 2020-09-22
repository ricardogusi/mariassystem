import React, { useEffect, useState } from "react";
import styles from "./carddata.module.css";
import Modal from "../DataModal/DataModal";
import Card from "../Card/Card";

var partidas = {
  length: 0,

  addElem: function addElem(elem) {
    [].push.call(this, elem);
  },
};

const CardData = () => {
  const [modal, setModal] = useState();

  const partidasPadrao = [
    {
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
    },
  ];

  const [jogos, setJogos] = useState();
  const [pontuacao, setPontuacao] = useState();
  const [maximo, setMaximo] = useState(24);
  const [minimo, setMinimo] = useState(10);
  const [quebraMin, setQuebraMin] = useState(1);
  const [quebraMax, setQuebraMax] = useState(1);

  function handleClick() {
    setModal(true);
  }

  console.log("Pontos: " + pontuacao)
  console.log("Maximo: " + maximo)
  console.log("Minimo: " + minimo)

  function handleJogo({ target }) {
    setJogos(target.value);
  }

  function handlePontuacao({ target }) {
    setPontuacao(target.value);
  }

  useEffect(() => {
    if (pontuacao > maximo) {
      setMaximo(pontuacao);
      
    }
    if (pontuacao < minimo) {
      setMinimo(pontuacao);
    }
  }, [maximo,minimo,pontuacao])

  function handlePartida() {
    partidas.addElem({
      jogo: jogos,
      placar: pontuacao,
      max: maximo,
      min: minimo,
      quebramin: quebraMin,
      quebramax: quebraMax,
    });
    

    setModal(false);
  }

  return (
    <Card handleClick={handleClick}>
      {modal && (
        <Modal
          setModal={setModal}
          handleJogo={handleJogo}
          handlePontuacao={handlePontuacao}
          handlePartida={handlePartida}
        />
      )}

      {Array.from(partidasPadrao).map((jogo) => (
        <div key={jogo.jogo} className={styles.data}>
          <p>{jogo.jogo}</p>
          <p>{jogo.placar}</p>
          <p>{jogo.min}</p>
          <p>{jogo.max}</p>
          <p>{jogo.quebramin}</p>
          <p>{jogo.quebramax}</p>
        </div>
      ))}
      {Array.from(partidas).map((jogo) => (
        <div key={jogo.jogo} className={styles.data}>
          <p>{jogo.jogo}</p>
          <p>{jogo.placar}</p>
          <p>{jogo.min}</p>
          <p>{jogo.max}</p>
          <p>{jogo.quebramin}</p>
          <p>{jogo.quebramax}</p>
        </div>
      ))}
    </Card>
  );
};

export default CardData;
