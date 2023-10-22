import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">LET ME INTRODUCE MYSELF </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am good at
              <i>
                <b className="purple"> Passionate Girl</b><br></br>
                <b className="purple"> who loves to code and debug</b><br></br>
                <b className="purple"> Building websites for fun</b><br></br>
              </i>
              <br />
              <br />
              I like to dvelop
              <br />
              <br />
              My pronouns are <i><b>Jack of All Trades / Master of none</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nikhita-Gorja"
                  target="_blank"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;