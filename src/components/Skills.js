import Carousel from "react-multi-carousel";
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import frontEndImage from "../assets/img/frontEnd.svg";
import reactImage from "../assets/img/react.svg";
import javaImage from "../assets/img/java.svg";
import wordPressImage from "../assets/img/wordpress.svg";
import sqlImage from "../assets/img/sql.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                My skills are mainly focused on web development which include
                the following:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={frontEndImage} alt="Image" />
                  <h5>Frontend Web Development Using HTML5 and CSS</h5>
                </div>
                <div className="item">
                  <img src={reactImage} alt="Image" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src={javaImage} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={sqlImage} alt="Image" />
                  <h5>MySQL,MariaDB,PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={wordPressImage} alt="Image" />
                  <h5>WordPress</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
