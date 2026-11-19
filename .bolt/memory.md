# Project memory

## Product intent & audience

- Single-page premium wedding invitation website
- Target audience: wedding guests receiving a digital invitation
- Content language: Russian (event details, invitation text)
- Reference design: https://priglasiava.date/demo/ava-001 (clean fullscreen opening screen logic)

## Brand personality & voice

- Luxury, elegant, premium feel
- Silk-inspired aesthetic
- Refined and intimate tone appropriate for a wedding celebration
- Russian-language voice throughout

## Visual design & UX direction

- **Envelope intro**: fullscreen, user-supplied photo as the envelope background (not a small card)
  - Mobile: image fills screen (`object-cover`)
  - Desktop: maintains proportions (`object-contain`) with soft cream background on edges
  - Fullscreen darkening overlay for text readability
  - Text positioned over image
- **Opening interaction**: smooth zoom + fade-out of envelope on click, then transition to invitation content
- **Overall theme**: luxury silk-inspired, cream/warm color palette
- **Animations**: Framer Motion for all transitions and motion
- **Responsive**: must look correct on phone, PC, and all screen sizes

## Decisions, constraints & rationale

- Stack: React + Vite + Tailwind CSS + Framer Motion
- Icons: lucide-react only (no other UI/icon packages)
- Path alias: `@/` maps to `src/`
- Envelope redesigned from small card to fullscreen photo background for better mobile experience
- Reference URL couldn't be fully scraped; general logic inferred (clean fullscreen opening)
- User-provided photo is the primary envelope visual

## Open questions & assumptions

- Exact color palette and typography choices not yet finalized
- Specific Russian event details (names, date, venue, schedule) to be customized
- Reference site's detailed design elements assumed from general logic since URL didn't fully load
- No confirmation yet on additional sections beyond envelope intro (e.g., RSVP, countdown, gallery, location map)