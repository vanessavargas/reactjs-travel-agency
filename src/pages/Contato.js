import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Accordion,
  ButtonToggle,
  Collapse,
} from "reactstrap";

import Title from "../components/Title";
import Article from "../components/Article";
import MsgContato from "../components/MsgContato";
import RegistroMsg from "../components/RegistroMsg";

import mapa from "../img/Mapa.png";

const Contato = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Title title="Contato" />
      <Article
        article="Está com dúvida sobre o destino, quer saber mais sobre as viagens,
        pacotes ou hospedagem? Ou talvez você queira fazer algum elogio ou
        reclamação. Seja qual for o motivo, entre em contato conosco! Teremos o
        maior prazer em lhe atender, e responderemos o mais breve possível!"
      />
      <div className="form">
        <Container className="container bg-transparent sm-shadow">
          <Title title="Envie sua mensagem" />
          <Form>
            <Row>
              <Col>
                <img src={mapa} alt="mapa da empresa" />
              </Col>
              <Col>
                <MsgContato />
              </Col>
            </Row>
          </Form>
        </Container>
        <Container className="registros">
          <Accordion defaultActiveKey="0">
            <ButtonToggle
              eventKey="0"
              onClick={toggle}
              color="outline-secondary"
              className="toggle"
            >
              Consultar Mensagens Enviadas
            </ButtonToggle>
            <Collapse eventKey="0" isOpen={isOpen}>
              <RegistroMsg />
            </Collapse>
          </Accordion>
        </Container>
      </div>
    </div>
  );
};

export default Contato;
