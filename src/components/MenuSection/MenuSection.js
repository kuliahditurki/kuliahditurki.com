import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



import * as M from './styles';

export default function MenuSection() {
  return (
    <M.MenuWrapper id="gallery" title="Menu">
      <Container>
        <Row>
          <Col xs="12">
            <h2>Gallery</h2>
          </Col>
        </Row>
        <Row>
          <Col>
          <iframe width="450" height="315" src="https://www.youtube.com/embed/MyY9v5eceMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          <Col>
<iframe width="450" height="315" src="https://www.youtube.com/embed/A4yJ0AIwYwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          
        </Row>
        <Row>
          <Col>
          <iframe width="450" height="315" src="https://www.youtube.com/embed/CNj6TqItiOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          <Col>
          <iframe width="450" height="315" src="https://www.youtube.com/embed/8jE0yTGcrLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          
        </Row>
      </Container>
    </M.MenuWrapper>
  );
}
