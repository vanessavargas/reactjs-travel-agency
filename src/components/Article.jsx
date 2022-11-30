import React from "react";
import { Container } from "reactstrap";

const Article = (props) => {
  return (
    <>
      <Container fluid>
        <p className="lead">{props.article}</p>
      </Container>
    </>
  );
};

export default Article;
