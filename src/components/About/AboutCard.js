import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praveen Suthar</span> from
            <span className="purple"> Rajasthan, India</span>.
            <br />
            
            Currently, I live in <span className="purple">Ahmedabad</span> and working as a
            <b> Software Developer</b> at{" "}
            <a
              href="https://soft-techsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="purple"
              style={{ textDecoration: "none" }}
            >
              Soft Tech Solutions
            </a>.
            <br />
            I completed my <b className="purple">BCA</b> from{" "}
            <a
              href="https://www.mlsu.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="purple"
              style={{ textDecoration: "none" }}
            >
              Mohanlal Sukhadia University
            </a>{" "}
            and currently pursuing my <b className="purple">MCA</b> (Online) from{" "}
            <a
              href="https://www.cuchd.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="purple"
              style={{ textDecoration: "none" }}
            >
              Chandigarh University
            </a>.
            <br />
            <br />
            Apart from coding, I love to:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and keep growing!"
          </p>
          <footer className="blockquote-footer">Praveen Suthar</footer>
        </blockquote>
      </Card.Body>

    </Card>
  );
}

export default AboutCard;
