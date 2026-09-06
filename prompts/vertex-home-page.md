# Implementation Prompt: Vertex Home Page

## Goal
Implement the **Vertex Home Page** for LearnForge as specified in [`public/design/vertex-home.png`](file:///d:/MY-PROJECTS/LearnForge/public/design/vertex-home.png). The home page will be the main entry point at `app/page.tsx`, showcasing the header navigation, hero section with intelligent learning prompt, search bar, course catalog grid ("All Courses"), and decorative footer banner.

## Skills & Documentation Read
- `AGENTS.md` (Project structure, UI reproduction guidelines, Next.js conventions)
- Reference image: [`public/design/vertex-home.png`](file:///d:/MY-PROJECTS/LearnForge/public/design/vertex-home.png)

## Code & Config Inspected
- `app/globals.css`: Vertex design tokens (colors, typography, radii, shadows).
- `app/layout.tsx`: Root layout with `Inter` and `Playfair Display` font variables.
- `components/ui/navigation.tsx`: `VertexLogo`, navigation header primitives.
- `components/ui/button.tsx`: Vertex `Button` component.
- `components/ui/input.tsx`: Vertex `Input` component with search icon and shortcut key.
- `components/ui/cards.tsx`: `CourseCard` component.
- `components/ui/icons.tsx`: Vertex SVG icons.

## Decisions & Assumptions
1. **Routing**: Move the design system showcase page to `app/design-system/page.tsx` to preserve it, and implement the main Vertex Home Page at `app/page.tsx`.
2. **Navbar**:
   - Left: `VertexLogo` (orange V mark + Vertex text).
   - Navigation links: "Courses" and "My Learning".
   - Right: Notification Bell icon (`BellOutline`) and User Profile avatar image/badge.
3. **Hero Section**:
   - Pill badge: "INTELLIGENT LEARNING" (`bg-[#FFEEE5] text-[#C2410C] border border-[#FED7AA] rounded-full px-3.5 py-1 text-xs font-semibold`).
   - Headline: "Search your learning in plain English." in `Playfair Display` serif font (`text-4xl md:text-6xl font-bold text-[#0F172A] tracking-tight`).
   - Subtitle: "Vertex understands what you want to learn and finds the exact lessons across all your courses." in `Inter` font (`text-[#64748B] text-lg max-w-xl`).
   - CTA Button: "Explore Courses →" using primary orange button (`#F97316`, `h-12 px-6 rounded-[12px] text-base font-semibold`).
   - Search Bar: Prominent search input with magnifying glass, placeholder `"Ask anything about your learning..."`, and shortcut badge `⌘ K`.
4. **All Courses Section**:
   - Header: Title "All Courses" (`Playfair Display`, serif, text-3xl bold) and right action link "View all courses →" (`text-[#F97316] font-medium text-sm`).
   - Course Cards (3 columns):
     1. **Next.js for Production**: Black square logo "N", Intermediate · 18h 24m · 12 modules.
     2. **Docker Essentials**: Cyan Docker whale logo, Beginner · 10h 12m · 8 modules.
     3. **TypeScript Deep Dive**: Blue square logo "TS", Intermediate · 14h 36m · 10 modules.
5. **Footer Banner**:
   - Centered divider with star icon + text: "New courses and lessons added every week."
   - Soft decorative orange gradient bars graphic along bottom edge.

## Files to Touch
- `app/design-system/page.tsx` [NEW] (Move existing design system showcase here)
- `app/page.tsx` (Modify: implement Vertex Home Page layout)
- `components/ui/navigation.tsx` (Modify: add top navbar header with profile avatar & notifications)
- `components/ui/cards.tsx` (Modify: enhance `CourseCard` to support custom icons/logos like Docker and TypeScript)

## Security Considerations
- Client-side presentational UI only. No private keys or secret tokens exposed.

## Acceptance Criteria
- Exact visual reproduction of `vertex-home.png` (header, hero, search bar, course grid, footer banner).
- Responsive layout adapting gracefully from desktop down to mobile screens.
- `npm run lint` and `npm run build` pass without TypeScript or build errors.

## Checks to Run
- `npm run lint`
- `npm run build`

## Manual Test Steps
1. Run `npm run dev` and navigate to `http://localhost:3000`.
2. Verify Navbar (Vertex Logo, Courses link, My Learning link, notification bell, user avatar).
3. Verify Hero section (Pill badge, Playfair Display heading, subtitle, Explore Courses button, search input with `⌘ K`).
4. Verify Course Catalog (All Courses header, Next.js / Docker / TypeScript course cards with metadata).
5. Verify footer divider and decorative gradient bars at bottom of page.
6. Verify design system page at `http://localhost:3000/design-system`.
