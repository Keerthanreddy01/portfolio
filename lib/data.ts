import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'keerthanreddy1706@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Keerthan, I am reaching out to you because...',

    linkedinProfile: 'https://www.linkedin.com/in/keerthan-reddy-71a5b5370',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Keerthanreddy01' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/keerthan-reddy-71a5b5370' },
    { name: 'instagram', url: 'https://www.instagram.com/_keerthan_176' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
    ],
    mobile: [
        {
            name: 'React Native',
            icon: '/logo/react.png',
        },
        {
            name: 'Flutter',
            icon: '/logo/flutter.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'FastAPI',
            icon: '/logo/fastapi.svg',
        },
    ],
    ai: [
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'TensorFlow',
            icon: '/logo/tensorflow.svg',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.svg',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'CollabSphere',
        slug: 'collabsphere',
        sourceCode: 'https://github.com/Keerthanreddy01/Collabsphere',
        year: 2025,
        description: `
      CollabSphere is an elite incubator platform for developers — sync your GitHub arsenal to discover the perfect squad and ship high-impact projects without friction. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🔍 Developer Discovery: Browse and filter developers by skills, GitHub activity, and project type</li>
        <li>⚡ GitHub Integration: Live GitHub API sync to showcase real contributions and repositories</li>
        <li>🤝 Squad Formation: Request to join projects or invite developers to collaborate</li>
        <li>📱 Cross-Platform: Fully responsive React Native app with smooth Expo navigation</li>
        <li>🔔 Real-time Notifications: Instant alerts for collaboration requests and updates</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Built with React Native Expo for a native-feel cross-platform experience</li>
        <li>Integrated GitHub REST API for live developer stats and repository data</li>
        <li>TypeScript throughout for type safety and scalability</li>
        <li>Implemented Reanimated 3 for 60fps smooth UI transitions</li>
      </ul>
      `,
        role: `
      Full-Stack Developer & Architect <br/>
      Owned the entire product from idea to deployment:
      <ul>
        <li>📱 Mobile: Built the complete React Native Expo app with custom navigation</li>
        <li>🔗 API Integration: Implemented GitHub API sync for real-time developer profiles</li>
        <li>🎨 UI/UX: Designed and coded all screens with premium animations</li>
        <li>🏗️ Architecture: Designed scalable state management and data flow</li>
        <li>🚀 Deployment: Published to app stores and managed CI/CD pipeline</li>
      </ul>
      `,
        techStack: [
            'React Native',
            'Expo',
            'TypeScript',
            'GitHub API',
            'Node.js',
            'Reanimated 3',
        ],
        thumbnail: '/projects/thumbnail/collabsphere.webp',
        longThumbnail: '/projects/long/collabsphere.webp',
        images: [
            '/projects/images/collabsphere-1.webp',
        ],
    },
    {
        title: 'Vaani AI',
        slug: 'vaani',
        sourceCode: 'https://github.com/Keerthanreddy01/Vaani',
        year: 2025,
        description: `
      Vaani is a Neural Voice Intelligence platform bridging linguistic gaps for 13+ Indian dialects with context-aware, ultra-low-latency AI voice understanding. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🎙️ Multi-Dialect Support: Understands and processes 13+ Indian regional dialects</li>
        <li>🧠 Context-Aware AI: Claude 3.5-powered contextual understanding for natural conversations</li>
        <li>⚡ Ultra Low Latency: Optimized inference pipeline for near real-time voice responses</li>
        <li>🌐 Language Bridging: Translates and interprets across language barriers seamlessly</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Built on FastAPI for a high-performance async backend</li>
        <li>Integrated Claude 3.5 Sonnet for state-of-the-art language understanding</li>
        <li>Custom neural pipeline optimized for low-latency Indian language processing</li>
        <li>Python-based audio processing and speech-to-text integration</li>
      </ul>
      `,
        role: `
      Solo Developer & AI Engineer <br/>
      <ul>
        <li>🧠 AI Pipeline: Designed and implemented the neural voice inference pipeline</li>
        <li>🔌 Backend: Built the FastAPI server with async audio processing endpoints</li>
        <li>🎙️ Voice Processing: Integrated speech-to-text and dialect classification models</li>
        <li>🤖 LLM Integration: Connected Claude 3.5 for contextual AI responses</li>
      </ul>
      `,
        techStack: [
            'Python',
            'FastAPI',
            'Claude 3.5',
            'Neural AI',
            'Speech Processing',
        ],
        thumbnail: '/projects/thumbnail/vaani.webp',
        longThumbnail: '/projects/long/vaani.webp',
        images: [
            '/projects/images/vaani-1.webp',
        ],
    },
    {
        title: 'Greendot',
        slug: 'greendot',
        sourceCode: 'https://github.com/Keerthanreddy01/Greendot',
        year: 2024,
        description: `
      Greendot is a Smart Farm Assistant — a Flutter-based mobile app that empowers farmers with AI-powered plant disease detection, real-time market insights, smart task management, and multi-language support. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🌿 Disease Detection: AI-powered plant disease detection using TensorFlow image classification</li>
        <li>📈 Market Insights: Real-time crop price data and market trend analysis</li>
        <li>📋 Task Management: Smart farm activity tracking and scheduling</li>
        <li>🌍 Multi-Language: Supports multiple Indian regional languages for farmer accessibility</li>
        <li>📷 Camera Integration: Instant leaf scanning with on-device TensorFlow Lite inference</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>TensorFlow Lite model for on-device plant disease classification</li>
        <li>Built with Flutter for a smooth cross-platform mobile experience</li>
        <li>Google Sheets API integration for real-time market data</li>
        <li>Offline-first architecture for use in low-connectivity rural areas</li>
      </ul>
      `,
        role: `
      Full-Stack Mobile Developer <br/>
      <ul>
        <li>📱 Mobile App: Built the entire Flutter application from scratch</li>
        <li>🤖 AI Model: Integrated and optimized TensorFlow Lite for on-device inference</li>
        <li>📊 Data Layer: Implemented Google Sheets API for live market price feeds</li>
        <li>🌍 Localization: Added multi-language support for regional accessibility</li>
        <li>🚀 Deployment: Published to Google Play Store</li>
      </ul>
      `,
        techStack: [
            'Flutter',
            'Dart',
            'TensorFlow Lite',
            'Google Sheets API',
            'Firebase',
        ],
        thumbnail: '/projects/thumbnail/greendot.webp',
        longThumbnail: '/projects/long/greendot.webp',
        images: [
            '/projects/images/greendot-1.webp',
        ],
    },
    {
        title: 'Fillora',
        slug: 'fillora',
        sourceCode: 'https://github.com/Keerthanreddy01/Fillora.in',
        year: 2025,
        description: `
      Fillora is an AI-powered Flutter app that scans documents, extracts key information using OCR, and automatically fills online forms — saving users time with intelligent document processing. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>📄 OCR Scanning: Accurate document scanning and text extraction using ML Kit</li>
        <li>🤖 AI Auto-Fill: Intelligent field mapping to automatically populate forms</li>
        <li>💬 Conversational AI: Chat-based interface to interact with extracted document data</li>
        <li>🌐 Multilingual: Supports multiple languages for diverse document types</li>
        <li>✨ Clean UI: Minimal and intuitive design for seamless user experience</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Flutter-based cross-platform app with clean architecture</li>
        <li>Google ML Kit for on-device OCR and document processing</li>
        <li>AI-driven key-value extraction for structured form auto-filling</li>
        <li>Conversational AI layer built on top of extracted document context</li>
      </ul>
      `,
        role: `
      Solo Developer <br/>
      <ul>
        <li>📱 App Development: Built the complete Flutter app with clean architecture</li>
        <li>🔍 OCR Pipeline: Integrated ML Kit for accurate document text extraction</li>
        <li>🤖 AI Layer: Implemented conversational AI with document context awareness</li>
        <li>🎨 UI/UX: Designed all screens with a clean, minimal aesthetic</li>
      </ul>
      `,
        techStack: [
            'Flutter',
            'Dart',
            'Google ML Kit',
            'AI/OCR',
            'Firebase',
        ],
        thumbnail: '/projects/thumbnail/fillora.webp',
        longThumbnail: '/projects/long/fillora.webp',
        images: [
            '/projects/images/fillora-1.webp',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full-Stack Developer Intern',
        company: 'Life Monk Inc',
        duration: 'Jan 2026 - Apr 2026',
        description:
            'Developed the LifeMonk education app for school children — a Flutter & Supabase mobile platform aimed at making quality education accessible and engaging. Built the complete frontend and backend, managed deployment to the Google Play Store, and integrated Cloudinary for media management and Cloudflare for performance optimization.',
    },
    {
        title: 'DevOps Tech Lead',
        company: 'VISWAM.AI',
        duration: 'May 2025 - Nov 2025',
        description:
            'Working as Tech Lead at Viswam Internship, guiding and mentoring a dynamic team of interns and developers. Focused on driving technical excellence across projects — designing scalable solutions, reviewing code, troubleshooting bugs, and setting best practices. Love turning challenges into learning opportunities for the whole team.',
    },
    {
        title: 'B.Tech Artificial Intelligence',
        company: "St. Peter's Engineering College",
        duration: '2023 - 2027 · CGPA 8.4',
        description:
            "Pursuing B.Tech in Artificial Intelligence at St. Peter's Engineering College (UGC Autonomous). Maintaining a CGPA of 8.4 while actively building full-stack web, mobile, and AI projects that solve real-world problems.",
    },
];
