const content = [
  // --- AI & Engineering ---
  {
    type: 'Tip',
    category: 'AI Engineering',
    content: 'Use "System Prompts" to constrain LLM behavior before user input.',
    link: 'https://frontendmasters.com/learn/ai/' 
  },
  {
    type: 'Path',
    category: 'New Learning Path',
    content: 'Master the future of software development with the Coding with AI path.',
    link: 'https://frontendmasters.com/learn/ai/'
  },

  // --- Backend & Go ---
  {
    type: 'Tip',
    category: 'Go / Backend',
    content: 'In Go, use `defer` to clean up resources (files, locks) regardless of how a function exits.',
    link: 'https://frontendmasters.com/learn/backend/'
  },
  {
    type: 'Tip',
    category: 'Node.js',
    content: 'Block the event loop? Game over. Keep async operations non-blocking.',
    link: 'https://frontendmasters.com/learn/node-js/'
  },

  // --- DevOps ---
  {
    type: 'Tip',
    category: 'Cloud & DevOps',
    content: 'Multi-stage Docker builds can drastically reduce image size by discarding build deps.',
    link: 'https://frontendmasters.com/learn/devops/'
  },
  {
    type: 'Tip',
    category: 'Fullstack',
    content: 'Understanding HTTP headers (CORS, Cache-Control) is critical for fullstack security.',
    link: 'https://frontendmasters.com/learn/fullstack/'
  },
  
  // --- Classic Frontend ---
  {
    type: 'Tip',
    category: 'CSS',
    content: 'Use `display: grid; place-items: center;` to perfectly center content.',
    link: 'https://frontendmasters.com/learn/css/'
  },
  {
    type: 'Tip',
    category: 'JavaScript',
    content: 'Use `Array.from({ length: n }, (_, i) => i)` to create a range of numbers.',
    link: 'https://frontendmasters.com/learn/javascript/'
  }
];

export const getRandomContent = () => content[Math.floor(Math.random() * content.length)];
