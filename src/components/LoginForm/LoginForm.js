import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import store from 'store';
import { Form, FormGroup, FormFeedback, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Loader from '@/components/Loader/Loader';
import { AuthContext } from '@/context/AuthContext';
import { inputBorder } from './LoginForm.module.scss';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .required('An email address is required.'),
  password: Yup.string().required('A password is required.'),
});

const LoginForm = ({ toggleModal }) => {
  const [auth, setAuth] = useContext(AuthContext); // eslint-disable-line

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        axios
          .post('/auth/login', values)
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
            console.log(error);
            setSubmitting(false);
          });
      }}
      render={({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) =>
        isSubmitting ? (
          <Loader />
        ) : (
          <Form onSubmit={e => handleSubmit(e)}>
            <FormGroup>
              <Label className="text-primary" for="email">
                Email Address
              </Label>
              <Input
                className={inputBorder}
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
                className={inputBorder}
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
              Log In
            </Button>
            <Button color="secondary" disabled={isSubmitting} onClick={() => toggleModal()}>
              Cancel
            </Button>
          </Form>
        )
      }
      validationSchema={LoginSchema}
    />
  );
};

LoginForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default LoginForm;
