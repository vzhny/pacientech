import React, { useState, useContext } from 'react';
import { navigate } from '@reach/router';
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
import { AuthContext } from '@/auth/AuthContext';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isOpen, toggleNavbar] = useState(false);
  const [authStatus, updateAuthStatus] = useContext(AuthContext);

  const logInUser = () => {
    setTimeout(() => {
      updateAuthStatus(true);
      navigate('/dashboard');
    }, 2000);
  };

  const logOutUser = () => {
    setTimeout(() => {
      updateAuthStatus(false);
      navigate('/');
    }, 2000);
  };

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">pacien.tech</NavbarBrand>
        <NavbarToggler onClick={() => toggleNavbar(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {authStatus ? (
              <NavItem>
                <NavLink className={styles.LogOutButton} onClick={() => logOutUser()}>
                  Log Out
                </NavLink>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink className={styles.LogInButton} onClick={() => logInUser()}>
                    Log In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.RegisterButton}>Register</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
