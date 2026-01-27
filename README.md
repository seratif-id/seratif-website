# Seratif Website

This is the official corporate website for **Seratif Corp**, built with [Next.js](https://nextjs.org) to showcase our projects, clients, and company information.

## 🎨 UI/UX Approach

Our design philosophy focuses on creating a **premium, trustworthy, and modern** user experience.

-   **Modern Aesthetics**: We utilize a refined color palette with high-contrast text and subtle background elements to create a clean, professional look.
-   **Atomic Design**: The interface is built using the Atomic Design methodology, breaking down complex interfaces into smaller, reusable components (Atoms -> Molecules -> Organisms).
-   **Interactive Elements**: subtle animations, hover effects (grayscale to color for logos, skew effects for images), and smooth transitions enhance user engagement without being distracting.
-   **Responsive Layouts**: Design choices prioritize readability and usability across all devices, from mobile phones to large desktop screens.

## 🛠️ Technology Stack

This project is built using modern web technologies to ensure performance, scalability, and developer experience:

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) for utility-first styling
-   **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography
-   **Fonts**: [Geist](https://vercel.com/font) (Next.js default font)

## 📂 Folder Structure

The project follows a structured architecture to maintain code organization:

```
seratif-website/
├── app/                  # Next.js App Router directory
│   ├── layout.tsx        # Root layout definition
│   ├── page.tsx          # Homepage entry point
│   └── globals.css       # Global styles and Tailwind directives
├── components/           # UI Components (Atomic Design)
│   ├── atoms/            # Basic building blocks (Buttons, Typography, etc.)
│   ├── molecules/        # Combinations of atoms
│   └── organisms/        # Complex sections (Header, Footer, AboutSection, etc.)
├── constants/            # Static data configurations
│   ├── clients.ts        # Client data list
│   └── projects.ts       # Portfolio project data
├── public/               # Static assets
│   └── logo/             # Company and client logos
└── package.json          # Project dependencies and scripts
```

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
