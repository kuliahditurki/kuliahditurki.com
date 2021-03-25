import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from '../Header/Header';

import { Button } from '../../styles/objects/buttons';
import * as H from './styles';

export default function Hero({ data }) {
  return (
    <H.Hero id="inicio">
      <Container>
        <Row>
          <Col xs="12">
            <Header siteTitle={data.site.siteMetadata.title} />
          </Col>
        </Row>
        <H.HeroContent>
          <Col xs="12">
            <H.Title>{data.site.siteMetadata.title}</H.Title>
            <H.Tagline>
            Turki yang terletak di antara benua Eropa dan Asia memiliki banyak kampus terbaik di berbagai kota di Turki dengan kualitas pendidikan yang mumpuni dan gelar yang diakui oleh dunia International.
            </H.Tagline>
            <Button
              href="#restaurante"
              color="var(--secondary-color)"
              background="var(--base-color)"
            >
              Explore College
            </Button>
          </Col>
        </H.HeroContent>
      </Container>
    </H.Hero>
  );
}
