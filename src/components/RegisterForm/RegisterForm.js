import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import store from 'store';
import { Row, Col, Form, FormGroup, FormFeedback, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Loader from '@/components/Loader/Loader';
import { AuthContext } from '@/auth/AuthContext';
import styles from './RegisterForm.module.scss';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, 'Your entered first name must be less than 15 characters.')
    .required('A first name is required.'),
  lastName: Yup.string()
    .max(15, 'You entered last name must be less than 15 characters.')
    .required('A last name is required.'),
  email: Yup.string()
    .email('Invalid email!')
    .required('An email address is required.'),
  password: Yup.string()
    .min(7, 'Your password must be greater than 6 characters.')
    .required('A password is required.'),
});

const RegisterForm = ({ toggleModal }) => {
  const [auth, setAuth] = useContext(AuthContext); // eslint-disable-line

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        axios
          .post('/auth/register', values)
          .then(res => {
            const { data } = res;
            const { firstName, lastName, auth: status, token } = data;

            store.set('user', { firstName, lastName });
            store.set('token', token);

            setAuth({ status, token });
            navigate('/dashboard');
            setSubmitting(false);
            toggleModal();
          })
          .catch(error => {
            setSubmitting(false);
          });
      }}
      render={({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) =>
        isSubmitting ? (
          <Loader />
        ) : (
          <Form onSubmit={e => handleSubmit(e)}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label className="text-primary" for="email">
                    First Name
                  </Label>
                  <Input
                    className={styles.InputBorder}
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    placeholder="John"
                    disabled={isSubmitting}
                    valid={!errors.firstName && touched.firstName}
                    invalid={!!errors.firstName}
                  />
                  {errors.firstName && touched.firstName ? (
                    <FormFeedback>{errors.firstName}</FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className="text-primary" for="email">
                    Last Name
                  </Label>
                  <Input
                    className={styles.InputBorder}
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    placeholder="Doe"
                    disabled={isSubmitting}
                    valid={!errors.lastName && touched.lastName}
                    invalid={!!errors.lastName}
                  />
                  {errors.lastName && touched.lastName ? (
                    <FormFeedback>{errors.lastName}</FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label className="text-primary" for="email">
                Email Address
              </Label>
              <Input
                className={styles.InputBorder}
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="johndoe@gmail.com"
                disabled={isSubmitting}
                valid={!errors.email && touched.email}
                invalid={!!errors.email}
              />
              {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback> : null}
            </FormGroup>
            <FormGroup>
              <Label className="text-primary" for="password">
                Password
              </Label>
              <Input
                className={styles.InputBorder}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="●●●●●●●●"
                disabled={isSubmitting}
                valid={!errors.password && touched.password}
                invalid={!!errors.password}
              />
              {errors.password && touched.password ? (
                <FormFeedback>{errors.password}</FormFeedback>
              ) : null}
            </FormGroup>
            <Button type="submit" color="primary" className="mr-3" disabled={isSubmitting}>
              Register
            </Button>
            <Button color="secondary" onClick={() => toggleModal()} disabled={isSubmitting}>
              Cancel
            </Button>
          </Form>
        )
      }
    />
  );
};

RegisterForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default RegisterForm;
