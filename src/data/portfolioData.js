// portfolioData.js
// All of the portfolio's text and links live in this one file.
// To change something on the website, edit this file instead of the components.

// Personal details shown in the Hero, About, Contact and Footer sections.
export const personal = {
  name: 'Vikram Bharath C',
  role: 'Java Full Stack Developer | Fresher',
  introduction:
    'I build responsive user interfaces with React.js and backend applications with Java, Spring Boot, REST APIs, and MySQL.',
  // The About section shows these paragraphs one after another.
  summaryParagraphs: [
    'I am a fresher Java Full Stack Developer with hands-on project experience using HTML, CSS, JavaScript, React.js, Java, Spring Boot, REST APIs, and MySQL.',
    'I enjoy building responsive user interfaces, developing backend applications, and connecting applications with databases. I have completed projects that helped me apply my learning to practical requirements.',
    'I am looking for an entry-level Java Full Stack Developer opportunity where I can contribute to real-world applications and continue improving my skills.',
  ],
  email: 'vikrambharath1234@gmail.com',
  phone: '+91 93602 62593',
  linkedin: 'https://linkedin.com/in/vikram-bharath',
  github: 'https://github.com/vikrambharath1234',
  location: 'Tamil Nadu, India',
}

// The Download Resume button points to this file.
// public/resume.pdf is a TEMPORARY dummy resume.
// Replace public/resume.pdf with your final resume later (keep the same file name),
// and the Download Resume button will automatically use the new file.
export const resumeFile = {
  url: '/resume.pdf',
  downloadName: 'Vikram-Bharath-Resume.pdf',
}

// Navigation links. Each href matches an id on a section (for example id="about").
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

// Skills grouped by category.
export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Bootstrap 5', 'Responsive Web Design'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
  },
]

// Projects. Every project card shows exactly two buttons:
// githubUrl (GitHub Repository) and liveUrl (Live Demo).
// backendUrl is optional and is shown only as a plain text link.
export const projects = [
  {
    id: 'resqhub',
    title: 'ResQHub: Emergency Help Hub',
    description:
      'A full-stack emergency assistance web application that provides an accessible interface for emergency-related interactions and saved-contact management. I built the frontend with React.js and the backend with Java Spring Boot and MySQL.',
    technologies: ['React.js', 'JavaScript', 'Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    githubUrl: 'https://github.com/vikrambharath1234/ResQHub',
    backendUrl: 'https://github.com/vikrambharath1234/ResQHub-backend',
    liveUrl: 'https://resqhub-hackathon.vercel.app',
    previewStyle: 'preview-resqhub',
    thumbnail: '/images/resqhub.png',
  },
  {
    id: 'guru-studio',
    title: 'Guru Studio: Business Website',
    description:
      "A business website I developed for my father's shop, applying my development skills to a practical business requirement. The frontend uses HTML, CSS, JavaScript, and React.js, and the backend uses Java and Spring Boot with MySQL.",
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Java', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/vikrambharath1234/GuruStudio-Frontend',
    backendUrl: 'https://github.com/vikrambharath1234/GuruStudio-Backend',
    liveUrl: 'https://guru-studio-frontend-1.vercel.app',
    previewStyle: 'preview-guru',
    thumbnail: '/images/guru-studio.png',
  },
  {
    id: 'webrush',
    title: 'WebRush: Your Life, In Receipts',
    description:
      'An interactive frontend project that I completed and showcased during the WebRush six-hour frontend hackathon. It presents everyday digital activities such as music, movies, purchases, and messages in a receipt-style experience.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    githubUrl: 'https://github.com/vikrambharath1234/Life-Receipt-',
    liveUrl: 'https://life-receipt123.vercel.app',
    previewStyle: 'preview-webrush',
    thumbnail: '/images/webrush.png',
  },
]

// Work experience (shown as a timeline).
export const experience = [
  {
    organization: 'IPCS Global Academy',
    role: 'Web Development Intern',
    duration: 'July 2025 – August 2025',
    location: 'Tamil Nadu, India',
    points: [
      'Developed 5+ responsive web pages using HTML5, CSS3, and Bootstrap 5.',
      'Created user interface layouts for different screen sizes.',
      'Refactored HTML, CSS, and JavaScript to improve code structure and maintainability.',
      'Gained practical experience in responsive web development and frontend problem-solving.',
    ],
  },
]

// Education.
export const education = {
  degree: 'Bachelor of Engineering (B.E.)',
  department: 'Electronics and Communication Engineering',
  college: 'VV College of Engineering',
  duration: 'June 2022 – May 2026',
  location: 'Tamil Nadu, India',
  coursework: ['Data Structures', 'Problem Solving', 'Computer Networks', 'Web Development'],
}

// Certifications. Each card shows its certificate image when an image path is given.
export const certifications = [
  {
    title: 'JavaScript, Java, and Spring Boot',
    issuer: 'Infosys Springboard',
    shortLabel: 'IS',
    image: '/certificates/infosys-springboot.png',
  },
  {
    title: 'Java for Beginners',
    issuer: 'Infosys Springboard',
    shortLabel: 'IS',
    image: '/certificates/infosys-java-beginners.png',
  },
  {
    title: 'JavaScript',
    issuer: 'Infosys Springboard',
    shortLabel: 'IS',
    image: '/certificates/infosys-javascript.png',
  },
  {
    title: 'Certificate of Participation',
    issuer: 'WebRush 6-Hour Frontend Hackathon',
    shortLabel: 'WR',
    image: '/certificates/webrush-hackathon.png',
  },
  {
    title: 'Java Badge',
    issuer: 'Oracle',
    shortLabel: 'OR',
  },
]

// Achievements (genuine ones only).
export const achievements = [
  'Completed and showcased the interactive "Your Life, In Receipts" project during the WebRush six-hour frontend hackathon.',
  'Completed ResQHub using React.js, Java Spring Boot, and MySQL.',
  "Developed Guru Studio for my father's shop, applying development skills to a practical business need.",
  'Expanded my learning from frontend development into Java backend development and database integration.',
]
