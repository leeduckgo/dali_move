import React from "react";
import { Container, Card, Button} from "react-bootstrap";
import daliHeader from "../../Assets/header.png";
import daliSecond from "../../Assets/second.png";
import horse from "../../Assets/horse.png";
import archery from "../../Assets/archery.png";
import printing from "../../Assets/printing.png";
import hiking from "../../Assets/hiking.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function MyCard({ title, imageUrl, description, buttonText, onButtonClick }) {
  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={onButtonClick}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <
          Container 
          className="home-content"         
        >
          <img
              src={daliHeader}
              alt="home pic"
              className="img-fluid"
          />
        </Container>
        <
          Container 
          className="home-content"         
          style={{
          backgroundImage: `url(${daliSecond})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '1012px' 
        }}>
        <center><h1><b>Things to Do</b></h1></center>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <MyCard
            title="Horse Riding"
            imageUrl={horse}
            description=""
            buttonText="Check Details"
          />
          <MyCard
            title="Archery"
            imageUrl={archery}
            description=""
            buttonText="Check Details"
          />
          <MyCard
            title="Woodblock Printing"
            imageUrl={printing}
            description=""
            buttonText="Check Details"
          />
          <MyCard
            title="Hiking"
            imageUrl={hiking}
            description=""
            buttonText="Check Details"
          />
        </div>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
