import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestauranteImg1 from '../../assets/restaurante-img-1';
import RestauranteImg2 from '../../assets/restaurante-img-2';


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
              Saya akan memberi Anda 10 universitas termudah tempat kami bekerja. Beberapa adalah, surat penerimaan (untuk Ilmu Sosial, Ilmu Ekonomi dan teologi) sekitar). Tetapi dengan harga ini, minimal harus ada 50 siswa.
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
              <h3>Unggul Modern dan Berdaya Saing</h3>
              <p>
              Tapi yang sangat penting adalah dimana dari 10 universitas dari negara Indonesia ini yang memiliki akreditasi (ekivalensi), perlu diteliti. Jika perlu, kami dapat mengubah beberapa universitas.
              </p>
            </article>
          </Col>
          <Col xs="12" sm="6">
            <RestauranteImg2 alt="Pelourinho" />
          </Col>
        </Row>
      </Container>
      <br />
      <center>
      <h2> 25 University 700+ Students 3 Strata.</h2>
      <h2>Daftar Jalur SAT.<br />
      Daftar Santri Goes To Turki.<br />
      Daftar S1 Jalur Bekas Program llahiyat (Tanpa Tes).<br />
      Daftar S1 Istanbul.<br />
      Daftar S1 Uludag University.<br /> 
      Daftar S1 PTN Turki Jalur Berkas Tanpa Tes Tulis (Esensi Beasiswa).<br />
      Daftar SMAN International Imam Hatip.
      </h2>
      
      </center>
    </R.RestauranteSection>


  );
}
