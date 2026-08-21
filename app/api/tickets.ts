import type { Ticket } from "@/app/types/TicketTypes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createTicket(issue: string): Promise<Ticket[]> {
  const res = await fetch(`${API_URL}/tickets/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ issue }),
  });

  if (!res.ok) {
    throw new Error("Could not route this ticket. Please try again.");
  }

  return res.json();
}
