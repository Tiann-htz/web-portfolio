export const certificatesData = [
  {
    id: 1,
        image: '/image/certificates/SQLCertificate.PNG',
    title: 'SQL',
  },

  {
    id: 2,
        image: '/image/certificates/udemy cert.PNG',
    title: 'CMS Blog in PHP MySQL Bootstrap & PDO',
  },

{
    id: 3,
        image: '/image/certificates/MCITS.png',
    title: 'Mindanao Conference of Information Technology (MCITS) 2024',
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