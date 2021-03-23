import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SobreImg from '../../assets/sobre-img';
import withData from './withData';
import * as S from './styles';

function SobreSection({ sobreContent }) {
  return (
    <S.SobreWrapper id="info" title="Kontak">
      <Container>
        <Row>
          <Col xs="12">
            <h2>Tentang Kami</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            {sobreContent.map(({ title, content }, index) => (
              <Row key={index}>
                <Col xs="12">
                  <article title={title}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                  </article>
                </Col>
              </Row>
            ))}
          </Col>
          <Col xs="12" sm="6">
            <SobreImg alt="Moqueca de peixe" />
          </Col>
        </Row>
      </Container>
    </S.SobreWrapper>
  );
}

export default withData(SobreSection);
