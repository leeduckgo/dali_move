import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import daliFooter from "../Assets/footer.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="home-section">
      <Container className="home-content">
        <img
            src={daliFooter}
            alt="home pic"
            className="img-fluid"
        />
      </Container>
    </Container>
  );
}

export default Footer;
