import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types'; // eslint-disable-line
import styles from './LoginForm.module.scss'; // eslint-disable-line

const LoginForm = ({ toggleModal }) => {
  const [payload, setPayload] = useState({
    email: 'johndoe@gmail.com',
    password: 'abc123',
  });

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <FormGroup>
        <Label for="email">Email Address</Label>
        <Input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="●●●●●●●●" />
      </FormGroup>
      <Button color="primary" className="mr-3">
        Submit
      </Button>
      <Button color="secondary" onClick={() => toggleModal()}>
        Cancel
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default LoginForm;
