import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinay Sadhwani </span>
            from <span className="purple"> Lucknow, India.</span>
            <br /> I am a  pre-final year student pursuing BTech
            in Information Technology at RGIPT.
            <br />
            Data is not just about algorithms and statistics for me—it's a dynamic medium that requires creativity and a keen understanding of the human context. Whether it's crafting compelling visualizations 
            or building predictive models, I strive to bring a holistic perspective to every project. Explore my portfolio to witness the intersection of my technical skills and passion for problem-solving.
            <br />
            <br />
            Apart from coding, I love to
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Read Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Write Technical Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Sports
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
