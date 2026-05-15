export const projectsData = [
  {
    id: 1,
    order: 1,
    title: 'Habify',
    type: 'App',
    shortDescription: 'A mobile habit tracking application built with React Native and Expo, developed as a school project. Habify helps users build and maintain positive habits through daily tracking, progress monitoring, and a gamification system that rewards consistency.',
    techStack: ['React Native, TypeScript, and Expo'],
    images: [
      '/image/projects/habify1.jpeg',
      '/image/projects/habify2.jpeg',
    ],
    visitSite: null,
  },

   {
    id: 2,
    order: 2,
    title: 'Library Management System',
    type: 'Web',
    shortDescription: 'A modern library management system built with Django 4.2 and MySQL.',
    techStack: ['Backend: Django 4.2, Database: MySQL (via XAMPP), Frontend: HTML, CSS, JavaScript, Font Awesome, Python'],
    images: [
      '/image/projects/habify1.jpeg',
      '/image/projects/habify2.jpeg',
    ],
    visitSite: null,
  },

   {
    id: 3,
    order: 3,
    title: 'PopFlix',
    type: 'Movie App',
    shortDescription: 'A modern library management system built with Django 4.2 and MySQL.',
    techStack: ['Backend: Django 4.2, Database: MySQL (via XAMPP), Frontend: HTML, CSS, JavaScript, Font Awesome, Python'],
    images: [
      '/image/projects/habify1.jpeg',
      '/image/projects/habify2.jpeg',
    ],
    visitSite: null,
  },


  // ─── Add Aizel's other projects below this line ───
  // {
  //   id: 2,
  //   order: 2,
  //   title: 'Project Title Here',
  //   type: 'UI/UX Design / Web Design / Frontend / etc.',
  //   shortDescription: 'Short description of the project.',
  //   techStack: ['Figma', 'React', ...],
  //   images: ['/projects/your-image.png'],
  //   visitSite: 'https://your-link.com' or null,
  // },













];

export const getSortedProjects = () => {
  return [...projectsData].sort((a, b) => a.order - b.order);
};