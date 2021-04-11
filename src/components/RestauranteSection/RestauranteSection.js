import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
              Saya akan memberi Anda 10 universitas termudah tempat kami bekerja. Beberapa adalah $600 (itu harga perusahaan kami) surat penerimaan (untuk Ilmu Sosial, Ilmu Ekonomi dan teologi) sekitar). Tetapi dengan harga ini, minimal harus ada 50 siswa.
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
        <h2>Beberapa Jurusan Kuliah Di Turki Antara Lain</h2>
        <h3>1. Kütahya Dumlupınar üniversitesi ($ 600 untuk Ilmu Sosial, Ilmu Ekonomi, teologi untuk minimal 50+ Siswa)</h3>
        <h3>2. Yalova üniversitesi ($ 650 untuk Ilmu Sosial, Ilmu Ekonomi, teologi untuk minimal 50+ Siswa)</h3>
        <h3>3. Rize Recep Tayyip Erdoğan üniversitesi</h3>
        <h3>4. Kayseri Erciyes</h3>
        <h3>5. Düzce üniversitesi ($ 650 untuk Ilmu Sosial, Ilmu Ekonomi, teologi untuk minimal 50+ Siswa)</h3>
        <h3>6. Uşak Üniversitesi</h3>
        <h3>7. Siirt üniversitesi ($ 600 untuk Ilmu Sosial, Ilmu Ekonomi, teologi untuk minimal 50+ Siswa)</h3>
        <h3>8. Bolu Abant İzzet Baysal Üniversitesi</h3>
        <h3>9. Sivas Cumhuriyet Üniversitesi</h3>
        <h3>10. Sakarya uygulamalı bilimler üniversitesi</h3>








      </center>
    </R.RestauranteSection>


  );
}
