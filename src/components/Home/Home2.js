import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            🚀 Welcome To My <span className="purple"> DATA-DRIVEN </span> World!
            </h1>
            <p className="home-about-body">
            My journey into the world of data began with a fascination for patterns and a desire to make sense of the information overload. 
            From early experiments with code to diving deep into machine learning, I've cultivated a passion for turning data into actionable insights.
              <br />
              <br />With a toolbox filled with
              <i>
                <b className="purple"> Python, R, and SQL,</b>
              </i>
              <br />
              <br />
              I navigate the intricate landscapes of &nbsp;
              <i>
                <b className="purple">Machine learning</b> and
                {" "}
                <b className="purple">
                Data visualization. 
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Python</b> and
              <i>
                <b className="purple">
                  {" "}
                  Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
            Let's connect, collaborate, and explore the <span className="purple">limitless possibilities </span>that data science has to offer!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vtg04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vinay-sadhwani-536948231"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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