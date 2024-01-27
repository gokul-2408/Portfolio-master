import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col></Col>
            <Col></Col>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <span>Are you looking for a <Type/></span>
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </div>
  );
}

export default Home;