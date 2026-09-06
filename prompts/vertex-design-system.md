# Implementation Prompt: Vertex Design System

## Goal
Implement the **Vertex Design System** for LearnForge as specified in [`public/design/vertex-designsystem.png`](file:///d:/MY-PROJECTS/LearnForge/public/design/vertex-designsystem.png). This involves establishing core design tokens (colors, typography, type scale, spacing, border radii, shadows), building a modular suite of UI components, and creating a showcase page at `app/page.tsx` reproducing all 14 design system sections.

## Skills & Documentation Read
- `AGENTS.md` (Project structure, UI reproduction guidelines, Next.js conventions)
- Reference image: [`public/design/vertex-designsystem.png`](file:///d:/MY-PROJECTS/LearnForge/public/design/vertex-designsystem.png)

## Code & Config Inspected
- `package.json`: Next.js 16.3.3, React 19.2.8, Tailwind CSS v4 (`@tailwindcss/postcss`).
- `app/layout.tsx`: Root layout with font imports.
- `app/globals.css`: Root Tailwind CSS v4 directives.

## Decisions & Assumptions
1. **Typography**: Load `Inter` and `Playfair_Display` from `next/font/google` in `app/layout.tsx` and map them to CSS font variables `--font-inter` and `--font-playfair`.
2. **Design Tokens**: Configure custom tokens in `app/globals.css` for Tailwind v4 matching the exact specifications from the reference design:
   - **Primary Colors**: 500 (`#F97316`), 400 (`#FB923C`), 300 (`#FDBA74`), 200 (`#FED7AA`), 100 (`#FFEEE5`).
   - **Neutral Colors**: 900 (`#0F172A`), 700 (`#334155`), 500 (`#64748B`), 300 (`#CBD5E1`), 200 (`#E2E8F0`), 100 (`#F1F5F9`), 50 (`#FAFAFC`), White (`#FFFFFF`).
   - **Radii**: `4px` (xs), `8px` (sm), `12px` (md), `16px` (lg), `24px` (xl), `9999px` (full).
   - **Shadows**:
     - Sm: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`
     - Md: `0 4px 12px -2px rgba(15, 23, 42, 0.08)`
     - Lg: `0 12px 24px -4px rgba(15, 23, 42, 0.10)`
     - Xl: `0 20px 40px -8px rgba(15, 23, 42, 0.12)`
3. **Component Suite**: Create modular UI components under `components/ui/`:
   - Icons (`components/ui/icons.tsx`): 24x24px outline and filled SVG icons matching section 06.
   - Buttons (`components/ui/button.tsx`): Primary, Secondary, Tertiary, Text buttons with default, hover, and disabled states.
   - Inputs (`components/ui/input.tsx`): Search input with `⌘ K` badge and Select dropdown.
   - Badges (`components/ui/badge.tsx`): Video, Lesson, and Popular tags.
   - Status Indicators (`components/ui/status-indicator.tsx`): In Progress, Completed, Now Playing, and Locked states.
   - Progress Bar (`components/ui/progress-bar.tsx`): 35% completed bar with label.
   - Cards (`components/ui/cards.tsx`): Course Card, Video Lesson Card, Lesson Card, and Resource Card.
   - Navigation (`components/ui/navigation.tsx`): Logo header, breadcrumbs, and pagination controls.
4. **Showcase Page (`app/page.tsx`)**: Structure `app/page.tsx` as a comprehensive design system viewer displaying sections 01 to 14 in a clean, modern layout matching `vertex-designsystem.png`.

## Files to Touch
- `app/layout.tsx` (Modify: import and configure Google Fonts `Inter` & `Playfair_Display`)
- `app/globals.css` (Modify: define Vertex color/typography/radius/shadow design tokens)
- `components/ui/icons.tsx` [NEW]
- `components/ui/button.tsx` [NEW]
- `components/ui/input.tsx` [NEW]
- `components/ui/badge.tsx` [NEW]
- `components/ui/status-indicator.tsx` [NEW]
- `components/ui/progress-bar.tsx` [NEW]
- `components/ui/cards.tsx` [NEW]
- `components/ui/navigation.tsx` [NEW]
- `app/page.tsx` (Modify: implement Vertex Design System showcase layout)

## Security Considerations
- Client-side presentational UI only. No private tokens or secret keys involved.

## Acceptance Criteria
- Colors, font scales, radii, and shadows match the reference image exact specifications.
- Interactive states (hover, focus, disabled) work as designed.
- Showcase page renders all 14 sections cleanly and responsively down to mobile.
- `npm run lint` and `npm run build` complete without errors.

## Checks to Run
- `npm run lint`
- `npm run build`

## Manual Test Steps
1. Run `npm run dev` and navigate to `http://localhost:3000`.
2. Verify sections 01 to 14 match the visual design system in layout, typography, and color palette.
3. Test button hover and disabled states.
4. Test text input focus state and search shortcut badge display.
5. Verify progress bar percentage, status indicator icons, and card layouts.
