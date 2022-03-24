import api from "./conector";

export const obterProdutos = async () => {
  return (await api.get("/produtos")).data;
};

export const obterProduto = async (codigo) => {
  return (await api.get("/produtos/" + codigo)).data;
};

export const alterarProduto = async (codigo, nome, quantidade) => {
  var dados = { id: codigo, nome: nome, quantidade: quantidade, ativo: true };
  console.log(dados);
  await api.put("/produtos", dados);
};

export const adicionarProduto = async (nome, quantidade) => {
  var dados = { nome: nome, quantidade: quantidade, ativo: true };
  console.log(dados);
  return (await api.post("/produtos", dados)).data;
};

export const excluirProduto = async (codigo) => {
  await api.delete("/produtos/" + codigo);
};
/*
export const obterViagem = async () => {
    return (await api.get("/viagens")).data;
  };
  
  export const obterViagem = async (codigo) => {
    return (await api.get("/viagens/" + codigo)).data;
  };
  
  export const alterarViagem = async (codigo, nome, email, destino) => {
    var dados = { id: codigo, nome: nome, email: email, destino:destino, ativo: true };
    console.log(dados);
    await api.put("/viagens", dados);
  };
  
  export const adicionarViagem = async (nome, email, destino) => {
    var dados = { nome: nome, email: email, destino:destino, ativo: true };
    console.log(dados);
    return (await api.post("/viagens", dados)).data;
  };
  
  export const excluirViagem = async (codigo) => {
    await api.delete("/viagens/" + codigo);
  };
  */
