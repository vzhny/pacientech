import React, { useState, useContext } from 'react';
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
import { UserContext } from '@/auth/UserContext';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isOpen, toggleNavbar] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const logInUser = () => {
    setTimeout(() => {
      setUser('user');
    }, 2000);
  };

  const logOutUser = () => {
    setTimeout(() => {
      setUser(null);
    }, 2000);
  };

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">pacien.tech</NavbarBrand>
        <NavbarToggler onClick={() => toggleNavbar(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user ? (
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

Navigation.propTypes = {};

export default Navigation;
