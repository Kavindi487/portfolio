// lib/projects.ts

export type Project = {
  slug: string;
  title: string;
  category: "Backend/IoT" | "Full-Stack" | "Embedded" | "ML";
  featured: boolean;
  tagline: string;
  problem: string;
  solution: string;
  role: string;
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
  architecture?: {
    steps: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "smart-patient-monitoring",
    title: "AI-Driven Smart Patient Monitoring System",
    category: "Backend/IoT",
    featured: true,
    tagline: "Real-time IoT patient monitoring with scalable microservices architecture",
    problem:
      "Healthcare facilities need real-time patient monitoring systems that can reliably process sensor data, persist it for analysis, and display it on dashboards—all while maintaining system availability.",
    solution:
      "Built a microservices-based backend using Spring Boot to ingest, validate, and persist real-time sensor data from Arduino devices. Containerized services with Docker for consistent deployment and scalability. Integrated with React dashboards for live monitoring.",
    role: "Backend Developer – Microservices Design, API Development, Docker Deployment",
    highlights: [
      "Designed microservices architecture with clear service boundaries and REST API contracts",
      "Implemented real-time data ingestion pipeline with validation and error handling",
      "Persisted structured sensor data to MySQL/PostgreSQL for reporting and analytics",
      "Containerized all services with Docker for reproducible dev/prod environments",
      "Deployed to cloud with monitoring and logging for production reliability",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Docker",
      "MySQL",
      "PostgreSQL",
      "Arduino",
      "React",
      "Cloud Deployment",
    ],
    github: "https://github.com/Smart-Patient-Monitoring-System",
    architecture: {
      steps: [
        "Arduino sensors collect patient vitals (heart rate, temperature, oxygen levels)",
        "Spring Boot microservices receive, validate, and process sensor data via REST APIs",
        "Data persisted to relational database with proper schema design",
        "React dashboard queries APIs to display real-time patient status and historical trends",
      ],
    },
  },
  {
    slug: "ristcon-2026",
    title: "RISTCON – Research Conference Management System",
    category: "Full-Stack",
    featured: true,
    tagline: "Complete conference workflow platform with live deployment",
    problem:
      "Research conferences require complex workflows for user authentication, paper submissions, peer reviews, and administrative management—all needing reliable backend integration.",
    solution:
      "Built a full-stack application with React frontend consuming Laravel REST APIs. Implemented authentication, submission workflows, and admin panels. Dockerized the entire stack for consistent deployment across environments.",
    role: "Full-Stack Developer – React Frontend, API Integration, Docker Deployment",
    highlights: [
      "Developed responsive React UI with clean component architecture and state management",
      "Integrated Laravel REST APIs for authentication, CRUD operations, and file uploads",
      "Designed database schema for users, submissions, reviews, and roles",
      "Containerized frontend and backend with Docker Compose for seamless deployment",
      "Deployed live demo to production server with CI/CD awareness",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "REST APIs",
      "Docker",
      "MySQL",
    ],
    github: "https://github.com/nimtaraa/ristcon-2026",
    live: "https://ristcon.preprodse.cc/site",
  },
  {
    slug: "oven-automation",
    title: "Oven Automation System",
    category: "Embedded",
    featured: true,
    tagline: "State machine-based embedded control with safety-first design",
    problem:
      "Oven automation requires predictable state transitions, safety constraints to prevent invalid operations, and precise temperature and timing control.",
    solution:
      "Designed and implemented a state machine architecture on Arduino with explicit state transitions, safety guards, and control logic for temperature and timing. Focused on reliability and testability.",
    role: "Embedded Systems Developer – State Machine Design, Control Logic, Safety Constraints",
    highlights: [
      "Implemented finite state machine for predictable, testable behavior",
      "Added safety constraints to prevent dangerous state transitions (e.g., door open while heating)",
      "Built temperature control loop with sensor feedback and timing mechanisms",
      "Designed for reliability under real-world conditions (power interruptions, sensor failures)",
    ],
    tech: ["Arduino", "Embedded C", "State Machine Design", "Safety Engineering"],
    github: "https://github.com/Kavindi487/Nerone_oven",
  },
  {
    slug: "aqi-tracker",
    title: "AQI Prediction System (Sri Lanka)",
    category: "ML",
    featured: true,
    tagline: "ML-powered Air Quality Index estimation with web interface",
    problem:
      "Air quality monitoring in Sri Lanka lacks accessible tools for estimating AQI based on pollutant data.",
    solution:
      "Built an ML pipeline using Random Forest to predict AQI from pollutant inputs. Integrated the model into a Flask backend with clean API endpoints and Angular frontend for user interaction.",
    role: "ML Engineer – Model Development, Backend Integration, API Design",
    highlights: [
      "Developed ML workflow with data preprocessing and Random Forest model training",
      "Built Flask REST API to serve predictions with input validation",
      "Created Angular frontend for intuitive user experience",
      "Focused on practical deployment, not just model accuracy",
    ],
    tech: ["Python", "Flask", "Random Forest", "Angular", "Tailwind CSS"],
    github: "https://github.com/Kavindi487/AQI-Tracker",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);