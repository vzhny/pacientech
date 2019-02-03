import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import { Form, FormGroup, FormFeedback, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Loader from '@/components/Loader/Loader';
import { AuthContext } from '@/auth/AuthContext';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .required('An email address is required.'),
  password: Yup.string().required('A password is required.'),
});

const LoginForm = ({ toggleModal }) => {
  const [authStatus, updateAuthStatus] = useContext(AuthContext); // eslint-disable-line

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
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
            {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback> : null}
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
              <FormFeedback>{errors.password}</FormFeedback>
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

LoginForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default LoginForm;
