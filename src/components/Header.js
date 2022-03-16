import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Logo from "../img/viaggero.png";

import Home from "../pages/Home";
import Destinos from "../pages/Destinos";
import Promocoes from "../pages/Promocoes";
import Contato from "../pages/Contato";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Header;
