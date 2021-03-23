import React from 'react';

export default function withData(Component) {
  const sitemapLinks = [
    { label: 'Tentang Kuliah Di Turki', href: '#tentangturki' },
    { label: 'Info', href: '#tentangkami' },
    { label: 'Tentang Kami', href: '#info' },
    { label: 'kontak', href: '#kontak' },
  ];

  return ({ ...props }) => <Component sitemapLinks={sitemapLinks} {...props} />;
}
