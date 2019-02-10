import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import store from 'store';
import { Form, FormGroup, FormFeedback, Label, Input, Button } from 'reactstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Loader from '@/components/Loader/Loader';
import { AuthContext } from '@/auth/AuthContext';
import styles from './LoginForm.module.scss';

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
      validationSchema={LoginSchema}
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
              Log In
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

LoginForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default LoginForm;
