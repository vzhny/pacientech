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
import LoginForm from '@/components/LoginForm/LoginForm';
import { AuthContext } from '@/auth/AuthContext';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isOpen, toggleNavbar] = useState(false);
  const [modalVisible, toggleModal] = useState(false);
  const [authStatus] = useContext(AuthContext);
  const [modal, setModalProps] = useState({});

  const logInUser = () => {
    setModalProps({
      title: 'Welcome Back!',
      confirmBtn: 'Log In',
      content: <LoginForm />,
    });
    toggleModal(!modalVisible);
  };

  const registerUser = () => {
    setModalProps({
      title: 'Create an Account',
      confirmBtn: 'Register',
      content: <p>Register Form</p>,
    });
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
        title={modal.title}
        confirmBtn={modal.confirmBtn}
        content={modal.content}
        modalVisible={modalVisible}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default Navigation;
