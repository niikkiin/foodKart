import React from "react";
// import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

// svg for sign up
import { ReactComponent as SignUpSVG } from "../assets/register/signInSVG.svg";
import LoginAccountDetails from "../components/registration/login.component";

const Login = () => (
  <Container fluid className="main-content-container bg-white">
    <Row className="m-5">
      <Col lg="8" md="12" sm="12">
        <SignUpSVG />
      </Col>
      <Col lg="4" md="12" sm="12">
        <h2 className="text-center">Login</h2>
        <LoginAccountDetails />
      </Col>
    </Row>
  </Container>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
