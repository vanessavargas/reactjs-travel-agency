import React from "react";
import { Container } from "reactstrap";

const Article = (props) => {
  return (
    <div>
      <Container fluid>
        <p className="lead">{props.article}</p>
      </Container>
    </div>
  );
};

export default Article;
