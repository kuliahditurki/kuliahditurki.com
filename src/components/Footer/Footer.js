import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Sitemap from '../Sitemap/Sitemap';
import SocialMedias from '../SocialMedias/SocialMedias';

import * as F from './styles';

export default function Footer() {
  return (
    <F.FooterWrapper title="Rodapé">
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <h3>Menu</h3>
            <Sitemap />
          </Col>
          <Col xs="12" sm="4">
            <h3>Kontak</h3>
            <p>
              - kontak
              <br />- +62 21 8276 0460 <br />
              - +62 812 1869 3266 <br />
              - +62 858 8965 2426 <br />
              - Youtube : Kuliah di Turki <br />
              -  Instagram : kuliahditurki_id <br />
              -  Facebook : kuliahditurki, studyditurki<br />
            </p>
          </Col>
          <Col xs="12" sm="4">
            <h3>Kuliah Di Turki</h3>
            <SocialMedias />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <F.Copy>
              Made by
              <a href="https://syukrieseo.com" target="BLANK">
                syukrie SEO
              </a>
              <br />
              Kuliah Di Turki 2021
              <sup>&copy;</sup>.
            </F.Copy>
          </Col>
        </Row>
      </Container>
    </F.FooterWrapper>
  );
}
