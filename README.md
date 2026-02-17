# RCS Consultoria Contabil

Modern marketing website for RCS Consultoria Contabil built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Overview

This project is a fully Next.js-based application (no external Express server). It includes:

- Public pages for Home, Services, and Contact
- A contact API endpoint using Next.js Route Handlers
- Reusable UI components (Radix + custom components)
- Responsive layout with a floating WhatsApp CTA

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 + PostCSS
- Framer Motion
- React Hook Form + Zod
- Radix UI primitives

## Project Structure

```text
src/
  app/
    api/contact/route.ts      # Contact endpoint
    contato/page.tsx          # Contact page
    servicos/page.tsx         # Services page
    page.tsx                  # Home page
    layout.tsx                # Root layout
    globals.css               # Global styles
  components/
    ui/                       # Reusable UI primitives/components
    Navbar.tsx
    Footer.tsx
    whatsapp-float.tsx
  hooks/
  lib/
public/                       # Static assets
```

## Available Routes

- `GET /` - Home
- `GET /servicos` - Services
- `GET /contato` - Contact
- `POST /api/contact` - Contact form submission

### Contact API payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "11999999999",
  "message": "Optional message"
}
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 3. Type-check

```bash
npm run check
```

### 4. Production build

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - Start Next.js in development mode
- `npm run build` - Build production assets
- `npm run start` - Start production server
- `npm run check` - Run TypeScript checks (`tsc --noEmit`)

## Notes

- Styling is configured with Tailwind v4 via `@tailwindcss/postcss` in `postcss.config.js`.
- The floating WhatsApp button uses: `https://wa.me/5511915738295`.
