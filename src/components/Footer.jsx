import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

import logot from "../_assets/img/logot.png";
import pagamentos from "../_assets/img/pagamentos.png";

const Footer = () => (
  <footer>
    <Container className="row-footer">
      <Row color="transparent">
        <Col sm className="col-footer" color="transparent">
          <li>
            <Link to="/contato">
              <b>Contato</b>
            </Link>
            |
            <Link to="/">
              <b>Sobre a empresa</b>
            </Link>
          </li>
          <br />
          <p>
            Viaggerò Agência de Turismo e Viagens Ltda. <br />
            Rua do Comércio, 1425 Porto Alegre-RS CEP: 91234-567
            <br />
            viaggero@viaggeroturismo.com <br />
            (51) 3199-1234
          </p>
        </Col>
        <Col sm className="col-footer" color="transparent">
          <p>
            <img src={logot} width="80" alt="logotipo" />
          </p>
        </Col>
        <Col sm className="col-footer" color="transparent">
          <p>
            <img src={pagamentos} width="200" alt="formas de pagamento" />
          </p>
          <p>
            Política de Privacidade |
            <a href="http://www.planalto.gov.br/ccivil_03/leis/l8078.htm">
              Direito do Consumidor
            </a>
          </p>
          <p>@2022 Vanessa Vargas. Todos os direitos reservados.</p>
        </Col>
      </Row>
    </Container>
    </footer>
);

export default Footer;
