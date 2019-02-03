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
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import { AuthContext } from '@/auth/AuthContext';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isOpen, toggleNavbar] = useState(false);
  const [modalVisible, toggleModal] = useState(false);
  const [authStatus, updateAuthStatus] = useContext(AuthContext);
  const [modal, setModalProps] = useState({});

  const logInUser = () => {
    setModalProps({
      title: 'Welcome Back!',
      content: <LoginForm toggleModal={toggleModal} />,
    });
    toggleModal(!modalVisible);
  };

  const registerUser = () => {
    setModalProps({
      title: 'Create an Account',
      content: <RegisterForm toggleModal={toggleModal} />,
    });
    toggleModal(!modalVisible);
  };

  const logOutUser = () => {
    setTimeout(() => {
      updateAuthStatus(false);
    }, 1000);
  };

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
        content={modal.content}
        modalVisible={modalVisible}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default Navigation;
