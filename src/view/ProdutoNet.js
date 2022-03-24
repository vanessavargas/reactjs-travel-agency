import { useEffect, useState } from "react";
import { ProdutoList } from "./ProdutoList";
import {
  adicionarProduto,
  alterarProduto,
  excluirProduto,
  obterProdutos,
} from "../net/service";
import { useNavigate } from "react-router-dom";

function ProdutoNet() {
  const navigate = useNavigate();

  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);
  const [destino, setDestino] = useState([]);

  useEffect(() => {
    if (!conectado) {
      setConectado(true);
      obterViagem().then((retorno) => setItems(retorno));
    }
  });

  function handleNome(e) {
    setNome(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleDestino(e) {
    setDestino(e.target.value);
  }

  function handleCodigo(e) {
    setCodigo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nome.length === 0) {
      return;
    }
    //create
    adicionarViagem(nome, email, destino).then((retorno) => {
      console.log("Viagem Adicionada: " + retorno.nome);
      obterViagem().then((listViagem) => setItems(listaViagem));
    });

    setNomes("");
  }
  //delete
  function handleDelete(e) {
    e.preventDefault();
    excluirProduto(codigo).then((retorno) =>
      obterProdutos().then((retorno) => setItems(retorno))
    );
    setNomes("");
  }
  //update
  function handleAlterar(e) {
    e.preventDefault();
    navigate("/altera", { state: { id: codigo } });
  }

  /*
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
*/

  const [items, setItems] = useState([]);
  const [nomes, setNomes] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [codigo, setCodigo] = useState(0);
  const [conectado, setConectado] = useState(false);

  useEffect(() => {
    if (!conectado) {
      setConectado(true);
      obterProdutos().then((retorno) => setItems(retorno));
    }
  });

  function handleNomes(e) {
    setNomes(e.target.value);
  }

  function handleQuantidade(e) {
    setQuantidade(e.target.value);
  }

  function handleCodigo(e) {
    setCodigo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nome.length === 0) {
      return;
    }
    adicionarProduto(nome, quantidade).then((retorno) => {
      console.log("Produto Adicionado: " + retorno.nome);
      obterProdutos().then((listaProds) => setItems(listaProds));
    });

    setNomes("");
  }

  function handleDelete(e) {
    e.preventDefault();
    excluirProduto(codigo).then((retorno) =>
      obterProdutos().then((retorno) => setItems(retorno))
    );
    setNomes("");
  }

  function handleAlterar(e) {
    e.preventDefault();
    navigate("/altera", { state: { id: codigo } });
  }

  return (
    <div>
      <h3>Produtos</h3>
      <ProdutoList items={items} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-nome">Nome</label>
        <input id="new-nome" onChange={handleNomes} value={nome} />
        <label htmlFor="new-qtd">Quantidade</label>
        <input id="new-qtd" onChange={handleQuantidade} value={quantidade} />
        <button>Adicionar</button>
      </form>
      <hr />
      <form onSubmit={handleDelete}>
        <label htmlFor="new-codigo">Codigo do Produto:</label>
        <input id="new-codigo" onChange={handleCodigo} value={codigo} />
        <button>Remover</button>
      </form>
      <br />
      <form onSubmit={handleAlterar}>
        <label htmlFor="new-codigo">Codigo do Produto:</label>
        <input id="new-codigo" onChange={handleCodigo} value={codigo} />
        <button>Alterar</button>
      </form>
      <br />
      <hr />
      <br />

      {/* <form className="col s12" onSubmit={enviarDados}>*/}
      <form action="">
        <div className="row">
          <div className="mb-3" controlId="formBasicEmail">
            <label>Nome</label>
            <ingput type="text" className="validate" ref={nome} />
          </div>
          <div className="mb-3" controlId="formBasicEmail">
            <label>E-mail</label>
            <input type="text" className="validate" ref={email} />
          </div>
          <div className="mb-3" controlId="formBasicEmail">
            <label>Destino</label>
            <input type="text" className="validate" ref={destino} />
          </div>
          <div className="mb-3" controlId="formBasicEmail">
            <button className="btn" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default ProdutoNet;
