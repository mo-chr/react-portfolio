import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <a href={link}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
        </div>
      </a>
      <div className="proj-txbx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </Col>
  );
};
