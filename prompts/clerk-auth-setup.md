# Implementation Prompt: Add Clerk Authentication

## Goal
Set up and integrate **Clerk Authentication** into LearnForge using the Clerk CLI linked to Clerk Application ID `app_3IxQ0lLGlD03V73qd56s3a6L1Dg`. This includes CLI installation/update, account authentication, project initialization, Next.js middleware & proxy matcher configuration, `ClerkProvider` integration in `app/layout.tsx`, and user authentication controls in the header navigation (`components/ui/navigation.tsx`).

## Skills & Documentation Read
- `AGENTS.md` (Project structure, auth guidelines, Next.js App Router rules)
- `clerk` skill (`.agents/skills/clerk/SKILL.md`)
- `clerk-cli` skill (`.agents/skills/clerk-cli/SKILL.md`)
- `clerk-nextjs-patterns` skill (`.agents/skills/clerk-nextjs-patterns/SKILL.md`)

## Code & Config Inspected
- `package.json`: Next.js 16.3.3, React 19.2.8.
- `app/layout.tsx`: Root layout where `ClerkProvider` will wrap the body contents.
- `components/ui/navigation.tsx`: Header component where `SignInButton`, `SignUpButton`, and `UserButton` will be integrated.
- Project root: Existing Next.js workspace. `clerk init --app app_3IxQ0lLGlD03V73qd56s3a6L1Dg` will be executed.

## Preliminary Setup Checklist
```
Here's what I'll do to get you set up with Clerk.

1. Install or update the Clerk CLI
2. Set up Clerk in this project, or scaffold a new app if it's empty
3. Verify the Next.js proxy matcher when applicable
4. Start your app with Clerk installed.

Shall I proceed?
```

## Decisions & Step-by-Step Plan

### Step 1: Install / Update Clerk CLI
- Check if `clerk` CLI binary is available: `command -v clerk && clerk --version`.
- If available, update: `clerk update --yes`.
- If not available, install: `npm install -g clerk`.

### Step 2: Sign in to Clerk
- Execute `clerk auth login` to authenticate the CLI.

### Step 3: Initialize Clerk in Project
- Run `clerk init --app app_3IxQ0lLGlD03V73qd56s3a6L1Dg` in the project root to link this repository and install `@clerk/nextjs`.

### Step 4: Verify Next.js Middleware & Proxy Matcher
- Ensure `middleware.ts` exists in project root or `app/` using `clerkMiddleware()` from `@clerk/nextjs/server`.
- Verify `config.matcher` includes:
  ```ts
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/__clerk/:path*',
  ]
  ```

### Step 5: Configure `ClerkProvider` in Root Layout
- Wrap `app/layout.tsx` body children with `<ClerkProvider>` from `@clerk/nextjs`.
- Per critical rules: `<ClerkProvider>` goes inside `<body>`, not wrapping `<html>`.

### Step 6: Integrate Auth Controls into Header Navigation
- Update `components/ui/navigation.tsx` Header component:
  - When signed out: Show `SignInButton` and `SignUpButton` (styled using Vertex primary and secondary button tokens).
  - When signed in: Show `UserButton` alongside notification bell.
  - Utilize `<SignedIn>`, `<SignedOut>`, `<SignInButton>`, `<SignUpButton>`, `<UserButton>` from `@clerk/nextjs`.

### Step 7: Verify Setup
- Run `clerk doctor` to verify setup health and fix any reported issues.

### Step 8: Build & Lint Checks
- Run `npm run lint` and `npm run build` to verify clean compilation.

## Files Expected to Touch
- `package.json` (Updated by `clerk init` / `npm install @clerk/nextjs`)
- `middleware.ts` [NEW or updated by `clerk init`]
- `app/layout.tsx` (Modify: wrap contents in `<ClerkProvider>`)
- `components/ui/navigation.tsx` (Modify: add `SignInButton`, `SignUpButton`, `UserButton`, `SignedIn`, `SignedOut`)

## Security Considerations
- Keep secret keys server-only (`CLERK_SECRET_KEY`).
- Publishable key (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`) is client-accessible.
- Protect private routes via Next.js middleware, not client code.

## Acceptance Criteria
- `@clerk/nextjs` is installed and configured in Next.js 16 App Router.
- `ClerkProvider` wraps `<body>` in `app/layout.tsx`.
- Middleware is configured with `/__clerk/:path*` matcher.
- Header displays Sign In / Sign Up buttons when signed out, and `UserButton` when signed in.
- `clerk doctor`, `npm run lint`, and `npm run build` pass without errors.

## Checks to Run
- `clerk doctor`
- `npm run lint`
- `npm run build`

## Manual Test Steps
1. Run `npm run dev` and navigate to `http://localhost:3000`.
2. Observe the top navigation header: verify Sign In / Sign Up controls appear when signed out.
3. Click Sign In / Sign Up to test Clerk authentication flow.
4. Once authenticated, verify the `UserButton` profile icon appears in the header.
