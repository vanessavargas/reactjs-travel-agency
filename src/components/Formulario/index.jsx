import api from "../../api";
import { useRef, useEffect } from "react";
import axios from "axios";

const Formulario = () => {
  const nome = useRef();
  const email = useRef();
  const destino = useRef();

  function enviarDados(event) {
    event.preventDefault();
    api
      .post("/viagens/", {
        nome: nome.current.value,
        email: email.current.value,
        destino: destino.current.value,
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="row">
        <form className="col s12" onSubmit={enviarDados}>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" className="validate" ref={nome} />
              <label>Nome</label>
            </div>
            <div className="input-field col s12">
              <input type="text" className="validate" ref={email} />
              <label>E-mail</label>
            </div>
            <div className="input-field col s12">
              <input type="number" className="validate" ref={destino} />
              <label>Destino</label>
            </div>
            <div className="col s12">
              <button className="waves-effect waves-light btn" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
