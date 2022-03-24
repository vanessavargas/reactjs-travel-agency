import api from "../api";
import { useEffect, useState } from "react";

const RegistroViagens = () => {
  const [viagem, setViagem] = useState([]);

  useEffect(() => {
    api
      .get("/viagens")
      .then((res) => setViagem(res.data).catch((erro) => console.log(erro)));
  }, []);

  function deletar(btn) {
    api
      .delete(`/viagens/${btn.target.value}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="row">
        {viagem.map((viagem) => (
          <div className="col divCard" key={viagem.id}>
            <div className="card">
              <div className="card-text">
                <h5>Nome: {viagem.nome}</h5>
              </div>
              <div className="card-text">
                <h5>E-mail: {viagem.email}</h5>
              </div>
              <div className="card-text">
                <h5>Destino: {viagem.destino}</h5>
              </div>
              <button className="btn-floating halfway-fab waves-effect waves-light red large">
                <i className="bi-trash">Excluir</i>
              </button>
              <button>Alterar</button>
              <button>Verificar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistroViagens;
