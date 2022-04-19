import React from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

import Title from "../components/Title";
import api from "../api";

const EditarMensagens = () => {
  const { id } = useParams();
  const nomeContato = useRef();
  const emailContato = useRef();
  const mensagem = useRef();

  function atualizarContato(event) {
    event.preventDefault();
    api
      .put(`/Contato/${id}`, {
        nomeContato: nomeContato.current.value,
        emailContato: emailContato.current.value,
        mensagem: mensagem.current.value,
      })
      .then(
        (res) =>
          (window.location.href = "https://ativ-mod5-recode.vercel.app/contato")
      )
      .catch((err) => console.log(err));
  }

  return (
    <section className="container">
      <Title title="Atualizar mensagem de contato"></Title>
      <form className="border rounded-3 p-4" onSubmit={atualizarContato}>
        <div className="mb-2 row">
          <div className="col-2">
            <label className="form-label">N° Registro:</label>
            <br />
            <label className="form-label">{id}</label>
          </div>
          <div className="col-4">
            <label className="form-label">Atualizar o nome para:</label>
            <input
              type="text"
              className="form-control form-control-sm"
              ref={nomeDeContato}
            />
          </div>
          <div className="col">
            <label className="form-label">Atualizar e-mail para:</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              ref={emailContato}
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="form-label">Atualizar Mensagem para </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            ref={mensagem}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary" value="Update" />
      </form>
    </section>
  );
};

export default EditarMensagens;
