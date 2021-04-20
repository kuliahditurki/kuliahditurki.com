import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Sitemap from '../Sitemap/Sitemap';
import SocialMedias from '../SocialMedias/SocialMedias';
import * as F from './styles';

export default function Footer() {
  return (
    <F.FooterWrapper title="Rodapé" id="footer">
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <h3>Menu</h3>
            <Sitemap />
          </Col>
          <Col xs="12" sm="4">
            <h3>Kontak</h3>
            <p>
              - +62 852 1950 7377 <br />
              - +62 813 2679 1473 <br />
              - +62 853 1226 1634 <br />
            </p>
          </Col>
          <Col xs="12" sm="4">
            <h3>Kuliah Di Turki</h3>
            <SocialMedias />
            <br />
            <h3>PT ARETANET INDONESIA</h3>
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
