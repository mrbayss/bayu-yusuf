# AGENTS.md - Portfolio Project Guidelines

## Project Overview

- **Framework**: Next.js 16.1.6 + React 19.2.3
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (dark theme)
- **Package Manager**: npm

---

## Development Commands

```bash
# Dev server (hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint all code
npm run lint

# Lint specific file with auto-fix
npm run lint -- --fix src/components/ui/button.tsx

# TypeScript check
npx tsc --noEmit
```

**Note**: No test framework currently configured. When adding tests, use Vitest:

```bash
# Install
npm install -D vitest @vitejs/plugin-react

# Run all tests
npx vitest

# Run single test file
npx vitest run src/components/ui/button.test.tsx

# Watch mode
npx vitest src/components/ui/button.test.tsx --watch
```

---

## Code Style

### Imports

- Use `@/` prefix (maps to `./src/`)
- Order: external → internal → types
- Use named exports/imports

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

### TypeScript

- Strict mode - no `any` (use `unknown` if uncertain)
- `interface` for props, `type` for unions
- Explicit return types for utilities

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

### Naming

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Button`, `Hero` |
| Files | kebab-case | `button.tsx`, `hero-section.tsx` |
| Data files | plural + .ts | `projects.ts`, `skills.ts` |
| Variables | camelCase | `isLoading` |
| Interfaces | PascalCase | `Project`, `Skill` |
| React refs | `ref` | `forwardRef<HTMLButtonElement, ButtonProps>` |

### Component Patterns

Use `forwardRef` for components needing DOM refs:

```typescript
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return <button ref={ref} className={cn(...)} {...props} />;
  }
);
Button.displayName = "Button";
export { Button };
```

### Tailwind CSS v4

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --color-background: #0a0a0a;
  --color-foreground: #ededed;
}
```

Use semantic classes + `cn()` for conditional styles:

```typescript
className={cn(
  "inline-flex items-center justify-center rounded-lg",
  "bg-primary text-primary-foreground",
  variant === "outline" && "border border-border",
  className
)}
```

---

## Error Handling

```typescript
// ✅ Good
try {
  const data = await fetchData();
  return data;
} catch (error) {
  console.error("Failed to fetch data:", error);
  return null;
}
```

---

## File Organization

```
src/
├── app/           # Next.js App Router
├── components/
│   ├── ui/        # Reusable UI (Button, Card)
│   └── sections/  # Page sections (Hero, About, Skills...)
├── data/          # Static data (projects.ts, skills.ts)
└── lib/           # Utilities (utils.ts, types.ts)
```

---

## Common Tasks

**Add new section**: Create in `src/components/sections/` → add to `index.ts` → import in `page.tsx`

**Add data**: Define type in `src/lib/types.ts` → create `src/data/<filename>.ts` → import

**Fix lint**: `npm run lint -- --fix`
