# Smart-Ticket-Router Frontend

Next.js UI for submitting support tickets and viewing their classification, backed by the [Smart-Ticket-Router Backend](../Backend/readme.md).

## Prerequisites

- Node.js 18.18+ (Next.js 16 requirement)
- The backend API running (see `Backend/readme.md`)

## Setup

1. Install dependencies (from the `frontend/` directory):

   ```bash
   npm install
   ```

2. Create a `.env.local` file in `frontend/` with:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

   This should point at wherever the backend is running.

## Run

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Other scripts

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the codebase
```

## Project Structure

```
frontend/
├── app/
│   ├── page.tsx              # main page
│   ├── layout.tsx            # root layout
│   ├── types.ts              # shared TS types
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TicketForm.tsx    # ticket submission form
│   │   ├── TicketList.tsx    # list of classified tickets
│   │   └── TicketCard.tsx    # single ticket display
│   └── lib/ticket-ui.ts      # UI helpers
```
