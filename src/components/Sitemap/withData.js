import React from 'react';

export default function withData(Component) {
  const sitemapLinks = [
    { label: 'Tentang Kuliah Di Turki', href: '#tentangturki' },
    { label: 'Info', href: '#tentangkami' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'kontak', href: '#footer' },
  ];

  return ({ ...props }) => <Component sitemapLinks={sitemapLinks} {...props} />;
}
