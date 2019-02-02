import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './LoginForm.module.scss';

const LoginForm = () => (
  <Form>
    <FormGroup>
      <Label for="email">Email Address</Label>
      <Input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input type="password" name="password" id="password" placeholder="●●●●●●●●" />
    </FormGroup>
  </Form>
);

LoginForm.propTypes = {};

export default LoginForm;
