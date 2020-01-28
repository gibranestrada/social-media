import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <Row className="justify-content-center mt-5">
        <Col xl={3} lg={4} md={5} sm={7}>
          <Form className="border p-4">
            <h2 className="text-center">Sign Up</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                required
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Col className="text-center">
              <Button
                onClick={e => e.preventDefault()}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Col>
            <Col className="text-center mt-2">
              <Link to={"/"} className="nav-link">
                <Button variant="success">Log In</Button>
              </Link>
            </Col>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Signup;
