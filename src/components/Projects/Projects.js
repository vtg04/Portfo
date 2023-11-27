import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import man from "../../Assets/Projects/man.jpg";
import twitter from "../../Assets/Projects/6447003.jpg"
import emote from "../../Assets/Projects/emote.jpg";
import image from "../../Assets/Projects/image.jpg";
import screen from "../../Assets/Projects/screen.jpg";
import skin from "../../Assets/Projects/skin.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              title="Twitter Sentiment Analysis"
              description="Utilizing the TensorFlow framework, Twitter sentiment analysis system employs Long Short-Term Memory (LSTM) networks to process vast amounts of data, 
              effectively extracting sentiment from tweets in real-time. The model was successfully able to classify the tweets into: Positive, Negative and Neutral with an accuracy of 89%"
              ghLink="https://github.com/vtg04/Twitter_sentiment" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={screen}
              title="Resume Screening"
              description="Utilized 'Natural Language Processing (NLP)' to enhance resume screening efficiency enabling precise analysis of candidate qualifications and skills for optimal candidate selection."
              ghLink="https://github.com/vtg04/Resume_screening"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              title="PixelPerfect"
              description="Implemented Convolutional Neural Networks (CNN) combined with Single Shot Multibox Detector (SSD) to ensure product image accuracy on the marketplace, 
              enabling automated verification and validation of product details for quality assurance and improved user experience."
              ghLink="https://github.com/vtg04/Image_correctness"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={man}
              title="Movie Recommender"
              description="Employing a hybrid approach, the movie recommendation system seamlessly merges Matrix Factorization techniques with Deep Learning models, leveraging collaborative filtering 
              and rich feature representations to deliver highly personalized movie recommendations based on user preferences and content characteristics."
              ghLink="https://github.com/vtg04/movie-recommender"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skin}
              title="DermAId | Smart Dermatology Diagnostic Assistant"
              description="Developed an AI-powered tool leveraging Convolutional Neural Networks (CNN) to conduct initial diagnoses of dermatological conditions by analyzing skin manifestations, 
              aiding in early detection and providing preliminary insights for medical professionals and patients."
              ghLink="https://github.com/vtg04/Skin_disease"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emote}
              isBlog={false}
              title="Emotion Detection"
              description="Utilizing Deep Learning methodologies, the emotion detection system accurately identifies and interprets human emotions from various sources such as facial expressions, voice tonality, and textual cues, 
              enabling real-time understanding and analysis of emotional states for diverse applications in human-computer interaction, mental health, and market research."
              ghLink="https://github.com/vtg04/emotion_detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;