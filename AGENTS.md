# AGENTS.md - Portfolio Project Guidelines

## Project Overview

- **Project Name**: Muhamad Bayu Yusuf Portfolio
- **Framework**: Next.js 16.1.6 with React 19.2.3
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4 with dark theme
- **Package Manager**: npm

---

## Development Commands

### Running the Application

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code (ESLint)
npm run lint

# Lint specific file
npm run lint -- --fix src/components/ui/button.tsx
```

### Testing

> **Note**: Currently no test framework is configured. When adding tests, use the following patterns:

```bash
# Install test framework (Vitest recommended for Next.js)
npm install -D vitest @vitejs/plugin-react

# Run all tests
npx vitest

# Run single test file
npx vitest run src/components/ui/button.test.tsx

# Run tests in watch mode
npx vitest src/components/ui/button.test.tsx --watch
```

### Type Checking

```bash
# Full TypeScript check
npx tsc --noEmit

# Check specific file
npx tsc/lib/utils.ts
```

---

## Code Style Guidelines

### Imports & --noEmit src Path Aliases

- Use `@/` prefix for absolute imports (maps to `./src/`)
- Group imports in this order: external → internal → types
- Use named exports and imports

```typescript
// ✅ Correct
import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Project } from "@/lib/types";

// ❌ Avoid
import '../utils';
import { something } from '../../../../lib/utils';
```

### TypeScript Conventions

- **Always enable strict mode** - no `any` types allowed
- Use `interface` for component props, `type` for unions/intersections
- Use explicit return types for utility functions

```typescript
// ✅ Good - explicit props interface
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

// ✅ Good - explicit return type
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Button`, `NavigationBar` |
| Files (components) | kebab-case | `button.tsx`, `hero-section.tsx` |
| Files (utilities) | kebab-case | `utils.ts`, `types.ts` |
| Data files | plural + .ts | `projects.ts`, `skills.ts` |
| Variables | camelCase | `isLoading`, `userName` |
| Constants | camelCase or UPPER_SNAKE | `maxItems`, `API_BASE_URL` |
| Interfaces/Types | PascalCase | `Project`, `SkillCategory` |
| React refs | `ref` parameter | `forwardRef<HTMLButtonElement, ButtonProps>` |

### Component Patterns

Use `forwardRef` for components that need DOM refs:

```typescript
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return <button ref={ref} className={cn(...)} {...props} />;
  }
);

Button.displayName = "Button";
export { Button };
```

### Data & Types Structure

Store data in `src/data/` with TypeScript interfaces in `src/lib/types.ts`:

```typescript
// src/lib/types.ts
export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

// src/data/projects.ts
import { Project } from "@/lib/types";

export const projects: Project[] = [...];
```

### Barrel Exports

Create index files for clean imports:

```typescript
// src/components/sections/index.ts
export { Hero } from "./hero";
export { About } from "./about";
export { Skills } from "./skills";
// ...

// Usage
import { Hero, About, Skills } from "@/components/sections";
```

---

## Tailwind CSS v4 Guidelines

### Syntax

Use `@import "tailwindcss"` (v4 syntax, not `@tailwind base` etc.):

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --color-background: #0a0a0a;
  --color-foreground: #ededed;
  /* ... custom theme variables */
}
```

### Class Naming

- Use semantic class names with Tailwind utilities
- Dark theme: use `bg-background`, `text-foreground`, etc.
- Use `cn()` utility for conditional classes

```typescript
// ✅ Good
className={cn(
  "inline-flex items-center justify-center rounded-lg",
  "bg-primary text-primary-foreground",
  variant === "outline" && "border border-border",
  className
)}

// ❌ Avoid
className={`inline-flex ${variant === 'default' ? 'bg-blue-500' : 'bg-red-500'}`}
```

---

## Error Handling

- Use try/catch with proper typing for async operations
- Never use `any` type - use `unknown` if type is uncertain
- Log errors appropriately for debugging

```typescript
// ✅ Good
try {
  const data = await fetchData();
  return data;
} catch (error) {
  console.error("Failed to fetch data:", error);
  return null;
}

// ❌ Bad
try {
  const data = await fetchData();
  return data;
} catch (e) { // eslint-disable-line @typescript-eslint/no-unused-vars
  // silent fail
}
```

---

## Security Best Practices

- Never expose sensitive data in client components
- Use environment variables for API keys (`process.env.VARIABLE_NAME`)
- Sanitize user inputs in forms
- Use TypeScript strict mode for type safety

---

## File Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main home page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── ui/               # Reusable UI components (Button, Card)
│   └── sections/         # Page sections (Hero, About, Skills...)
├── data/                 # Static data (projects.ts, skills.ts)
├── lib/                  # Utilities (utils.ts, types.ts)
└── ...
```

---

## Common Tasks

### Adding a New Section

1. Create component in `src/components/sections/`
2. Add to barrel export in `src/components/sections/index.ts`
3. Import in `src/app/page.tsx`
4. Add to Navigation if needed

### Adding New Data

1. Add type to `src/lib/types.ts` if needed
2. Add data file in `src/data/`
3. Import and use in component

### Fixing Lint Errors

```bash
# Auto-fix lint errors
npm run lint -- --fix

# Check specific file
npm run lint -- src/components/ui/button.tsx
```
