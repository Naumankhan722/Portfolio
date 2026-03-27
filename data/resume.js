
export const resume = {
  summary: `
Dedicated Full Stack Software Engineer with 4+ years of expertise in building scalable, high-performance web applications using the MERN stack and Next.js.
Specialized in architecting secure RESTful APIs and dynamic user interfaces that drive user engagement and operational efficiency.
Proven track record of delivering production-ready systems in Agile environments, optimizing database performance, and ensuring robust code quality.
Adept at translating complex requirements into innovative technical solutions related to data visualization, automation tools, and AI-driven platforms.
  `.trim(),

  skills: {
    Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Vue.js'],
    Styling: ['SASS', 'Tailwind', 'MaterialUI', 'Bootstrap'],
    Backend: ['Node.js', 'Express.js', 'RESTful API Design'],
    Databases: ['MongoDB (Aggregations, Security, Encryption)', 'MySQL', 'PostgreSQL'],
    ToolsAndProcess: ['Git', 'CI/CD', 'Agile/Scrum', 'UI/UX Design', 'SEO Optimization'],
    CoreEngineering: ['Data Structures', 'Algorithms', 'Authorization & Authentication (JWT, OAuth2)'],
  },

  experience: [
    {
      role: 'MERN Stack Developer',
      company: 'Bacancy Technology',
      period: 'Feb 2024 – Present',
      location: 'Ahmedabad, India',
      achievements: [
        'Architected and developed modular, high-traffic web applications using the MERN stack, ensuring scalability, maintainability, and seamless user experiences.',
        'Designed and optimized complex RESTful APIs with Node.js to facilitate efficient communication between dynamic front-end interfaces and back-end services.',
        'Implemented advanced database security measures, including encryption and optimized MongoDB aggregation pipelines, to safeguard sensitive data and ensure compliance.',
        'Established automated testing workflows using Mocha and Sinon, achieving high code coverage and significantly reducing regression bugs in production.',
        'Built responsive, user-centric interfaces with React.js and advanced CSS frameworks, enhancing cross-device compatibility and modernizing legacy UIs.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'Data Prophets',
      period: 'Jan 2022 – Jan 2024',
      location: 'Ahmedabad, India',
      achievements: [
        'Designed and implemented high-fidelity responsive web interfaces, directly contributing to a 20% increase in user engagement metrics.',
        'Optimized web platforms for technical SEO and performance, resulting in a 30% growth in organic traffic and improved search engine rankings.',
        'Collaborated effectively within cross-functional Agile teams to streamline development processes, reducing project delivery timelines by 15%.',
        'Spearheaded the redesign of the company’s core digital presence using Next.js and Bootstrap, successfully showcasing AI-driven product portfolios to a global audience.',
      ],
    },
  ],

  projects: [
    {
      title: 'Hospital Management System',
      tech: ['React', 'Node.js', 'MongoDB', 'Authentication'],
      description: 'A comprehensive web-based system designed to manage hospital operations efficiently.',
      achievements: [
        'Engineered a scalable system supporting 10,000+ users with granular role-based access control and secure data management.',
        'Implemented advanced authentication using JWT to secure patient records and administrative functions.',
        'Automated appointment notification workflows, resulting in a 15% reduction in cancellations and improved operational efficiency.',
      ],
    },
    {
      title: 'Snap Launch (AI Image Platform)',
      tech: ['MERN Stack', 'Razorpay API', 'AI Integration'],
      description: 'A full-stack marketplace platform for generating, managing, and trading AI prompts and images.',
      achievements: [
        'Developed a robust platform facilitating seamless user interaction and content trading for AI-generated assets.',
        'Integrated Razorpay for secure multiple-currency payment processing and automated transaction reconciliation.',
        'Built a comprehensive admin dashboard for effective content moderation, user management, and platform analytics.',
      ],
    },
    {
      title: 'Penalty Optimizer',
      tech: ['React', 'D3.js', 'Node.js', 'AI/ML Logic'],
      description: 'A real-time data visualization tool for monitoring energy sources and optimizing performance.',
      achievements: [
        'Constructed a dynamic dashboard to visualize energy data in real-time, aiding decision-making processes.',
        'Incorporated AI/ML logic to refine power generation predictions, significantly improving the accuracy of penalty calculations.',
        'Optimized data processing pipelines to handle large datasets efficiently.',
      ],
    },
    {
      title: 'Indite.io – No-Code AI Chatbot Builder',
      tech: ['Nextjs', 'Node.js', 'WebSocket', 'RBAC'],
      description: 'A no-code platform empowering non-technical users to build and deploy custom AI chatbots.',
      achievements: [
        'Created an intuitive drag-and-drop interface for chatbot creation, lowering the barrier to entry for AI adoption.',
        'Implemented RBAC dashboards for secure user management and collaborative workflows.',
        'Engineered subscription management features to support scalable monetization strategies.',
        'Enabled real-time chat log monitoring and analytics to improve operational visibility.',
      ],
    },
    {
      title: 'ChatBase – Custom AI Agent Platform',
      tech: ['Nextjs', 'Python', 'Web Crawling', 'Third-party Integrations'],
      description: 'A customizable AI agent platform capable of training on diverse data sources including documents and websites.',
      achievements: [
        'Built a sophisticated platform trained on user-provided data from documents, text, and web links.',
        'Developed scalable web crawling and scraping pipelines to ingest and process external data for agent training.',
        'Enabled multi-platform deployment of AI agents to Telegram, WhatsApp, Shopify, and generic web embeds.',
      ],
    },
  ],

  education: [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Gujarat Technological University',
      location: 'Ahmedabad, India',
      year: '2022',
    },
  ],
}
