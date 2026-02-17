export const certificatesData = [
  {
    id: 1,
    institution: 'Your Institution Here',
    image: '/certificates/certificate1.png',
    title: 'Certificate Title Here',
  },
  // ─── Add Aizel's other certificates below this line ───
  // {
  //   id: 2,
  //   institution: 'Institution Name',
  //   image: '/certificates/your-image.png',
  //   title: 'Certificate Title',
  // },
];

export const groupedCertificates = certificatesData.reduce((acc, cert) => {
  if (!acc[cert.institution]) {
    acc[cert.institution] = [];
  }
  acc[cert.institution].push(cert);
  return acc;
}, {});