import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

const DefaultLayout = ({ children }) => (
  <Container fluid className='' style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
    <Row className="">
      <Col
        className="p-0"
        lg="12"
        md="12"
        sm="12"
      >
        {children}
      </Col>
    </Row>
  </Container>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
