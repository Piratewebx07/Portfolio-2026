// Mock data for portfolio

export const skills = [
  { name: 'Game Design', level: 95, icon: 'Gamepad2' },
  { name: 'Level Design', level: 90, icon: 'Map' },
  { name: 'UI/UX Design', level: 85, icon: 'Layout' },
  { name: '2D Asset Design', level: 80, icon: 'Palette' },
  { name: 'Unity', level: 85, icon: 'Box' },
  { name: 'Problem Solving', level: 92, icon: 'Lightbulb' }
];

export const software = [
  { 
    name: 'Unity 3D', 
    logo: 'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/g6yx0l04_unity.png'
  },
  { 
    name: 'Unreal Engine', 
    logo: 'https://cdn2.unrealengine.com/ue-logo-stacked-unreal-engine-w-677x545-fac11de0943f.png'
  },
  { 
    name: 'Procreate', 
    logo: 'https://procreate.com/img/procreate-icon.png'
  },
  { 
    name: 'Figma', 
    logo: 'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/1o6h0kd3_figma.jpg'
  }
];

export const projects = [
  {
    id: 1,
    level: 1,
    title: 'Kala Kulfi',
    subtitle: 'Indian Horror Game',
    year: '2022',
    description: 'KALA KULFI was a random 2AM idea, when I realised there are very less horror games made on "Indian Genre".',
    role: 'Lead Game Designer and Level Designer',
    challenges: 'Game looked less attractive as it was a low poly game.',
    solution: 'Redesigned the game into AA style Game and improved UI, mechanics and sounds.',
    technologies: ['Unity', 'C#', 'Blender', 'Photoshop'],
    images: [
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/x4t9jyhw_kk9.jpeg',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/ryr8sj3v_kknew.jpeg',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/4sqd7pfz_kknew2.jpeg',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/a5wxb3lr_kknrew.jpeg'
    ],
    gameUrl: 'https://piratewebx.itch.io/kala-kulfi-remastered',
    status: 'completed'
  },
  {
    id: 2,
    level: 2,
    title: 'Jumpp Finvasia',
    subtitle: 'In-App Rewards Game',
    year: '2025',
    description: 'An in-app game for Jumpp in collaboration with Yes Bank.',
    role: 'Lead Game Design Intern at Centrelocus PVT. LTD.',
    challenges: 'Moodboard understanding and clients not sure what they wanted.',
    solution: 'Provided multiple iterations aligned with the mood board and many choices.',
    technologies: ['Unity', 'C#', 'UI Design', 'Client Management'],
    images: [
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/fst9o1r3_Frame%208.png',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/ca72yvn2_Frame%209.png',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/kdhscr0q_Frame%2010.png',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/jfdltr1a_Frame%2011.png',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/9x2m1hvz_Frame%2012.png'
    ],
    status: 'completed'
  },
  {
    id: 3,
    level: 3,
    title: 'Switch IT',
    subtitle: 'Co-op Gravity Puzzle Game',
    year: '2024',
    description: 'A game developed within 24hrs for a Game Jam, themed "Gravitation", "If I could do it again" and "Puzzles".',
    role: 'Game Designer, Level Designer and 2D Assets Designer',
    challenges: 'The theme was indeed challenging, which made us brainstorm like crazy.',
    solution: 'Decided on mechanism where both players will have inverse gravity switch but it controls gravity for both players. Added multiple puzzles to make it challenging.',
    technologies: ['Unity', '2D Design', 'Rapid Prototyping', 'Game Jam'],
    images: [
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/kgpz32d4_switch%20it1.jpeg',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/7ah7gpr3_switch%20it2.jpeg',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/npt0v0dv_WhatsApp%20Image%202026-03-20%20at%207.23.42%20PM.jpeg',
      'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/lloduj95_WhatsApp%20Image%202026-03-20%20at%207.24.12%20PM.jpeg'
    ],
    gameUrl: 'https://piratewebx.itch.io/switchit',
    status: 'completed'
  },
  {
    id: 4,
    level: 4,
    title: 'Lab Masters',
    subtitle: 'Educational Science Game',
    year: '2025',
    description: 'A personal college project, an educational themed game which simulated practicals from NCERT 9-10.',
    role: 'Game Designer',
    challenges: 'Simulating the exact experiment was a difficult task.',
    solution: 'Revisiting our old textbooks helped me create 3 levels for the game.',
    technologies: ['Unity', 'Educational Design', 'Physics Simulation', '3D Modeling'],
    images: [
      'https://placehold.co/800x600/1a1a2e/ffff00?text=Lab+Masters+1',
      'https://placehold.co/800x600/1a1a2e/ffff00?text=Lab+Masters+2'
    ],
    gameUrl: 'https://piratewebx.itch.io/labmaster-a-lab-game',
    status: 'completed'
  },
  {
    id: 5,
    level: 5,
    title: 'LILA Games Documentation',
    subtitle: 'Assignment Report & Task Execution',
    year: '2024',
    description: 'This is an Assignment Report for LILA Games, written and executed for the tasks given.',
    role: 'Game Designer',
    challenges: 'Comprehensive documentation of game design tasks and execution process.',
    solution: 'Created detailed assignment report covering all aspects of the project requirements and implementation.',
    technologies: ['Game Design', 'Documentation', 'Task Analysis', 'Project Management'],
    images: [
      'https://placehold.co/800x600/1a1a2e/00d9ff?text=LILA+Games+Documentation'
    ],
    documentUrl: 'https://docs.google.com/document/d/1D2Kpsun2aBbLToLU5OT2yiSBFOCcOe2KrNoQ8RhBYJ8/edit?tab=t.0',
    status: 'completed'
  },
  {
    id: 6,
    level: 6,
    title: '8 Ball Pool Breakdown',
    subtitle: 'Game Analysis & Documentation',
    year: '2024',
    description: 'A detailed breakdown of the famous multiplayer real money game 8 Ball Pool by Miniclip, analyzing game mechanics, monetization, and player engagement strategies.',
    role: 'Game Analyst & Designer',
    challenges: 'Breaking down a complex multiplayer system and understanding the monetization mechanics.',
    solution: 'Created comprehensive documentation analyzing game loops, mechanics, and business model.',
    technologies: ['Game Analysis', 'Documentation', 'Multiplayer Systems', 'Monetization Design'],
    images: [
      'https://placehold.co/800x600/1a1a2e/ff6b00?text=8+Ball+Pool+Analysis'
    ],
    pdfUrl: 'https://drive.google.com/file/d/1ROf0RlYeBUODJyEYQTgWO9DXBT41X-ci/view',
    status: 'completed'
  }
];

