import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "../../components/style.scss"
import RestauranteImg1 from '../../assets/restaurante-img-1';
import RestauranteImg2 from '../../assets/restaurante-img-2';
import RestauranteImg3 from '../../assets/restaurante-img-3';
import RestauranteImg4 from '../../assets/restaurante-img-4';
import RestauranteImg5 from '../../assets/restaurante-img-5';

import * as R from './styles';

export default function RestauranteSection() {
  return (
    <R.RestauranteSection id="tentangturki" title="Tentang Turki">
      <Container>
        <Row>
          <Col xs="12">
            <h2>Tentang Kuliah Di Turki</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <article title="Infraestrutura">
              <h3>Mengapa Harus Kuliah DI Turki</h3>
              <p>
              Kuliah di Turki oleh PT. Biru Marmara Edukasi adalah lembaga konsultan pendidikan terbesar di Indonesia yang mendedikasikan diri dalam hal Pendidikan dan Kuliah di Turki.
              </p>
            </article>
          </Col>
          <Col xs="12" sm="6">
            <RestauranteImg1 alt="Espaço interno do restaurante" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <article title="No centro histórico de Salvador">
              <h3>Terbaik, Terdepan, Terpercaya!</h3>
              <p>
              PT Biru Marmara Edukasi ditunjuk oleh Universitas–Universitas Negeri Turki 
              sebagai perwakilan di Indonesia untuk memberikan kesempatan bagi para pelajar Indonesia agar mudah dapat melanjutkan pendidikan di Turki dengan berbagai subsidi yang diberikan oleh pemerintah Turki.
              </p>
            </article>
          </Col>
          <Col xs="12" sm="6">
            <RestauranteImg2 alt="Pelourinho" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <RestauranteImg3 alt="Pelourinho" />
          </Col>
          <Col xs="12" sm="4">
            <RestauranteImg4 alt="Interior do restaurante, area principal" />
          </Col>
          <Col xs="12" sm="4">
            <RestauranteImg5 alt="Interior do restaurante, area premium" />
          </Col>
    
      <p class={styles.info}>|| 25 University ||
      700+ Students ||
      3 Strata ||</p>
      
        </Row>
      </Container>
    </R.RestauranteSection>
  );
}
