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
import Modal from '@/components/Modal/Modal';
import { AuthContext } from '@/auth/AuthContext';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isOpen, toggleNavbar] = useState(false);
  const [modalVisible, toggleModal] = useState(false);
  const [authStatus] = useContext(AuthContext);

  let modalTitle = 'Test Title';
  let modalConfirmBtn = 'Confirm';
  let modalContent = <p>Test Content</p>;

  const logInUser = () => {
    modalTitle = 'Welcome Back!';
    modalConfirmBtn = 'Log In';
    modalContent = <p>Login Form Goes Here</p>;
    toggleModal(!modalVisible);
  };

  const registerUser = () => {
    modalTitle = 'Register for an Account';
    modalConfirmBtn = 'Register';
    modalContent = <p>Register Form Goes Here</p>;
    toggleModal(!modalVisible);
  };

  const logOutUser = () => {};

  return (
    <>
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
                    <NavLink className={styles.RegisterButton} onClick={() => registerUser()}>
                      Register
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        title={modalTitle}
        confirmBtn={modalConfirmBtn}
        content={modalContent}
        modalVisible={modalVisible}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default Navigation;
