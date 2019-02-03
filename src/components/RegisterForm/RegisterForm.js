import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import { Row, Col, Form, FormGroup, FormFeedback, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Loader from '@/components/Loader/Loader';
import { AuthContext } from '@/auth/AuthContext';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15)
    .required('A first name is required.'),
  lastName: Yup.string()
    .max(15)
    .required('A first name is required.'),
  email: Yup.string()
    .email('Invalid email!')
    .required('Email address is required.'),
  password: Yup.string().required('Password is required.'),
});

const RegisterForm = ({ toggleModal }) => {
  const [authStatus, updateAuthStatus] = useContext(AuthContext); // eslint-disable-line

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        setTimeout(() => {
          // TODO: add axios call to the pacientech api to log in the user.
          toggleModal();
          updateAuthStatus(true);
          navigate('/dashboard');
          setSubmitting(false);
        }, 2000);
      }}
      render={({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form onSubmit={e => handleSubmit(e)}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="email">First Name</Label>
                <Input
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
                  <FormFeedback>A first name is required.</FormFeedback>
                ) : null}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Last Name</Label>
                <Input
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
                  <FormFeedback>A last name is required.</FormFeedback>
                ) : null}
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
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
            {errors.email && touched.email ? (
              <FormFeedback>The entered email address is invalid.</FormFeedback>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
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
              <FormFeedback>Please enter a password.</FormFeedback>
            ) : null}
          </FormGroup>
          {isSubmitting ? <Loader /> : null}
          <Button type="submit" color="primary" className="mr-3" disabled={isSubmitting}>
            Log In
          </Button>
          <Button color="secondary" onClick={() => toggleModal()} disabled={isSubmitting}>
            Cancel
          </Button>
        </Form>
      )}
    />
  );
};

RegisterForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default RegisterForm;