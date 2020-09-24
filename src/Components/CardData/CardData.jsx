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


  const [modal, setModal] = useState();
  const [jogos, setJogos] = useState(5);
  const [pontuacao, setPontuacao] = useState();
  const [maximo, setMaximo] = useState(24);
  const [minimo, setMinimo] = useState(10);
  const [quebraMin, setQuebraMin] = useState(1);
  const [quebraMax, setQuebraMax] = useState(1);

  function handleClick() {
    setModal(true);
  }

  function handlePontuacao({ target }) {
    if (target.value < 1000 && target.value > 0) {
      setPontuacao(Number(target.value));
    } else {
      alert("Por favor insira um pontuação entre 0 e 1000");
      return;
    }
  }

  

  useEffect(() => {
    if (pontuacao > maximo) {
      setMaximo(pontuacao);
      setQuebraMax(quebraMax + 1);
    }
    if (pontuacao < minimo) {
      setMinimo(pontuacao);
      setQuebraMin(quebraMin + 1);
    }
  }, [maximo, minimo, pontuacao, quebraMax, quebraMin]);

  function handlePartida() {
    partidas.addElem({
      jogo: jogos,
      placar: pontuacao,
      max: maximo,
      min: minimo,
      quebramin: quebraMin,
      quebramax: quebraMax,
    });

    setJogos(jogos + 1);

    setModal(false);
  }

  function handleFocus(event) {
    event.target.value = "";
  }

  return (
    
    <Card handleClick={handleClick}>
      {modal && (
        <Modal
          setModal={setModal}
          jogo={jogos}
          handlePontuacao={handlePontuacao}
          handlePartida={handlePartida}
          handleFocus={handleFocus}
        />
      )}

      {Array.from(partidas)
        .sort(function (a, b) {
          return b.jogo - a.jogo;
        })
        .map((jogo) => (
          <div key={jogo.jogo} className={styles.data}>
            <p># {jogo.jogo}</p>
            <p>{jogo.placar}</p>
            <p>{jogo.min}</p>
            <p>{jogo.max}</p>
            <p>{jogo.quebramin}</p>
            <p>{jogo.quebramax}</p>
          </div>
        ))}

      {Array.from(partidasPadrao)
        .sort(function (a, b) {
          return b.jogo - a.jogo;
        })
        .map((jogo) => (
          <div key={jogo.jogo} className={styles.data}>
            <p># {jogo.jogo}</p>
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

