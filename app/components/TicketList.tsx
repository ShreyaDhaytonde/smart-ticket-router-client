import type { Ticket } from "@/app/types";
import TicketCard from "@/app/components/TicketCard";

type TicketListProps = {
  tickets: Ticket[];
};

export default function TicketList({ tickets }: TicketListProps) {
  return (
    <div className="max-h-[75vh] space-y-3 overflow-y-auto pr-1">
      {tickets.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-500 p-8 text-center text-sm text-gray-500">
          No tickets yet — submit an issue to get started.
        </div>
      ) : (
        tickets.map((ticket, i) => (
          <TicketCard
            key={ticket.ticket_id}
            ticket={ticket}
            index={i + 1}
            total={tickets.length}
          />
        ))
      )}
    </div>
  );
}
