import Image1 from '../assets/service-1.svg';
import Image2 from '../assets/service-2.svg';
import Image3 from '../assets/service-3.svg';
import Work1 from "../assets/project1.png";
import Work2 from "../assets/project2.png";
import Work3 from "../assets/project3.png";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog3.jpg";

export const servicesData = [
    {
        id: 1,
        image: Image2,
        title: "Backend Development",
        description: "Building robust, scalable, and secure server-side applications and APIs using modern technologies.",
    },
    {
        id: 2,
        image: Image1,
        title: "Cloud Management (GCP)",
        description: "Deploying, scaling, and managing efficient cloud infrastructure using Google Cloud Platform.",
    },
    {
        id: 3,
        image: Image3,
        title: "ML Models",
        description: "Designing and training Machine Learning models for computer vision, predictive analytics, and AI solutions.",
    },
];

// Projects Data
export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "MERN Fashion Voting & Shopping",
        category: ["Full Stack", "MERN"],
        repositoryUrl: "https://github.com/parijat1222q/mern-project-Fashion-Voting-and-Shopping-Platform-"
    },
    {
        id: 2,
        image: Work2,
        title: "janSuchna Issue Reporter",
        category: ["React", "TypeScript", "Supabase"],
        repositoryUrl: "https://github.com/parijat1222q/janSuchna"
    },
    {
        id: 3,
        image: Work3,
        title: "Disease Prediction Toolkit",
        category: ["Python", "ML", "Data Science"],
        repositoryUrl: "https://github.com/parijat1222q/Disease-Prediction-Toolkit"
    }
];

// Experience Data
export const experienceData = [
    {
        id: 1,
        title: "AI-ML Virtual Internship (AICTE-Certified)",
        company: "Google Developers Group",
        yearsActive: "July 2025 - September 2025",
        information: [
            "Completed 10-week Google-certified AI-ML internship focusing on Computer Vision and Deep Learning",
            "Built CNN architectures using TensorFlow and OpenCV for image classification and object detection",
            "Applied advanced preprocessing, data augmentation, and model optimization techniques",
            "Implemented Image Product Search algorithms and real-world CV applications"
        ],
    }
];

export const aboutData = {
    description: [
        "Hello! I'm Parijat, and I'm based in Kolkata, India. I am currently pursuing a Bachelor of Technology in Computer Science at Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex.",
        "I have a strong focus on AI & ML, having completed a virtual internship with Google Developers Group. I am passionate about building full-stack applications and exploring Deep Learning architectures.",
        "Here are a few technologies I’ve been working with recently:"
    ],
    skills: [
        "Python",
        "Java",
        "JavaScript (Node.js)",
        "React.js",
        "TensorFlow",
        "PostgreSQL/MongoDB"
    ]
};

export const homeData = {
    name: "Parijat Biswas",
    title: "Backend Developer | AI/ML Enthusiast",
};

export const socialData = {
    github: "https://github.com/parijatb32",
    linkedin: "https://www.linkedin.com/in/parijat-biswas-346aab277/",
    whatsapp: "https://wa.me/919433588095",
    instagram: "https://www.instagram.com/parijat_biswas_",
    google: "https://developers.google.com/profile/u/parijat-biswas",
};

// Blog Data
export const blogData = [
    {
        id: 1,
        image: Blog1,
        title: "Accuracy Alone Isn’t Enough: Rethinking Digital Twins",
        category: "Tech",
        url: "https://www.linkedin.com/pulse/accuracy-alone-isnt-enough-rethinking-digital-twins-decisions-biswas-j2u8c"
    },
    {
        id: 2,
        image: Blog2,
        title: "How Systems Talk: The Different API Styles",
        category: "Tutorial",
        url: "https://www.linkedin.com/pulse/how-systems-talk-different-api-styles-parijat-biswas-wf3me"
    },
    {
        id: 3,
        image: Blog3,
        title: "Microservices Architecture: Behind Spotify Wrapped",
        category: "Case Study",
        url: "https://medium.com/@parijatb32/microservices-architecture-the-hidden-engine-behind-spotify-wrapped-7b65ebea2419"
    }
];
