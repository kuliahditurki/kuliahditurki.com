import React from 'react';

import MainLayout from '../layouts/MainLayout';

import SEO from '../components/Seo/Seo';
import RestauranteSection from '../components/RestauranteSection/RestauranteSection';
import MenuSection from '../components/MenuSection/MenuSection';
import SobreSection from '../components/SobreSection/SobreSection';
import ContatoSection from '../components/ContatoSection/ContatoSection';

export default function IndexPage() {
  return (
    <MainLayout>
      <SEO
        title="Home"
        lang="pt-br"
        description="Kuliah Di Turki"
      />

      <RestauranteSection />
      <MenuSection />
      <SobreSection />
      <ContatoSection />
    </MainLayout>
  );
}
