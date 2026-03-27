// Portfolio data - Edit .env file to customize your portfolio content
// All personal info, links, and URLs are driven by environment variables

export const personalInfo = {
  name: import.meta.env.VITE_NAME || "C Venket Siranjeevi",
  firstName: import.meta.env.VITE_FIRST_NAME || "Venket",
  lastName: import.meta.env.VITE_LAST_NAME || "Siranjeevi",
  title: import.meta.env.VITE_TITLE || "Full-Stack Web Developer & Web3 Enthusiast",
  email: import.meta.env.VITE_EMAIL || "venketsiranjeevi.752f@gmail.com",
  phone: import.meta.env.VITE_PHONE || "+918247023479",
  location: import.meta.env.VITE_LOCATION || "Punjab, India",
  tagline: import.meta.env.VITE_TAGLINE || "I build scalable web applications and explore Web3 ecosystems",
  bio: [
    "I'm C Venket Siranjeevi, a Computer Science student at Lovely Professional University passionate about building scalable and user-focused digital products. My interests span modern web technologies, Web3 ecosystems, and backend engineering.",
    "I specialize in the MERN stack and have hands-on experience with Redis caching, JWT authentication, WebSockets, and payment gateway integrations. I've also built multi-chain HD wallets supporting Ethereum, Bitcoin, and Solana.",
    "I believe in continuous learning, problem-solving, and crafting solutions that make a real impact!",
  ],
  social: {
    github: import.meta.env.VITE_GITHUB || "https://github.com/Siranjeevi123",
    linkedin: import.meta.env.VITE_LINKEDIN || "https://www.linkedin.com/in/venket-siranjeevi/",
    twitter: import.meta.env.VITE_TWITTER || "",
    instagram: import.meta.env.VITE_INSTAGRAM || "",
    email: `mailto:${import.meta.env.VITE_EMAIL || "venketsiranjeevi.752f@gmail.com"}`,
  },
  available: import.meta.env.VITE_AVAILABLE !== "false",
  resumeUrl: import.meta.env.VITE_RESUME_URL || "#",
  profilePhoto: import.meta.env.VITE_PROFILE_PHOTO || "",
};

