import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import Logo from "../_assets/img/viaggero.png";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="transparent" light expand="md" width="100%">
          <NavbarBrand href="/">
            <img
              width="60px"
              height="60px"
              className="img-responsive"
              src={Logo}
              alt="logotipo da Viaggero"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-center">
            <Nav className="justify-content-center">
              <NavItem>
                <Link class="menu" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link class="menu" to="/destinos">
                  Destinos
                </Link>
              </NavItem>
              <NavItem>
                <Link class="menu" to="/promocoes">
                  Promoções
                </Link>
              </NavItem>
              <NavItem>
                <Link class="menu" to="/contato">
                  Contato
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </>
  );
};

export default Header;
