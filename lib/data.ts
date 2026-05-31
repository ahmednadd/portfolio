import { IProject } from '@/types';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const video = (path: string) => `${base}${path}`;
const asset = (path: string) => `${base}${path}`;

export const GENERAL_INFO = {
    email: 'ahmed.nadd@outlook.com',

    emailSubject: "Let's work together",
    emailBody: 'Hi Nadeem, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ahmednadd' },
    { name: 'linkedin', url: 'https://in.linkedin.com/in/nadd' },
    { name: 'twitter', url: 'https://x.com/pushitpatchlatr' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: asset('/logo/js.png'),
        },
        {
            name: 'TypeScript',
            icon: asset('/logo/ts.png'),
        },
        {
            name: 'React',
            icon: asset('/logo/react.png'),
        },
        {
            name: 'Next.js',
            icon: asset('/logo/next.png'),
        },
        {
            name: 'Redux',
            icon: asset('/logo/redux.png'),
        },
        {
            name: 'Tailwind CSS',
            icon: asset('/logo/tailwind.png'),
        },
        {
            name: 'GSAP',
            icon: asset('/logo/gsap.png'),
        },
        {
            name: 'Framer Motion',
            icon: asset('/logo/framer-motion.png'),
        },
        {
            name: 'Sass',
            icon: asset('/logo/sass.png'),
        },
        {
            name: 'Bootstrap',
            icon: asset('/logo/bootstrap.svg'),
        },
        {
            name: 'Git',
            icon: asset('/logo/git.png'),
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Flow Studio',
        slug: 'flow-studio',
        year: 2025,
        video: video('/videos/flow-studio.mp4'),
        thumbnail: '',
        longThumbnail: '',
        images: [],
        description: `Flow Studio is a visual journey builder for Bureau's customer onboarding platform. It enables product teams to design, configure, and deploy multi-step user verification workflows through an intuitive drag-and-drop interface.<br/><br/>

Key Features:<br/>
<ul>
  <li>Drag-and-drop canvas for building verification flows</li>
  <li>Real-time workflow preview and validation</li>
  <li>Configurable step types: identity verification, liveness checks, document scans</li>
  <li>Role-based access control for enterprise teams</li>
</ul>`,
        role: `As Senior Frontend Developer at Bureau, I:<br/>
        - Architected and built the journey builder UI from scratch using React and TypeScript<br/>
        - Implemented the drag-and-drop workflow canvas with complex state management<br/>
        - Integrated real-time previews and live workflow validation<br/>
        - Collaborated closely with the backend team on API design and integration`,
        techStack: ['Next.js', 'TypeScript', 'Zustand', 'React Flow'],
    },
    {
        title: 'Holofy Spaces',
        slug: 'holofy-spaces',
        year: 2023,
        video: video('/videos/holofy-spaces.mp4'),
        thumbnail: '',
        longThumbnail: '',
        images: [],
        description: `Holofy Spaces is a virtual space touring platform allowing businesses to showcase properties and environments with immersive, interactive walkthroughs — enabling remote exploration of physical spaces.<br/><br/>

Key Features:<br/>
<ul>
  <li>360° interactive space navigation</li>
  <li>Hotspot annotations and embedded media</li>
  <li>Shareable tour links with analytics</li>
  <li>Mobile-optimised experience</li>
</ul>`,
        role: `As Frontend Developer at Holofy, I:<br/>
        - Built interactive virtual tour components with GSAP-powered transitions<br/>
        - Implemented smooth 360° navigation and hotspot interaction systems<br/>
        - Optimised rendering performance for mobile and low-bandwidth environments<br/>
        - Collaborated with the product and design teams on UX refinements`,
        techStack: ['React', 'JavaScript', 'GSAP', 'SASS'],
    },
    {
        title: 'Lead Engager',
        slug: 'lead-engager',
        year: 2022,
        video: video('/videos/lead-engager.mp4'),
        thumbnail: '',
        longThumbnail: '',
        images: [],
        description: `Lead Engager is a CRM and lead management tool for nurturing and converting prospects across multiple communication channels — helping sales teams track, prioritise, and engage leads efficiently.`,
        role: `As Frontend Developer at Holofy, I:<br/>
        - Developed the lead management dashboard with dynamic filtering and sorting<br/>
        - Integrated real-time notifications and activity feeds<br/>
        - Built reusable form components with validation for lead capture flows<br/>
        - Implemented responsive layouts optimised for desktop sales workflows`,
        techStack: ['React', 'Chrome Extension'],
    },
    {
        title: 'FaceGuard',
        slug: 'faceguard',
        year: 2024,
        thumbnail: '',
        longThumbnail: '',
        images: [],
        liveUrl: 'https://faceguard.app.bureau.id/',
        description: `FaceGuard is Bureau's liveness detection product that helps businesses verify real human presence during onboarding — preventing spoofing attacks and identity fraud with AI-powered biometric checks.`,
        role: `As Senior Frontend Developer at Bureau, I:<br/>
        - Built the FaceGuard web SDK integration and demo application<br/>
        - Implemented camera access flows, liveness check states, and result handling<br/>
        - Ensured cross-browser compatibility for the WebRTC camera pipeline<br/>
        - Worked with the ML team to surface model outputs in the UI`,
        techStack: ['React', 'Context API'],
    },
    {
        title: 'Dashboard',
        slug: 'dashboard',
        year: 2023,
        video: video('/videos/dashboard.webm'),
        thumbnail: '',
        longThumbnail: '',
        images: [],
        description: `A feature-rich admin dashboard with data visualisation, real-time analytics, and interactive table components — built for enterprise-scale data management and monitoring.`,
        role: ``,
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    },
    {
        title: 'Natours',
        slug: 'natours',
        year: 2021,
        video: video('/videos/natours.webm'),
        thumbnail: '',
        longThumbnail: '',
        images: [],
        liveUrl: 'https://ahmednadd.github.io/natours/',
        description: `A template project showcasing SASS architecture and CSS animation techniques.`,
        role: ``,
        techStack: ['HTML', 'SASS'],
    },
    {
        title: 'Slaet',
        slug: 'slaet',
        year: 2021,
        video: video('/videos/slaet.webm'),
        thumbnail: '',
        longThumbnail: '',
        images: [],
        liveUrl: 'http://slaet.space/',
        description: `Slaet is a dynamic web platform with modern UI interactions, smooth animations, and a rich user experience built to showcase advanced frontend capabilities.`,
        role: ``,
        techStack: ['React', 'JavaScript', 'SASS'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Frontend Developer',
        company: 'Bureau',
        duration: 'Apr 2025 - Present',
    },
    {
        title: 'Software Engineer II',
        company: 'Softway',
        duration: 'Aug 2024 - Feb 2025',
    },
    {
        title: 'Frontend Developer',
        company: 'Holofy',
        duration: 'Feb 2021 - Jul 2024',
    },
    {
        title: 'Frontend Developer',
        company: 'Lirisoft',
        duration: 'Jan 2020 - Jan 2021',
    },
    {
        title: 'Software Developer',
        company: 'Pentamount Technologies',
        duration: 'Sep 2018 - Dec 2019',
    },
];
