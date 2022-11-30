import React from "react";

import Article from "../components/Article";
import Title from "../components/Title";
import CardCircle from "../components/CardCircle";

import logo from "../_assets/img/logo.png";
import Pacotes from "../_assets/img/pacotes.png";
import Passagens from "../_assets/img/passagens.png";
import Hoteis from "../_assets/img/hoteis.png";
import Passeios from "../_assets/img/passeios.png";

const Home = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logotipo"/>
      </div>
      <Title title="Nossos Serviços" />
      <div className="servicos">
        <CardCircle imgCircle={Pacotes} />
        <CardCircle imgCircle={Passagens} />
        <CardCircle imgCircle={Hoteis} />
        <CardCircle imgCircle={Passeios} />
      </div>
      <Title title="Sobre nós" />
      <Article
        article="Somos pessoas apaixonadas por viagens e pelo mundo! Nossa equipe é
        formada por profissionais muito competentes e qualificados para garantir
        que você e sua família tenham todo conforto e muitos momentos felizes em
        todas as etapas de sua viagem."
      />
      <Article
        article="Nos preocupamos em garantir e verificar pessoalmente todas as locações,
        bem como hospedagens, transportes e demais serviços que estarão a
        disposição dos nossos clientes. Qualidade e excelência na prestação de
        serviço são nossa missão."
      />
    </div>
  );
};

export default Home;
