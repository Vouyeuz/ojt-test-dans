import React from "react";
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = (props) => {
  return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="LoginEmail" className="mr-sm-2">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="LoginEmail"
            placeholder="user@domain.com"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="LoginPassword" className="mr-sm-2">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="LoginPassword"
            placeholder="***"
          />
        </FormGroup>
        <Link to="/job-search" style={{ textDecoration: 'none' }} className="shadow">
        <Button className="my-2">Login</Button>
        </Link>
      </Form>
  );
};

export default Login;
