export const certificatesData = [
  {
    id: 1,
    image: '/image/certificates/SQLCertificate.PNG',
    title: 'SQL',
    institution: '',
  },

  {
    id: 2,
    image: '/image/certificates/udemy cert.PNG',
    title: 'CMS Blog in PHP MySQL Bootstrap & PDO',
    institution: 'Udemy',
  },

  {
    id: 3,
    image: '/image/certificates/MCITS.png',
    title: 'Mindanao Conference of Information Technology (MCITS) 2024',
    institution: 'MCITS',
  },

  {
    id: 4,
    image: '/image/certificates/Eonbotz_Apares1.png',
    title: 'On The Job Training Completion',
    institution: 'EonBotz Technologies',
  },

  {
    id: 5,
    image: '/image/certificates/WAAT.jpeg',
    title: 'Educational Tour Completion — Cebu & Bohol',
    institution: 'World of Adventures Travel and Tours',
  },

  // ─── Add more certificates below this line ───
  // {
  //   id: 6,
  //   image: '/image/certificates/your-image.png',
  //   title: 'Certificate Title',
  //   institution: 'Institution Name',
  // },
];

export const groupedCertificates = certificatesData.reduce((acc, cert) => {
  if (!acc[cert.institution]) {
    acc[cert.institution] = [];
  }
  acc[cert.institution].push(cert);
  return acc;
}, {});