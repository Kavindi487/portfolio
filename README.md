# Kavindi Vidusari - Backend Engineer Portfolio

A modern, professional portfolio website showcasing backend engineering projects, microservices architecture, and IoT systems.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx    # Individual project pages
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── FeaturedProjects.tsx # Projects grid
│   ├── ProjectCard.tsx     # Project card component
│   ├── SystemsApproach.tsx # Engineering approach section
│   ├── Skills.tsx          # Skills section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── lib/
│   └── projects.ts         # Project data
└── public/
    └── (optional architecture diagrams)
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details** (`components/Contact.tsx`):
   - Email
   - GitHub
   - LinkedIn
   - Location

2. **Social Links** (`components/Navbar.tsx`, `components/Hero.tsx`):
   - GitHub URL
   - LinkedIn URL

3. **Metadata** (`app/layout.tsx`):
   - Title
   - Description
   - Keywords
   - Open Graph tags

### Update Projects

Edit `lib/projects.ts` to add/modify projects. Each project requires:

```typescript
{
  slug: "project-url-slug",
  title: "Project Title",
  category: "Backend/IoT" | "Full-Stack" | "Embedded" | "ML",
  featured: true,
  tagline: "Short description",
  problem: "What problem does it solve?",
  solution: "How does it solve it?",
  role: "Your specific role",
  highlights: ["Key achievement 1", "Key achievement 2"],
  tech: ["Java", "Spring Boot", "Docker"],
  github: "https://github.com/...",
  live: "https://...", // optional
  architecture: { // optional
    steps: ["Step 1", "Step 2"]
  }
}
```

### Update Skills

Edit `components/Skills.tsx` to modify the skills grid:

```typescript
const skillCategories = [
  {
    category: "Backend & APIs",
    skills: ["Java", "Spring Boot", "REST APIs"],
  },
  // ...
];
```

## 🎯 Key Features

- **Clean, Professional Design**: Focused on credibility and clarity
- **Dark Theme**: Modern dark color scheme with emerald accents
- **Smooth Animations**: Subtle Framer Motion animations
- **Responsive**: Mobile-first design
- **SEO Optimized**: Proper metadata and semantic HTML
- **Static Generation**: Fast page loads with Next.js static generation
- **Individual Project Pages**: Detailed view for each project

## 📱 Sections

1. **Hero**: Introduction with tech stack and CTAs
2. **Featured Projects**: 4 main projects with cards
3. **Systems Approach**: Engineering mindset explanation
4. **Skills**: Categorized tech stack
5. **Contact**: Email and social links

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
# Build the project
npm run build

# The output will be in `.next/` directory
```

## 🎨 Color Scheme

- **Primary**: Emerald (emerald-400, emerald-500)
- **Background**: Slate (slate-900, slate-950)
- **Text**: White/Slate-300
- **Accents**: Cyan (for gradients)

## 📄 License

Personal portfolio - all rights reserved.

## 🤝 Contact

- **Email**: kavindividusari@gmail.com
- **GitHub**: [github.com/Kavindi487](https://github.com/Kavindi487)
- **LinkedIn**: [linkedin.com/in/kavindi-vidusari](https://linkedin.com/in/kavindi-vidusari)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion