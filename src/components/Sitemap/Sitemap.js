import React from 'react';

import withData from './withData';

import * as S from './styles';

function Sitemap({ sitemapLinks }) {
  return (
    <S.SitemapWrapper title="Kuliah di turki">
      <ul>
        {sitemapLinks.map(({ href, label }, index) => (
          <li key={index}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </S.SitemapWrapper>
  );
}

export default withData(Sitemap);
