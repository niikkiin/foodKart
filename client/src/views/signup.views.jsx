import React from "react";
// import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

// svg for sign up
import { ReactComponent as SignUpSVG } from '../assets/register/signUpSVG.svg';
import RegisterAccountDetails from "../components/registration/register.component";

const SignUpView = () => (
  <Container fluid className="main-content-container bg-white">
    <Row className='m-5'>
      <Col
        lg="8"
        md="12"
        sm="12"
      ><SignUpSVG /></Col>
      <Col
        lg="4"
        md="12"
        sm="12"
      >
        <h2 className='text-center'>Sign Up</h2>
        <RegisterAccountDetails />
      </Col>
    </Row>
  </Container>
);

SignUpView.propTypes = {

};

SignUpView.defaultProps = {
};

export default SignUpView;
