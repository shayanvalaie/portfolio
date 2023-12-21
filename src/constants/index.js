import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  netflix,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: web,
  },
  {
    title: 'Automation',
    icon: mobile,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'SEO',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Gas POS',

    iconBg: '#383E56',
    date: 'Sept 2022 - Present',
    points: [
      "Assumed ownership and led the strategic development of the company's web portal, implementing user-friendly design, robust functionality, and efficient security measures.",
      'Engineered validation and compression algorithms to enhance the efficiency and reliability of data processing within the enterprise software solution.',
      'Developed APIs to augment software functionality and facilitate seamless data interchange between systems',
      'Managed, optimized, and monitored cloud computing resources on Azure to ensure high availability, scalability, and cost-efficiency.',
    ],
  },
  {
    title: 'React Engineer',
    company_name: "BRU'D Rewards",

    iconBg: '#E6DEDD',
    date: 'Feb 2021 - Mar 2023',
    points: [
      'Engineered an intuitive user-friendly interface for a rewards application tailored for small to medium-sized businesses.',
      'Seamlessly integrated multiple APIs, enhancing backend functionality and broadening application capabilities.',
      'Conducted thorough end-to-end quality assurance testing to ensure software reliability and performance.',
    ],
  },
  {
    title: 'Full-Stack Engineer',
    company_name: 'Hustle Striking',

    iconBg: '#383E56',
    date: 'Jan 2020 - Jan 2021',
    points: [
      'Designed, developed, and maintained both the front-end and back-end components of the e-commerce application, ensuring seamless integration and optimized performance for an enhanced user experience.',
      "Managed the company's cloud computing system, overseeing deployment, scalability, and security of the e-commerce application, ensuring optimal uptime and responsiveness.",
      'Regularly reviewed and analyzed the e-commerce application for areas of enhancement. Implemented updates and new features based on feedback, emerging technologies, and market trends to keep the platform competitive and user-friendly.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Netflix Clone',
    description:
      'Developed a Netflix clone application featuring a dynamic user interface by leveraging React.js and modern web technologies.',
    tags: [],
    image: netflix,
    source_code_link: 'https://netflix-clone-9d54e.web.app/',
  },
  // {
  //   name: 'Job IT',
  //   description:
  //     'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: 'https://github.com/',
  // },
  // {
  //   name: 'Trip Guide',
  //   description:
  //     'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: 'https://github.com/',
  // },
];

export { services, technologies, experiences, testimonials, projects };
