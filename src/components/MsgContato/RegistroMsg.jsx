import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Title from "../Title";
import api from "../../_config/api";

import editar from "../../_assets/img/icone-editar.png";
import lixeira from "../../_assets/img/icone-lixeira.png";

const RegistroMsg = () => {
  const [MsgRegistrada, setMsgRegistrada] = useState([]);

  useEffect(() => {
    api
      .get("/Mensagem")
      .then((res) => setMsgRegistrada(res.data))
      .catch((err) => console.log(err));
  }, []);

  function deletar(img) {
    api
      .delete(`/Mensagem/${img.target.id}`)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  }

  return (
    <section className="container">
      <Title titulo="Mensagens registradas"></Title>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">N° Registro</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {MsgRegistrada.map((MsgRegistrada) => (
            <tr key={MsgRegistrada.id_MsgRegistrada}>
              <th>{MsgRegistrada.id_MsgRegistrada}</th>
              <td>{MsgRegistrada.nomeContato}</td>
              <td>{MsgRegistrada.emailComtato}</td>
              <td>{MsgRegistrada.mensagem}</td>
              <td>
                <Link
                  className="btn"
                  to={`/EditarMensagem/${MsgRegistrada.MsgRegistrada}`}
                >
                  <img src={editar} alt="Update" width="20px" />
                </Link>
              </td>
              <td>
                <div className="btn">
                  <img
                    src={lixeira}
                    alt="Editar"
                    width="20px"
                    id={MsgRegistrada.MsgRegistrada}
                    onClick={(img) => deletar(img)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RegistroMsg;