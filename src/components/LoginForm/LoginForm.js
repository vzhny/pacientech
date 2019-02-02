import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import Loader from '@/components/Loader/Loader';
import { AuthContext } from '@/auth/AuthContext';

const LoginForm = ({ toggleModal }) => {
  const [authStatus, updateAuthStatus] = useContext(AuthContext); // eslint-disable-line

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        setTimeout(() => {
          // TODO: add axios call to the pacientech api to log in the user.
          toggleModal();
          updateAuthStatus(true);
          navigate('/dashboard');
          setSubmitting(false);
        }, 2000);
      }}
      render={({ values, errors, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <Form onSubmit={e => handleSubmit(e)}>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="johndoe@gmail.com"
              disabled={isSubmitting}
            />
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
            />
          </FormGroup>
          {isSubmitting ? <Loader /> : null}
          <Button type="submit" color="primary" className="mr-3" disabled={isSubmitting}>
            Submit
          </Button>
          <Button color="secondary" onClick={() => toggleModal()} disabled={isSubmitting}>
            Cancel
          </Button>
        </Form>
      )}
    />
  );
};

LoginForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default LoginForm;
