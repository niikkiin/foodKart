import React from "react";
import PropTypes from "prop-types";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col
  //Form,
  //FormInput,
  //Button
} from "shards-react";

const LoginAccountDetails = ({ title }) => (
  <>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <label htmlFor="">Sign In To FoodKart App</label>
        <Row>
          <Col>
            <Row form>
              <Col md="12" className="form-group">
                <button className="btn btn-danger form-control">
                  Sign In with Google{" "}
                </button>
              </Col>
            </Row>

            <Row form>
              <Col md="12" className="form-group">
                <button className="btn btn-info form-control">
                  Sign In With Facebook
                </button>
              </Col>
            </Row>

            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value="json1218@gmail.com"
                />
              </Col>
            </Row>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="email"
                  value="json1218@gmail.com"
                />
              </Col>
            </Row>
            <Row form>
              <Col md="12" className="form-group">
                <input type="checkbox" /> Always keep logged in
              </Col>
            </Row>

            <Row form>
              <Col md="12" className="form-group">
                <button className="btn btn-info">Login</button>
              </Col>
            </Row>

            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="">
                  Don't have an account? <a href="/register">Sign up here.</a>
                </label>
              </Col>
            </Row>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </>
);

LoginAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

LoginAccountDetails.defaultProps = {
  title: "Account Details"
};

export default LoginAccountDetails;
