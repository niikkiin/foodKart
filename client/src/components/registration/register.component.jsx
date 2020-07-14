import React from "react";
import PropTypes from "prop-types";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";

const RegisterAccountDetails = ({ title }) => (
  <>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="12" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    id="FullName"
                    placeholder="Full Name"
                    value="Nikki"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="12" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value="nikki@example.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
              </Row>
              <Row form>
                {/* Password */}
                <Col md="12" className="form-group">
                  <label htmlFor="password">Password</label>
                  <FormInput
                    type="password"
                    id="password"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <Row form>
                {/* Confirm Password */}
                <Col md="12" className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <FormInput
                    type="password"
                    id="confirmPassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <Row form className="text-center">
                <Col md="12">
                  <Button theme="accent">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </>
);

RegisterAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

RegisterAccountDetails.defaultProps = {
  title: "Account Details"
};

export default RegisterAccountDetails;
