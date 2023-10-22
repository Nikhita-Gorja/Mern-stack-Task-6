import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="Green">Gorja Venkata Sai Nikhita</span>
            from <span className="Green"> Vizg, India.</span>&nbsp;
            I am a third year student at VIT-AP University studying Computer Science and engineering with specilaization in Artificial Intelligence and machine learning
            <br />
            <br />
            Additionally, I am interested in machine and data science projects, and doing analysis on business related data.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> talking with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> mobile games
            </li>
            <li className="about-activity">
              <ImPointRight /> korean dramas
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;