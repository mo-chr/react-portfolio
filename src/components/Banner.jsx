import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Dev", "Fullstack Dev"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my personal Portfolio!</span>
            <h1>
              Hi, I'm Mohamad Chreif! <br></br>
              <div className="textContainer">
                <span className="wrap">
                  And I'm a <br></br> {text}
                </span>
              </div>
            </h1>
            <p>
              My name is Mohammad Chreif and I am a recent computer science
              graduate from the American University of Science and Technology
              based in Beirut, Lebanon. I have a strong passion for programming
              and algorithms, and have gained experience in web development
              through my internship working with WordPress and Angular. In my
              spare time, I enjoy staying sharp by solving algorithms and
              problems on hacker rank, as well as exploring new technologies and
              pursuing creative hobbies such as photo and video editing. I am
              excited to continue my career in programming and bring my skills
              and enthusiasm to the table.
            </p>
            {/*
              <button
                onClick={window.open(
                  "https://www.linkedin.com/in/mohammad-c/",
                  "_blank"
                )}
              >
                Let's connect
                <ArrowRightCircle size={25} />
              </button>
              */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Hero img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
