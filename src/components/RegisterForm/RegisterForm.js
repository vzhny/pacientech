import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import store from 'store';
import { Row, Col, Form, FormGroup, FormFeedback, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Loader from '@/components/Loader/Loader';
import { AuthContext } from '@/context/AuthContext';
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
                    disabled={isSubmitting}
                    invalid={!!errors.firstName}
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    type="text"
                    valid={!errors.firstName && touched.firstName}
                    value={values.firstName}
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
                    disabled={isSubmitting}
                    invalid={!!errors.lastName}
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Doe"
                    type="text"
                    valid={!errors.lastName && touched.lastName}
                    value={values.lastName}
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
                disabled={isSubmitting}
                invalid={!!errors.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                type="text"
                valid={!errors.email && touched.email}
                value={values.email}
              />
              {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback> : null}
            </FormGroup>
            <FormGroup>
              <Label className="text-primary" for="password">
                Password
              </Label>
              <Input
                className={styles.InputBorder}
                disabled={isSubmitting}
                invalid={!!errors.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="●●●●●●●●"
                type="password"
                valid={!errors.password && touched.password}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <FormFeedback>{errors.password}</FormFeedback>
              ) : null}
            </FormGroup>
            <Button className="mr-3" color="primary" disabled={isSubmitting} type="submit">
              Register
            </Button>
            <Button color="secondary" disabled={isSubmitting} onClick={() => toggleModal()}>
              Cancel
            </Button>
          </Form>
        )
      }
      validationSchema={RegisterSchema}
    />
  );
};

RegisterForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default RegisterForm;
