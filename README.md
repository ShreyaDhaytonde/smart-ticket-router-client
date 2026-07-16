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
<img width="1508" height="853" alt="image" src="https://github.com/user-attachments/assets/95dc1f16-fae2-4a3b-95ea-785c4e40c9d1" />
<img width="1512" height="860" alt="image" src="https://github.com/user-attachments/assets/b35e5be5-d90e-4109-98c7-e29d1f1e233a" />
<img width="1512" height="866" alt="image" src="https://github.com/user-attachments/assets/740c5b8e-e0da-4d13-81ce-25e400032a61" />

