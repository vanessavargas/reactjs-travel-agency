import {useEffect, useState} from 'react'
import {alterarProduto, obterProduto} from "../net/service"
import { useLocation, useNavigate } from 'react-router-dom';

function ProdutoAltera () {
   
    const navigate = useNavigate();

    const { state } = useLocation();
    const { id } = state;

    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [codigo, setCodigo] = useState(0);
    const [conectado, setConectado] = useState(false);

    useEffect(()=>{
      if(!conectado){
        setConectado(true);
        obterProduto(id).then((retorno)=>{
            setNome(retorno.nome);
            setQuantidade(retorno.quantidade);
            setCodigo(retorno.id);
        });
      }
    });
  
    function handleNome(e) {
        setNome(e.target.value);
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
        alterarProduto(codigo, nome,quantidade).then(
                 ()=>{
                    console.log("Produto alterado") 
                    navigate("/");
                 });
        setNome('');
        
    }

  
    return (
      <div>
        <h3>Alteração de Produto</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-codigo">
            Codigo do Produto:
          </label>
          <input
            id="new-codigo"
            onChange={handleCodigo}
            readOnly
            value={codigo}
          />
          <label htmlFor="new-nome">
            Nome:
          </label>
          <input
            id="new-nome"
            onChange={handleNome}
            value={nome}
          />
          <label htmlFor="new-qtd">
            Quantidade:
          </label>
          <input
            id="new-qtd"
            onChange={handleQuantidade}
            value={quantidade}
          />
          <button>
            Alterar
          </button>
        </form>

      </div>
    );
}

export default ProdutoAltera;
