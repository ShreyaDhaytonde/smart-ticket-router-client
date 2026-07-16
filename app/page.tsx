"use client";

import { useState } from "react";

import type { Ticket } from "@/app/types/TicketTypes";
import Header from "@/app/components/Header";
import TicketForm from "@/app/components/TicketForm";
import TicketList from "@/app/components/TicketList";

export default function Home() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  function handleTicketsCreated(newTickets: Ticket[]) {
    setTickets(newTickets);
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <Header />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase text-gray-900">
              Issue
            </h2>
            <TicketForm onTicketsCreated={handleTicketsCreated} />
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase text-gray-900">
              Tickets
            </h2>
            <TicketList tickets={tickets} />
          </div>
        </div>
      </div>
    </div>
  );
}
