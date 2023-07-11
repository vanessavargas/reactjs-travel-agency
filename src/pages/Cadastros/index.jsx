import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Title from "../../components/Title";
import CadCliente from "./CadCliente";
import CadDestino from "./CadDestino";

const Cadastros = () => {
    return (
        <Container className="container">
            <Title title="Cadastros" />
            <CadCliente/>
            <CadDestino/>
            
            <Form asp-action="Cadastro" asp-controller="Home" class="form">
                <Container className="container">
                <h2 class="topico">Cadastro Cliente</h2>
                <div class="row bg-transparent text-center">
                    <div class="col-12 col-sm">
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" class="form-control" asp-for="NomeCli" required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Endereço</Label>
                        <Input type="text" class="form-control" asp-for="EnderecoCli" required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefone</Label>
                        <Input type="number" class="form-control" asp-for="TelefoneCli" required />
                    </FormGroup>
                    <Button type="submit" class="btn btn-dark m-2">Cadastrar</Button>
                    <Button type="submit" class="btn btn-dark m-2">Atualizar</Button>
                    <Button type="submit" class="btn btn-dark m-2">Excluir</Button>
                    <Button type="reset" class="btn btn-outline-dark m-2">Limpar</Button>
                    </div>
                </div>
                </Container>
            </Form>
            <Form class="form">
                <Container>
                <h2 class="topico">Cadastrar Destinos</h2>
                <div class="row bg-transparent text-center">
                    <div class="col-12 col-sm">
                    <FormGroup>
                        <Label>Destino</Label>
                        <Input type="text" class="form-control" required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Cidade</Label>
                        <Input type="text" class="form-control" required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Estado</Label>
                        <Input type="text" class="form-control" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleInputPassword1">Mínimo de dias</Label>
                        <Input type="number" class="form-control" required />
                    </FormGroup>
                    <Button type="submit" class="btn btn-dark m-2">Cadastrar</Button>
                    <Button type="submit" class="btn btn-dark m-2">Atualizar</Button>
                    <Button type="submit" class="btn btn-dark m-2">Excluir</Button>
                    <Button type="reset" class="btn btn-outline-dark m-2">Limpar</Button>
                    </div>
                </div>
                </Container>
            </Form>
        </Container>
    )
}

export default Cadastros;