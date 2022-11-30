import React from "react";
import { useRef } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

import api from "../../_config/api";

const MsgContato = (props) => {
  const nomeContato = useRef();
  const emailContato = useRef();
  const mensagem = useRef();

  function enviarMsg(event) {
    event.preventDefault();
    api
      .post("/CadastroMensagem", {
        nomeContato: nomeContato.current.value,
        emailContato: emailContato.current.value,
        mensagem: mensagem.current.value,
      })
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Form class="cardForm" onSubmit={enviarMsg}>
        <FormGroup className="mb-3" controlId="formBasicEmail">
          <Label for="inputNome">Nome</Label>
          <Input
            type="text"
            class="form-control"
            id="inputNome"
            ref={nomeContato}
            placeholder="Digite seu nome"
          />
        </FormGroup>
        <FormGroup>
          <Label for="inputEmail">E-mail</Label>
          <Input
            type="email"
            class="form-control"
            id="inputEmail"
            ref={emailContato}
            placeholder="E-mail"
          />
        </FormGroup>
        <FormGroup>
          <Label for="inputMsg">Mensagem</Label>
          <Input
            type="textarea"
            class="form-control"
            id="inputMsg"
            ref={emailContato}
            placeholder="Sua mensagem"
          />
        </FormGroup>
        <Button className="button" color="secondary" type="submit">
          Enviar
        </Button>
        <Button className="button" type="submit" color="outline-secondary">
          Limpar
        </Button>
      </Form>
    </div>
  );
};

export default MsgContato;