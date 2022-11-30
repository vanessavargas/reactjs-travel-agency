import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Title from "./Title";
import api from "../_config/api";

import editar from "../_assets/img/icone-editar.png";
import lixeira from "../_assets/img/icone-lixeira.png";

const RegistroViagens = () => {
  const [Destino, setDestino] = useState([]);

  useEffect(() => {
    api
      .get("/Destino")
      .then((res) => setDestino(res.data))
      .catch((err) => console.log(err));
  }, []);

  function deletar(img) {
    api
      .delete(`/Destino/${img.target.id}`)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  }

  return (
    <section className="container">
      <Title titulo="Viagens registradas"></Title>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">N° Registro</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Destino</th>
          </tr>
        </thead>
        <tbody>
          {Destino.map((Destino) => (
            <tr key={Destino.id_destino}>
              <th>{Destino.id_destino}</th>
              <td>{Destino.nome}</td>
              <td>{Destino.email}</td>
              <td>{Destino.destino}</td>
              <td>
                <Link className="btn" to={`/EditarViagem/${Destino.Destino}`}>
                  <img src={editar} alt="Update" width="20px" />
                </Link>
              </td>
              <td>
                <div className="btn">
                  <img
                    src={lixeira}
                    alt="Editar"
                    width="20px"
                    id={Destino.Destino}
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

export default RegistroViagens;
