export const projectsData = [
  {
    id: 1,
    order: 1,
    title: 'Personal Portfolio Website',
    type: 'UI/UX & Frontend',
    shortDescription: 'A beautifully crafted personal portfolio website showcasing my design sensibility and frontend skills, featuring smooth animations, glassmorphism effects, and a feminine aesthetic with purple-pink gradients.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    images: [
      '/projects/portfolio1.png',
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