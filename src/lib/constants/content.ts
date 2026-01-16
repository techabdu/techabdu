// ===========================================
// TYPES
// ===========================================

export interface ProjectImage {
    src: string
    width: number
    height: number
    alt: string
}

export interface Project {
    id: string
    title: string
    insight: string  // One-liner, max 12 words
    category: string
    image: ProjectImage
    url?: string  // Optional external link
}

// ===========================================
// HERO SECTION
// ===========================================

export const HERO_CONTENT = {
    headline: "I build digital systems that feel inevitable.",
    subheading: "", // Optional 8-word max
} as const

// ===========================================
// ABOUT SECTION
// ===========================================

export const ABOUT_CONTENT = {
    paragraph: "I believe great software is quiet, fast, and deliberate. I build web systems by prioritizing performance, clarity, and long-term maintainability over short-term polish. I'm looking to work with teams who value judgment, restraint, and craft.",
    // Portrait image - will be added later
    portrait: {
        src: "/images/about-portrait.avif",
        fallback: "/images/about-portrait.webp",
        width: 800,
        height: 1000,
        alt: "Portrait",
    },
} as const

// ===========================================
// PROJECTS / SELECTED WORK SECTION
// ===========================================

// Placeholder projects - Replace with actual projects
// Each project should demonstrate ONE different strength:
// - Project 1: Systems thinking
// - Project 2: Visual restraint
// - Project 3: Technical execution
// - Project 4: Editorial judgment
// - Project 5: Problem framing (optional)

export const PROJECTS: Project[] = [
    {
        id: "project-1",
        title: "PRHUB",
        insight: "A Multi-tenant, Role-based Management system designed for Phone Retailers, with features such as inventory management, sales management, finance management, users management, etc. It also allows the admin to manage multiple branches from a single dashboard.",
        category: "Management System",
        image: {
            src: "/images/projects/project-1-hero.avif",
            width: 1200,
            height: 900,
            alt: "PRHUB Hero Image",
        },
    },
    {
        id: "project-2",
        title: "College Library",
        insight: "A platform where users (students, lecturers, and researchers) can access Library information, resources and updates, Find digital materials like E-Books and Journals, Browse databases like DOAJ, ScienceDirect etc.",
        category: "Library",
        image: {
            src: "/images/projects/project-2-hero.avif",
            width: 1200,
            height: 900,
            alt: "College Library Hero Image",
        },
    },
    //{
    //id: "project-3",
    //title: "Project Three",
    //insight: "Performance-first architecture for scale.",
    //category: "Technical",
    //image: {
    //src: "/images/projects/project-3-hero.avif",
    //width: 1200,
    //height: 900,
    //alt: "Project Three Hero Image",
    //},
    //},
]

// ===========================================
// PROCESS / PRINCIPLES SECTION
// ===========================================

// Process principles - max 12 words each
export const PROCESS_PRINCIPLES = [
    "Performance is a user-facing feature.",
    "Systems should age gracefully.",
    "Clarity outlives cleverness.",
    "Every decision compounds.",
] as const

// ===========================================
// CREDIBILITY SIGNALS SECTION
// ===========================================

// Single horizontal sequence, sentence-like flow
export const CREDIBILITY_CONTENT = {
    companies: ["iLM Technologies"],
    tagline: "The most powerful code is the code you don't have to write, but the most trusted code is the code you still review.",
} as const

// ===========================================
// CTA SECTION
// ===========================================

export const CTA_CONTENT = {
    headline: "Let's build something together.",
    email: "thetechabdu@gmail.com",
    buttonText: "Get in Touch",
} as const
