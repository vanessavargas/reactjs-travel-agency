import React from "react";
import { CardGroup, Card, CardBody, CardText, CardImg } from "reactstrap";
import Title from "../components/Title";

import Floripa from "../_assets/img/florianopolis.png";
import Caldas from "../_assets/img/caldas-novas.png";
import Foz from "../_assets/img/foz-iguacu.png";
import Grecia from "../_assets/img/grecia.png";
import Jericoacoara from "../_assets/img/jericoacoara.png";
import Gramado from "../_assets/img/gramado.png";
import Disney from "../_assets/img/disney.png";
import Buenos from "../_assets/img/buenos-aires.png";
import Lencois from "../_assets/img/lencois.png";
import Maragogi from "../_assets/img/maragogi.png";
import Paris from "../_assets/img/paris.png";
import Paraty from "../_assets/img/paraty.png";

const Promocoes = () => {
  return (
    <>
      <Title title="Promoções Nacionais e Internacionais" />
      <CardGroup>
        <Card className="card">
          <CardImg variant="top" src={Floripa} alt="Florianópolis" />
          <CardBody>
            <CardText className="description">
              <h5>Florianópolis/SC</h5>
              <ul>
                <li>- 4 ou 6 diárias</li>
                <li>- Quarto</li>
                <li>- Café da Manhã</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 1624</span>
              </p>
              <h3>R$ 1299</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Buenos} alt="Buenos Aires" />
          <CardBody>
            <CardText className="description">
              <h5>Buenos Aires</h5>
              <ul>
                <li>- 4 a 6 diárias</li>
                <li>- Quarto</li>
                <li>- Jantar</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 999</span>
              </p>
              <h3>R$ 799</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Caldas} alt="Caldas Novas" />
          <CardBody>
            <CardText className="description">
              <h5>Caldas Novas/GO</h5>
              <ul>
                <li>- 3 a 5 dias</li>
                <li>- Quarto</li>
                <li>- Ingresso Parque Águas</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 999</span>
              </p>
              <h3>R$ 799</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="card">
          <CardImg variant="top" src={Disney} alt="Disney" />
          <CardBody>
            <CardText className="description">
              <h5>Orlando</h5>
              <ul>
                <li>- 7 ou 14 dias</li>
                <li>- Quarto</li>
                <li>- Ingresso parques</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 3165</span>
              </p>
              <h3>R$ 1899</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Foz} alt="Foz do Iguaçu" />
          <CardBody>
            <CardText className="description">
              <h5>Foz do Iguaçú/PR</h5>
              <ul>
                <li>- 4 a 6 dias</li>
                <li>- Quarto</li>
                <li>- Café da manhã</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 623</span>
              </p>
              <h3>R$ 499</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Grecia} alt="Grecia" />
          <CardBody>
            <CardText className="description">
              <h5>Grécia</h5>
              <ul>
                <li>- 8 a 12 diárias</li>
                <li>- Quarto</li>
                <li>- Passeios</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 5832</span>
              </p>
              <h3>R$ 3499</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="card">
          <CardImg variant="top" src={Jericoacoara} alt="Jericoacoara" />
          <CardBody>
            <CardText className="description">
              <h5>Jericoacoara/CE</h5>
              <ul>
                <li>- 5 a 7 diárias</li>
                <li>- all inclusive</li>
                <li>- Quarto</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 2932</span>
              </p>
              <h3>R$ 2499</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Gramado} alt="Gramado" />
          <CardBody>
            <CardText className="description">
              <h5>Gramado/RS</h5>
              <ul>
                <li>- 3 ou 5 diárias</li>
                <li>- Quarto</li>
                <li>- Café da manhã</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 665</span>
              </p>
              <h3>R$ 399</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Lencois} alt="Lençóis Maranhenses" />
          <CardBody>
            <CardText className="description">
              <h5>São Luís + Lençóis/MA</h5>
              <ul>
                <li>- 4 a 6 dias</li>
                <li>- Quarto</li>
                <li>- Café da manhã</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 1191</span>
              </p>
              <h3>R$ 669</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="card">
          <CardImg variant="top" src={Maragogi} alt="Maragogi" />
          <CardBody>
            <CardText className="description">
              <h5>Maragogi/AL</h5>
              <ul>
                <li>- 4 ou 6 diárias</li>
                <li>- Quarto</li>
                <li>- Café da manhã</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 699</span>
              </p>
              <h3>R$ 419</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Paris} alt="Paris" />
          <CardBody>
            <CardText className="description">
              <h5>Paris</h5>
              <ul>
                <li>- 5 a 7 diárias</li>
                <li>- Quarto</li>
                <li>- Passeios</li>
                <li>- Passagem Aérea</li>
              </ul>
              <p>
                A partir de <span>R$ 1999</span>
              </p>
              <h3>R$ 1499</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg variant="top" src={Paraty} alt="Paraty" />
          <CardBody>
            <CardText className="description">
              <h5>Rio de Janeiro + Paraty</h5>
              <ul>
                <li>5 ou 7 diárias</li>
                <li>- Apartamento</li>
                <li>- Café da manhã</li>
                <li>- Aluguel de carro</li>
              </ul>
              <p>
                A partir de <span>R$ 499</span>
              </p>
              <h3>R$ 399</h3>
              <p>+ taxas | Até 12x no cartão</p>
              <p class="cancel">Cancelamento Grátis!</p>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default Promocoes;
