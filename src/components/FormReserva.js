import Title from "./Title";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

import api from "../api";
import { useRef, useEffect } from "react";
import axios from "axios";

const FormReserva = () => {
  const nome = useRef();
  const email = useRef();
  const destino = useRef();

  function enviarDados(event) {
    event.preventDefault();
    api
      .post("/viagens", {
        nome: nome.current.value,
        email: email.current.value,
        destino: destino.current.value,
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="form">
        <Container className="container bg-transparent sm-shadow">
          <Title title="Realize a viagem dos seus sonhos!" />
          <h5 id="text-contato">
            Deixe seus dados e o destino dos seus sonhos! Buscaremos todas as
            opções de viagem, acomodações e experiências para você, e entramos
            em contato!
          </h5>
          <Form className="col s12" onSubmit={enviarDados}>
            <div className="row">
              <FormGroup className="mb-3">
                <Label>Nome</Label>
                <Input type="text" className="validate" ref={nome} />
              </FormGroup>
              <FormGroup className="mb-3" controlId="formBasicEmail">
                <Label>E-mail</Label>
                <Input type="text" className="validate" ref={email} />
              </FormGroup>
              <FormGroup className="mb-3" controlId="formBasicEmail">
                <Label>Destino</Label>
                <Input type="text" className="validate" ref={destino} />
              </FormGroup>
              <FormGroup className="mb-3" controlId="formBasicEmail">
                <Button className="btn" type="submit">
                  Enviar
                </Button>
              </FormGroup>
            </div>
          </Form>
          {/*Teste de form
          <div>
            <div className="row">
              <form className="col s12" onSubmit={enviarDados}>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="text" className="validate" ref={nome} />
                    <label>Nome do produto</label>
                  </div>
                  <div className="input-field col s12">
                    <input type="text" className="validate" ref={email} />
                    <label>E-mail</label>
                  </div>
                  <div className="input-field col s12">
                    <input type="text" className="validate" ref={destino} />
                    <label>Destino</label>
                  </div>
                  <div className="col s12">
                    <button
                      className="waves-effect waves-light btn"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          //Teste de form*/}
        </Container>
      </div>
      <Container className="container bg-transparent sm-shadow"></Container>
    </div>
  );
};

export default FormReserva;
