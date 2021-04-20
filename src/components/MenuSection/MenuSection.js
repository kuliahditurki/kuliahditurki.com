import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



import * as M from './styles';

export default function MenuSection() {
  return (
    <M.MenuWrapper id="jurusan" title="Menu">
      <Container>
        <Row>
          <Col xs="12">
            <h2>Jurusan</h2>
          </Col>
        </Row>
        <h2>Beberapa Jurusan Kuliah Di Turki Antara Lain</h2>
        <br />
        <h3>1. Kütahya Dumlupınar üniversitesi untuk Ilmu Sosial, Ilmu Ekonomi, teologi untuk minimal 50+ Siswa)</h3>
        <br />
        <h3>2. Yalova üniversitesi untuk Ilmu Sosial, Ilmu Ekonomi, teologi untuk minimal 50+ Siswa)</h3>
        <br />
        <h3>3. Rize Recep Tayyip Erdoğan üniversitesi</h3>
        <br />
        <h3>4. Kayseri Erciyes</h3>
        <br />
        <h3>5. Düzce üniversitesi untuk Ilmu Sosial, Ilmu Ekonomi, teologi untuk minimal 50+ Siswa)</h3>
        <br />
        <h3>6. Uşak Üniversitesi</h3>
        <br />
        <h3>7. Siirt üniversitesi untuk Ilmu Sosial, Ilmu Ekonomi, teologi untuk minimal 50+ Siswa)</h3>
        <br />
        <h3>8. Bolu Abant İzzet Baysal Üniversitesi</h3>
        <br />
        <h3>9. Sivas Cumhuriyet Üniversitesi</h3>
        <br />
        <h3>10. Sakarya uygulamalı bilimler üniversitesi</h3>
        <br />
      </Container>
    </M.MenuWrapper>
  );
}
