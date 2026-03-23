// Mock data for portfolio

export const skills = [
  { name: 'Game Design', level: 95, icon: 'Gamepad2' },
  { name: 'Level Design', level: 90, icon: 'Map' },
  { name: 'UI/UX Design', level: 85, icon: 'Layout' },
  { name: '2D Asset Design', level: 80, icon: 'Palette' },
  { name: 'Unity', level: 85, icon: 'Box' },
  { name: 'Problem Solving', level: 92, icon: 'Lightbulb' }
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
    status: 'completed'
  },
  {
    id: 2,
    level: 2,
    title: 'Jumpp Finvasia',
    subtitle: 'In-App Rewards Game',
    year: '2023',
    description: 'An in-app game for Jumpp in collaboration with Yes Bank.',
    role: 'Lead Game Design Intern at Centrelocus PVT. LTD.',
    challenges: 'Moodboard understanding and clients not sure what they wanted.',
    solution: 'Provided multiple iterations aligned with the mood board and many choices.',
    technologies: ['Unity', 'C#', 'UI Design', 'Client Management'],
    images: [
      'https://placehold.co/800x600/1a1a2e/00f0ff?text=Jumpp+Game+1',
      'https://placehold.co/800x600/1a1a2e/ff006e?text=Jumpp+Game+2'
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
      'https://placehold.co/800x600/1a1a2e/39ff14?text=Switch+IT+1',
      'https://placehold.co/800x600/1a1a2e/39ff14?text=Switch+IT+2'
    ],
    status: 'completed'
  },
  {
    id: 4,
    level: 4,
    title: 'Lab Masters',
    subtitle: 'Educational Science Game',
    year: '2023',
    description: 'A personal college project, an educational themed game which simulated practicals from NCERT 9-10.',
    role: 'Game Designer',
    challenges: 'Simulating the exact experiment was a difficult task.',
    solution: 'Revisiting our old textbooks helped me create 3 levels for the game.',
    technologies: ['Unity', 'Educational Design', 'Physics Simulation', '3D Modeling'],
    images: [
      'https://placehold.co/800x600/1a1a2e/ffff00?text=Lab+Masters+1',
      'https://placehold.co/800x600/1a1a2e/ffff00?text=Lab+Masters+2'
    ],
    status: 'completed'
  }
];

export const loreLog = {
  title: 'The Game Designer',
  intro: 'Welcome, Player!',
  description: `I'm a passionate game designer who believes in creating immersive experiences that resonate with players. My journey started with a random 2AM idea about Indian horror games and has evolved into a quest to design meaningful, engaging gameplay.

From leading AA-style horror projects to creating educational simulations, I thrive on turning creative challenges into innovative solutions. Whether it's a 24-hour game jam or a months-long development cycle, I bring dedication, creativity, and a player-first mindset to every project.

My design philosophy: Every game should tell a story, every mechanic should serve a purpose, and every challenge should inspire innovation.`,
  stats: {
    gamesShipped: '4+',
    yearsExperience: '3+',
    gameJams: '5+',
    happyClients: '100%'
  }
};

export const credits = {
  name: 'Your Name',
  title: 'Game Designer & Level Designer',
  email: 'your.email@example.com',
  phone: '+91 XXXXX XXXXX',
  social: [
    { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
    { platform: 'GitHub', url: '#', icon: 'Github' },
    { platform: 'ArtStation', url: '#', icon: 'Palette' },
    { platform: 'Twitter', url: '#', icon: 'Twitter' }
  ],
  resumeUrl: '/resume.pdf'
};