export const loreLog = {
  title: 'The Game Designer',
  intro: 'Welcome, Player!',
  description: `I am a GAME DESIGNER exploring how interaction, narrative, and systems shape player experience. I design engaging gameplay through iteration, player feedback, and thoughtful mechanics ranging from puzzle-based to narrative-driven concepts. I aim to create meaningful experiences that go beyond entertainment.`,
  profileImage: 'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/21q8c9t5_WhatsApp_Image_2026-03-21_at_11.44.27_AM-removebg-preview.png',
  stats: {
    yearsExperience: '1+',
    projectsCompleted: '10+',
    gameJams: '5+',
    dedication: '100%'
  }
};

export const credits = {
  name: 'Pratham Warambhey',
  title: 'Game Designer & Level Designer',
  email: 'prathamwarambhey@gmail.com',
  phone: '+91 96736 07860',
  social: [
    { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
    { platform: 'Instagram', url: '#', icon: 'Instagram' },
    { platform: 'GitHub', url: '#', icon: 'Github' },
    { platform: 'Twitter', url: '#', icon: 'Twitter' }
  ],
  resumeUrl: '/resume.pdf'
};

export const certificates = [
  {
    id: 1,
    title: 'Pixelverse - Runner Up',
    issuer: 'Seamedu & CMR University',
    date: 'November 2024',
    description: 'Runner Up in Showcase Event',
    image: 'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/4bcp2ztp_WhatsApp%20Image%202024-12-12%20at%2009.47.22_5946b40b.jpg'
  },
  {
    id: 2,
    title: 'Best 3D Game Award',
    issuer: 'Seamedu Awards 2024',
    date: 'April 2024',
    description: 'Certificate of Achievement for Best 3D Game',
    image: 'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/2fisqaw8_WhatsApp%20Image%202024-12-12%20at%2009.48.11_a0d83dcd.jpg'
  },
  {
    id: 3,
    title: 'Game Design Internship',
    issuer: 'eSrot Consulting Labs Pvt. Ltd.',
    date: 'July 2025',
    description: '6 Months Internship in Game Design',
    image: 'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/ti98xnsr_Centrelocus.png'
  },
  {
    id: 4,
    title: 'Unreal Engine 5 C++',
    issuer: 'Udemy',
    date: 'May 2024',
    description: 'The Ultimate Game Developer Course',
    image: 'https://customer-assets.emergentagent.com/job_portfolio-quest-hub/artifacts/p99c709k_UdemyPratham.png'
  }
];