import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import dreamRun from "../assets/img/dreamRun.png";
import baladeh from "../assets/img/baladeh.png";
import austy from "../assets/img/austy.png";
import restaurant from "../assets/img/restaurant.png";
import easyBank from "../assets/img/easyBank.png";
import dreamMovies from "../assets/img/dreamMovies.png";
import TrackVisibility from "react-on-screen";
import promogates from "../assets/img/Promogates-Maintenance-Page.png";
import synctale from "../assets/img/Synctale-Landing-page.png";
import UrbanStrom from "../assets/img/UrbanStorm.png";
export const Projects = () => {
  const projects = [
    {
      title: "Dream Run",
      description:
        "Mobile Game using unity Dream Run is Available on the Play Store!\nTechnologies used : Unity (C#) , Aesprite(PixelArt)",
      imgUrl: dreamRun,
      link: "",
    },
    {
      title: "Austy Personal Assistant",
      description:
        "Worked with a group of my university friends on an AIPersonal Assistantwhich utilized GPT-3 newest model 'Davinci' which helped students obtain information from the mainUniversity website such as their grades and schedules.Technologies Used : Flask , GPT-3 API , Azure Cloud,Python (web scrapping) , PostgreSQL",
      imgUrl: austy,
      link: "",
    },
    {
      title: "Baladeh",
      description:
        "Android E-commerce app using Android Studio Solo worked on an android app which is an E-Commerce app for local shops in Lebanon where the name ``Baladeh`` Came to be, It was also connected to a local Database(MySql). Technologies Used: Android Studio, MySQL.",
      imgUrl: baladeh,
      link: "",
    },
    {
      title: "Restaurant WebApp",
      description:
        "Solo Worked on a website for a virtual restaurant, and integrated a python API that I made to Auto Generate QR codes, these QR codes are then displayed under the name of each dish on the menu. Added an Admin Panel with CRUD options. Technologies Used: PHP,Python, HTML5,CSS",
      imgUrl: restaurant,
      link: "",
    },
    {
      title: "EasyBank Frontend Mentor Challenge",
      description:
        "This site was a Frontend Mentor Challenge which I participated in, where design images are provided by the Frontend Mentor Website and we're asked to mimic the design template using Basic HTML and CSS Technologies Used: HTML5,SASS,JS",
      imgUrl: easyBank,
      link: "https://easybank-ladicius.netlify.app/",
    },
    {
      title: "Dream Movies",
      description:
        "The idea behind Dream Movies is to create an IMDb-like site for movies. the site is still under development and will improve more over time. It's created using basic HTML5 and css as well as React. Technologies Used: React base,HTML5,CSS",
      imgUrl: dreamMovies,
      link: "https://movies-info-using-react.pages.dev/",
    },
    {
      title: "SyncTale",
      description:
        "SyncTale's landing page is Made using React JS as a practice project for my MERN stack learning roadmap. Technologies Used: React JS,HTML5,CSS",
      imgUrl: synctale,
      link: "https://synctale-website.pages.dev/",
    },
    {
      title: "PromoGates Maintenance Page",
      description:
        " Worked on this as a part time job for the company in charge of PromoGate's website using desings provided.Technologies Used: JS,HTML5,CSS",
      imgUrl: promogates,
      link: "https://promogates.pages.dev/",
    },
    {
      title: "Urban Storm Website (In Progress...)",
      description:
        "Urban Storm is an online custom clothing shop that operates entirely on a server-less platform. It is built using React and Firebase, and features an integrated admin dashboard that allows for easy management of the store. All buttons and elements on the site are custom-made, giving it a unique and professional look.Technologies Used: React JS, Firebase, Node JS",
      imgUrl: UrbanStrom,
      link: "https://urbanstorm-website.pages.dev/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Take a look at some of the projects I worked on!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Newest Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Older Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(6, 12).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(0, 6).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <p>More Projects coming soon...</p>
                          {projects.slice(12, 18).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
