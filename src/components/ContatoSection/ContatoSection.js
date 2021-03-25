import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import * as C from './styles';
export default function ContatoSection() {
  return (
    <C.ContatoWrapper id="kontak" title="Contato">
      <Container>
        <Row>
          <Col xs="12">
            <h2>Mengapa Harus Kuliah Di Turki ?</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="7">
            <Row>
              <Col xs="12">
                <h3>Biaya Terjangkau </h3>
                <p>
                Dibandingkan dengan negara-negara Eropa lainnya, 
                biaya kuliah serta biaya hidup di Turki terbilang paling terjangkau dan efisien
                  <br />
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <h3>Kaya akan Link Industri</h3>
                <p>
                Pemerintah Turki terus berupaya untuk mengintegrasikan akses universitas dengan industri-industri yang berkembang pesat di dunia
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <h3>Negara yang Aman & Ramah</h3>
                <p>
                Penduduk yang ramah layaknya di Indonesia. Apalagi, jika kamu menunjukkan rasa ingin mengenal lebih dekat yang juga disertai empati yang tinggi kepada mereka
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                
              <h3> Panorama Alamnya Mempesona</h3>
              <p>Dengan study di Turki, anda akan terdapat berbagai tempat wisata baik sifatnya wisata sejarah, wisata rohani hingga wisata alam.</p>   
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="5">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </C.ContatoWrapper>
  );
}



