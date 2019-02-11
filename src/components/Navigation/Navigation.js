import React, { useState, useContext } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import store from 'store';
import clsx from 'clsx';
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
  const [auth, setAuth] = useContext(AuthContext);
  const [modal, setModalProps] = useState({});

  const openLoginFormModal = () => {
    setModalProps({
      title: 'Welcome Back!',
      content: <LoginForm toggleModal={toggleModal} />,
    });
    toggleModal(!modalVisible);
  };

  const openRegisterFormModal = () => {
    setModalProps({
      title: 'Create an Account',
      content: <RegisterForm toggleModal={toggleModal} />,
    });
    toggleModal(!modalVisible);
  };

  const logOutUser = () => {
    axios
      .post('/auth/logout')
      .then(res => {
        store.remove('token');
        store.remove('user');
        setAuth({ status: false, token: '' });
        navigate('/');
      })
      .catch(error => {});
  };

  return (
    <>
      <Navbar dark expand="md" className={clsx('bg-primary', styles.Shadow)}>
        <Container>
          <NavbarBrand
            tag={() => (
              <Link className="navbar-brand" to="/">
                pacientech
              </Link>
            )}
          />
          <NavbarToggler onClick={() => toggleNavbar(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {auth.status ? (
                <>
                  <NavItem>
                    <NavLink
                      className={clsx('text-light', styles.CursorOnHover)}
                      onClick={() => navigate('/dashboard')}
                    >
                      Dashboard
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={clsx('text-light', styles.CursorOnHover)}
                      onClick={() => logOutUser()}
                    >
                      Log Out
                    </NavLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLink
                      className={clsx('text-light', styles.CursorOnHover)}
                      onClick={() => openLoginFormModal()}
                    >
                      Log In
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={clsx('text-light', styles.CursorOnHover)}
                      onClick={() => openRegisterFormModal()}
                    >
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
