import React from 'react';

export default function withData(Component) {
  const sobreContent = [
    {
      title: 'Nossa história',
      content:
        'PT. Biru Marmara Edukasi menjalankan jasa Konsultan Pengembangan Sumber Daya Manusia melalui program pengiriman pelajar, mahasiswa, dan masyarakat Indonesia untuk melanjutkan pendidikan atau mendapatkan pendidikan dan atau pelatihan di luar negeri, khususnya di Turki.',
        
    },
    {
      title: 'Nossos valores',
      content:
        'PT. Biru Marmara Edukasi dengan Brand nya “Kuliah di Turki “ mendedkasikan diri untuk membuka peluang dan mengirimkan para pelajar Indonesia untuk dapat kuliah di Turki baik tingkatan Sarjana, Master, maupun Doktoral.',
    },
  ];

  return ({ ...props }) => <Component sobreContent={sobreContent} {...props} />;
}
