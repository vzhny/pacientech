import React, { useState } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from 'reactstrap';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isOpen, toggleNavbar] = useState(false);

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">pacien.tech</NavbarBrand>
        <NavbarToggler onClick={() => toggleNavbar(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className={styles.LoginButton}>Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.RegisterButton}>Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Navigation.propTypes = {};

export default Navigation;
