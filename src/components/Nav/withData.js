import React from 'react';

export default function withData(Component) {
  const navMenu = [
    { name: 'Tentang Kuliah Di Turki', href: '#tentangturki' },
    { name: 'Jurusan', href: '#jurusan' },
    { name: 'Tentang Kami', href: '#info' },
    { name: 'Kontak', href: '#footer' },
  ];

  return ({ ...props }) => <Component navMenu={navMenu} {...props} />;
}
