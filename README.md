# Portfolio

A modern personal portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- **Dark Theme** - Sleek dark mode design
- **Animations** - Smooth transitions and effects using Framer Motion
- **Responsive** - Works on all screen sizes
- **Sections** - Hero, About, Skills, Projects, Certificates, Contact
- **Certificate Viewer** - Full-screen modal for viewing certificates

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- Framer Motion
- Radix UI (Dialog)
- Lucide React (Icons)

## Getting Started

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

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Project Structure

```
src/
├── app/           # Next.js App Router
├── components/
│   ├── ui/        # Reusable UI components
│   ├── sections/  # Page sections
│   └── effects/   # Visual effects
├── data/          # Static data (projects, skills, certificates)
└── lib/           # Utilities and types
```

## Customization

- **Skills**: Edit `src/data/skills.ts`
- **Projects**: Edit `src/data/projects.ts`
- **Certificates**: Edit `src/data/certificates.ts` and add images to `public/certificates/`
- **Colors**: Modify theme in `src/app/globals.css`