export const skills = {
  languages: [
    { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  frontend: [
    { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/white" },
    { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/white" },
    { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/white" },
    { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  ],
  databases: [
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
  ],
  web3: [
    { name: "Ethers.js", icon: "https://cdn.simpleicons.org/ethereum/3C3C3D" },
    { name: "Solana Web3.js", icon: "https://cdn.simpleicons.org/solana/9945FF" },
    { name: "bitcoinjs-lib", icon: "https://cdn.simpleicons.org/bitcoin/F7931A" },
    { name: "HD Wallets", icon: "https://cdn.simpleicons.org/bitcoin/F7931A" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
    { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash/white" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325" },
  ],
};

export const codingProfiles = {
  note: "Update usernames in .env file",
  platforms: [
    {
      key: "github",
      label: "GitHub",
      username: import.meta.env.VITE_GITHUB_USERNAME || "Siranjeevi123",
      profileUrl: `https://github.com/${import.meta.env.VITE_GITHUB_USERNAME || "Siranjeevi123"}`,
      totalSolved: 0,
      metricLabel: "Public Repos",
      metricValue: "0",
      activity: [2, 4, 1, 3, 5, 6, 2, 1, 4, 5, 3, 2, 4, 7, 5, 2, 1, 3, 6, 4, 2, 5, 3, 6],
    },
    {
      key: "leetcode",
      label: "LeetCode",
      username: import.meta.env.VITE_LEETCODE_USERNAME || "",
      profileUrl: `https://leetcode.com/${import.meta.env.VITE_LEETCODE_USERNAME || ""}`,
      totalSolved: 400,
      metricLabel: "Global Rank",
      metricValue: "Top 5%",
      activity: [1, 2, 3, 4, 2, 1, 3, 5, 4, 3, 2, 2, 4, 6, 5, 3, 2, 1, 4, 5, 6, 4, 3, 2],
    },
    {
      key: "codeforces",
      label: "CodeForces",
      username: import.meta.env.VITE_CODEFORCES_USERNAME || "",
      profileUrl: `https://codeforces.com/profile/${import.meta.env.VITE_CODEFORCES_USERNAME || ""}`,
      totalSolved: 0,
      metricLabel: "Rating",
      metricValue: "--",
      activity: [0, 1, 2, 2, 3, 1, 2, 4, 5, 3, 2, 1, 3, 4, 5, 4, 2, 1, 2, 3, 4, 2, 1, 2],
    },
    {
      key: "gfg",
      label: "GeeksforGeeks",
      username: import.meta.env.VITE_GFG_USERNAME || "",
      profileUrl: `https://www.geeksforgeeks.org/user/${import.meta.env.VITE_GFG_USERNAME || ""}`,
      totalSolved: 200,
      metricLabel: "Coding Score",
      metricValue: "670",
      activity: [1, 1, 2, 3, 2, 1, 2, 3, 4, 2, 1, 2, 4, 5, 3, 2, 1, 3, 4, 2, 2, 3, 1, 2],
    },
  ],
};

// Flatten all skills for the marquee
export const allSkills = [
  ...skills.languages,
  ...skills.frontend,
  ...skills.backend,
  ...skills.databases,
  ...skills.web3,
  ...skills.tools,
];

export const projects = [
  {
    id: 1,
    slug: "codearena",
    title: "CodeArena",
    category: "AI PLATFORM",
    quarter: "Aug 2025 – Jan 2025",
    description:
      "An AI-powered coding platform with queued execution pipeline for secure, fault-tolerant multi-language code runs, handling 1,000+ daily submissions.",
    longDescription:
      "CodeArena is an AI-powered coding platform that integrates Judge0 through a queued execution pipeline for secure, fault-tolerant multi-language code runs. It reliably handles 1,000+ daily submissions with custom test cases. The platform uses Redis for sessions, problem metadata, and attempt history, improving performance by ~40% and significantly reducing database load under traffic.",
    tags: [
      { name: "EXPRESS.JS", icon: "https://cdn.simpleicons.org/express/white" },
      { name: "NODE.JS", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "MONGODB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "REDIS", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "WEBSOCKETS", icon: "https://cdn.simpleicons.org/socketdotio/white" },
    ],
    features: [
      {
        title: "Judge0 Execution Pipeline",
        description:
          "Integrated Judge0 through a queued execution pipeline for secure, fault-tolerant multi-language code runs with custom test cases.",
      },
      {
        title: "Redis Caching Architecture",
        description:
          "Architected Redis for sessions, problem metadata, and attempt history, improving performance by ~40% and reducing database load.",
      },
      {
        title: "JWT Authentication & REST APIs",
        description:
          "Developed 10+ REST APIs with JWT authentication and resolved race conditions for concurrency safety during simultaneous edits.",
      },
      {
        title: "Real-time WebSockets",
        description:
          "WebSocket-based real-time updates ensuring state consistency during simultaneous edits and judge responses.",
      },
    ],
    techStack: [
      { name: "Express.js", url: "https://expressjs.com", description: "Backend framework for REST API development" },
      { name: "Node.js", url: "https://nodejs.org", description: "Server-side JavaScript runtime" },
      { name: "MongoDB", url: "https://mongodb.com", description: "NoSQL database for problem and user data" },
      { name: "Redis", url: "https://redis.io", description: "In-memory caching for sessions and metadata" },
      { name: "Judge0", url: "https://judge0.com", description: "Code execution engine for multi-language support" },
      { name: "Cloudinary", url: "https://cloudinary.com", description: "Cloud-based image and media management" },
      { name: "WebSockets", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", description: "Real-time bidirectional communication" },
    ],
    challenges: [
      {
        title: "Queued Execution Pipeline",
        description:
          "Building a fault-tolerant queued execution system that reliably handles 1,000+ daily code submissions across multiple programming languages.",
      },
      {
        title: "Race Condition Resolution",
        description:
          "Resolving race conditions to ensure concurrency safety and state consistency during simultaneous edits and judge responses.",
      },
      {
        title: "Performance Optimization",
        description:
          "Architecting Redis caching strategies that improved performance by ~40% while significantly reducing database load under traffic.",
      },
    ],
    outcome:
      "Delivered a robust coding platform handling 1,000+ daily submissions with ~40% performance improvement through Redis caching and fault-tolerant execution pipeline.",
    screenshots: [],
    link: import.meta.env.VITE_PROJECT_CODEARENA_LIVE || "#",
    github: import.meta.env.VITE_PROJECT_CODEARENA_GITHUB || "#",
    image: "",
  },
  {
    id: 2,
    slug: "crypto-wallet",
    title: "Crypto Wallet",
    category: "WEB3",
    quarter: "Nov 2025 – Jan 2026",
    description:
      "A Web3 multi-chain HD wallet supporting Ethereum, Bitcoin, and Solana with real-time balance tracking and transaction capabilities.",
    longDescription:
      "Crypto Wallet is a client-side multi-chain cryptocurrency wallet supporting Ethereum, Bitcoin, and Solana with real-time balance tracking and transaction capabilities. It implements BIP39/BIP32/BIP44 HD wallet derivation for secure, industry-standard key generation from a single mnemonic seed phrase. The wallet integrates blockchain RPC endpoints via GetBlock API for fetching balances, sending transactions, and interacting with mainnet networks.",
    tags: [
      { name: "REACT", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "VITE", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "ETHERS.JS", icon: "https://cdn.simpleicons.org/ethereum/3C3C3D" },
      { name: "SOLANA", icon: "https://cdn.simpleicons.org/solana/9945FF" },
      { name: "BITCOIN", icon: "https://cdn.simpleicons.org/bitcoin/F7931A" },
    ],
    features: [
      {
        title: "Multi-Chain Support",
        description:
          "Built a client-side wallet supporting Ethereum, Bitcoin, and Solana with real-time balance tracking and transaction capabilities.",
      },
      {
        title: "HD Wallet Derivation",
        description:
          "Implemented BIP39/BIP32/BIP44 HD wallet derivation for secure, industry-standard key generation from a single mnemonic seed phrase.",
      },
      {
        title: "Blockchain RPC Integration",
        description:
          "Integrated blockchain RPC endpoints via GetBlock API for fetching balances, sending transactions, and interacting with mainnet networks.",
      },
      {
        title: "Transaction Signing & Broadcasting",
        description:
          "Developed transaction signing and broadcasting for all three chains using ethers.js, @solana/web3.js, and bitcoinjs-lib.",
      },
    ],
    techStack: [
      { name: "React", url: "https://react.dev", description: "Frontend library for building the wallet UI" },
      { name: "Vite", url: "https://vitejs.dev", description: "Next-generation frontend build tool" },
      { name: "ethers.js", url: "https://docs.ethers.org", description: "Ethereum blockchain interaction library" },
      { name: "@solana/web3.js", url: "https://solana-labs.github.io/solana-web3.js/", description: "Solana blockchain SDK" },
      { name: "bitcoinjs-lib", url: "https://github.com/bitcoinjs/bitcoinjs-lib", description: "Bitcoin protocol library" },
      { name: "BIP39/BIP32", url: "https://github.com/bitcoin/bips", description: "Mnemonic and HD wallet standards" },
      { name: "GetBlock RPC API", url: "https://getblock.io", description: "Blockchain node access provider" },
    ],
    challenges: [
      {
        title: "Multi-Chain Key Derivation",
        description:
          "Implementing BIP39/BIP32/BIP44 standards consistently across Ethereum, Bitcoin, and Solana from a single mnemonic seed phrase.",
      },
      {
        title: "Cross-Chain Transaction Handling",
        description:
          "Building unified transaction signing and broadcasting across three fundamentally different blockchain architectures.",
      },
    ],
    outcome:
      "Successfully built a client-side multi-chain HD wallet with secure key derivation, real-time balance tracking, and transaction capabilities across Ethereum, Bitcoin, and Solana.",
    screenshots: [],
    link: import.meta.env.VITE_PROJECT_CRYPTOWALLET_LIVE || "#",
    github: import.meta.env.VITE_PROJECT_CRYPTOWALLET_GITHUB || "#",
    image: "",
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Venket delivered exceptional work on our project. His attention to detail and technical expertise in MERN stack made the entire process seamless.",
    name: "Tech Mentor",
    title: "Senior Developer • Tech Company",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mentor1",
  },
  {
    id: 2,
    quote: "Working with Venket was a fantastic experience. He understood our requirements and turned them into reality with clean, efficient code.",
    name: "Project Lead",
    title: "Team Lead • Digital Agency",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lead1",
  },
  {
    id: 3,
    quote: "Venket's full-stack and Web3 skills are impressive. He built our platform features from scratch and they perform flawlessly.",
    name: "Startup Founder",
    title: "Founder • Web3 Startup",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Founder1",
  },
  {
    id: 4,
    quote: "His ability to solve complex problems involving Redis caching, WebSockets, and payment integrations is remarkable. Highly recommended.",
    name: "Engineering Manager",
    title: "Engineering Lead • Fintech Co",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manager1",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Cloud Computing",
    issuer: "NPTEL",
    period: "Aug' 2025 – Oct' 2025",
    pdfUrl: import.meta.env.VITE_CERT_CLOUD_COMPUTING || "/certificates/cloud-computing-nptel.pdf",
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "DSA In C++ Decode C++ Batch",
    issuer: "Decode",
    period: "Jul' 2024 – Feb' 2025",
    pdfUrl: import.meta.env.VITE_CERT_DSA_CPP || "/certificates/dsa-cpp-decode.pdf",
    color: "#8B5CF6",
  },
  {
    id: 3,
    title: "Web Development Certificate",
    issuer: "freeCodeCamp",
    period: "Aug' 2023 – Jan' 2024",
    pdfUrl: import.meta.env.VITE_CERT_FREECODECAMP || "/certificates/web-dev-freecodecamp.pdf",
    color: "#10B981",
  },
  {
    id: 4,
    title: "Web Development Internship",
    issuer: "Orbosis Global Pvt. Ltd.",
    period: "Nov' 2025 – Jan' 2026",
    pdfUrl: import.meta.env.VITE_CERT_ORBOSIS || "#",
    color: "#F59E0B",
  },
];

export const experience = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Orbosis Global Pvt. Ltd.",
    period: "Nov' 2025 – Jan' 2026",
    description:
      "Spearheaded the development of a full-stack Progressive Web App (PWA) using MERN, achieving 100% code reusability across web and mobile platforms. Engineered Redis caching strategies reducing API latency by 30% (~200ms improvement). Integrated Razorpay Payment Gateway with automated webhooks, reducing manual verification time by 40%.",
  },
];

export const achievements = [
  {
    id: 1,
    title: "LeetCode - Top 5% Globally",
    description: "400+ problems solved (150+ Medium/Hard) | Strong in DP, Graphs, Trees",
    period: "Jan' 2026",
    link: "https://leetcode.com/",
  },
  {
    id: 2,
    title: "CodeForces - Global Rounds",
    description: "Competed in global rounds, solved complex algorithmic challenges under strict time limits",
    period: "Dec' 2025",
    link: "https://codeforces.com/",
  },
  {
    id: 3,
    title: "GeeksforGeeks - Coding Score 670",
    description: "200+ problems solved | DSA-focused",
    period: "Dec' 2025",
    link: "https://www.geeksforgeeks.org/",
  },
];

export const education = [
  {
    id: 1,
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    cgpa: "7.0",
    period: "Aug' 2023 – Present",
    location: "Punjab, India",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
];

export const moreLinks = {
  cards: [
    {
      name: "Guestbook",
      description: "Let me know you were here",
      href: "#contact",
      route: "/guestbook",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
    },
    {
      name: "Bucket List",
      description: "Things to do at least once in my life",
      href: "#",
      route: "/bucket-list",
      image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=250&fit=crop",
    },
    {
      name: "My Picks",
      description: "Movies, series, anime & books I recommend",
      href: "#",
      route: "/recommendations",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop",
    },
  ],
  items: [
    {
      name: "Links",
      description: "All my links are here",
      href: "#",
      icon: "link",
    },
    {
      name: "Uses",
      description: "A peek into my digital...",
      href: "#skills",
      icon: "monitor",
    },
    {
      name: "Attribution",
      description: "Journey to create this site",
      href: "#",
      icon: "heart",
    },
  ],
};
