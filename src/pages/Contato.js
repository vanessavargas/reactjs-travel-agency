import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import Title from "../components/Title";
import Article from "../components/Article";

import mapa from "../img/Mapa.png";

const Contato = () => {
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
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <Label>Nome</Label>
                  <Input type="nome" placeholder="Digite seu nome" />
                </FormGroup>
                <FormGroup>
                  <Label>E-mail</Label>
                  <Input type="email" placeholder="E-mail" />
                </FormGroup>
                <FormGroup>
                  <Label>Mensagem</Label>
                  <Input type="textarea" placeholder="Sua mensagem" />
                </FormGroup>
                <Button className="button" color="secondary" type="submit">
                  Enviar
                </Button>
                <Button className="button" color="outline-secondary">
                  Limpar
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Contato;
