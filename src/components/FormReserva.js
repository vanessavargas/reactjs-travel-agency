import Title from "./Title";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Col,
  Row,
  Collapse,
} from "reactstrap";

export default (props) => {
  return (
    <div className="form">
      <Container className="container bg-transparent sm-shadow">
        <Title title="Cadastre-se e faça sua reserva!" />
        <Form>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Label>Nome</Label>
            <Input type="text" placeholder="Digite seu nome" />
            <FormText className="text-muted">
              Caso use nome social, insira-o aqui.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Label>E-mail</Label>
                <Input type="email" placeholder="E-mail" />
              </Col>
              <Col>
                <Label>Telefone</Label>
                <Input type="tel" placeholder="Telefone com DDD" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Label>Destino</Label>
                <br />
                <select>
                  <option value="buenosaires">Buenos Aires</option>
                  <option value="disney">Disney</option>
                  <option selected value="florianopolis">
                    Florianópolis
                  </option>
                  <option value="fozdoiguacu">Foz do Iguaçu</option>
                  <option value="gramado">Gramado</option>
                  <option value="paris">Paris</option>
                </select>
              </Col>
              <Col md-6 mb-3>
                <Label>Data de Entrada</Label>
                <Input type="date" />
              </Col>
              <Col md-6 mb-3>
                <Label>Data de Saída</Label>
                <Input type="date" />
              </Col>
            </Row>
          </FormGroup>
          <Button className="button" color="secondary" type="submit">
            Enviar
          </Button>
          <Button className="button" color="outline-secondary">
            Limpar
          </Button>
        </Form>
      </Container>
    </div>
  );
};
