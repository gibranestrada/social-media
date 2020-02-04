import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .required("Please enter a username")
    .min(4, "Too short - please enter at least 4 characters."),
  password: yup
    .string()
    .required("Please enter a password")
    .min(4, "Too short - please enter at least 4 characters.")
});

const Login = () => {
  //const methods = useForm({ validationSchema: schema });
  const { register, handleSubmit, watch, errors, getValues } = useForm({
    validationSchema: schema
  });
  const onSubmit = data => {
    console.log(data);
  };

  console.log(watch("password"), watch("username"));
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg={5} md={6} sm={8}>
          <Form className="border p-4" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center mb-3">Login</h3>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                name="username"
                aria-describedby="usernameError"
                //value={getValues().username}
                ref={register}
                autoComplete="username"
                isValid={
                  !errors.username?.message && getValues().username?.length > 3
                }
                isInvalid={
                  errors.username?.message && getValues().username?.length < 4
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                // value={getValues().password}
                placeholder="Password"
                aria-describedby="passwordError"
                ref={register}
                autoComplete="current-password"
                isValid={
                  !errors.password?.message && getValues().password?.length > 3
                }
                isInvalid={
                  errors.password?.message && getValues().password?.length < 4
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Col className="text-center mb-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col className="text-center">
              <Link to={"/signup"} className="nac-link">
                Sign Up
              </Link>
            </Col>
            <Col className="text-center">
              <Link to={"/recoverpassword"} className="nac-link">
                Forgot Password?
              </Link>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
