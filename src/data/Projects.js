export const projectsData = [
  {
    id: 1,
    order: 1,
    title: 'Habify',
    type: 'Mobile App',
    shortDescription: 'A mobile habit tracking application built with React Native and Expo, developed as a school project. Habify helps users build and maintain positive habits through daily tracking, progress monitoring, and a gamification system that rewards consistency.',
    techStack: ['React Native', 'TypeScript', 'Expo'],
    images: [
      '/image/projects/habify 1.png',
      '/image/projects/habify 2.png',
      '/image/projects/habify 3.png',
      '/image/projects/habify 4.png',
      '/image/projects/habify 5.png',
      '/image/projects/habify 6.png',
      '/image/projects/habify 7.png',
      '/image/projects/habify 8.png',
      '/image/projects/habify 9.png',
      
    ],
    visitSite: null,
  },

  {
    id: 2,
    order: 2,
    title: 'PopFlix',
    type: 'Movie App',
    shortDescription: 'A modern movie discovery app that lets users browse, search, and explore films with rich details, ratings, and trailers.',
    techStack: ['React Native', 'Expo', 'TypeScript'],
    images: [
      '/image/projects/popflix1.png',
      '/image/projects/popflix2.png',
      '/image/projects/popflix3.png',
      '/image/projects/popflix4.png',
      '/image/projects/popflix5.png',
    ],
    visitSite: null,
  },

  {
    id: 3,
    order: 3,
    title: 'Chronyx Mobile App',
    type: 'Mobile App',
    shortDescription: 'A mobile application that connects to the Chronyx admin portal, featuring QR code functionality for employee check-ins, attendance tracking, and salary management.',
    techStack: ['React Native', 'Expo', 'JavaScript', 'phpMyAdmin', 'SQL'],
    images: [
      '/image/projects/chronyxapp.png',
      '/image/projects/chronyxapp1.png',
      '/image/projects/chronyxapp2.png',
      '/image/projects/chronyxapp3.png',
      '/image/projects/chronyxapp4.png',
      '/image/projects/chronyxapp5.png',
    ],
    visitSite: null,
  },

  {
    id: 4,
    order: 4,
    title: 'Chronyx Admin Portal',
    type: 'Web System',
    shortDescription: 'An admin web portal for managing employee attendance and payroll. Features camera integration for QR scanning, automated payroll processing, employee management, and comprehensive dashboard analytics.',
    techStack: ['Next.js', 'phpMyAdmin', 'SQL'],
    images: [
      '/image/projects/chronyxwebsite.png',
      '/image/projects/chronyxwebsite1.png',
      '/image/projects/chronyxwebsite2.png',
      '/image/projects/chronyxwebsite3.png',
    ],
    visitSite: null,
  },

  {
    id: 5,
    order: 5,
    title: 'Library Management System',
    type: 'Web System',
    shortDescription: 'A modern library management system built with Django 4.2 and MySQL.',
    techStack: ['Django 4.2', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Python'],
    images: [
      '/image/projects/LMS 1.png',
      '/image/projects/LMS 2.png',
      '/image/projects/LMS 3.png',
      '/image/projects/LMS 4.png',
      '/image/projects/LMS 5.png',
      '/image/projects/LMS 6.png',
      '/image/projects/LMS 7.png',
    ],
    visitSite: null,
  },

  // ─── Add more projects below this line ───
  // {
  //   id: 6,
  //   order: 6,
  //   title: 'Project Title Here',
  //   type: 'UI/UX Design / Web Design / Frontend / etc.',
  //   shortDescription: 'Short description of the project.',
  //   techStack: ['Figma', 'React', ...],
  //   images: ['/image/projects/your-image.png'],
  //   visitSite: 'https://your-link.com' or null,
  // },
];

export const getSortedProjects = () => {
  return [...projectsData].sort((a, b) => a.order - b.order);
};