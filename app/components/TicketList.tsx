"use client";

import { useState } from "react";
import type {TicketListProps} from "@/app/types/TicketTypes";
import TicketCard from "@/app/components/TicketCard";

export default function TicketList({ tickets }: TicketListProps) {
  const [showRoutingStats, setShowRoutingStats] = useState(false);
  const stats = tickets[0];

  return (
    <div className="max-h-[75vh] space-y-3 overflow-y-auto pr-1">
      {tickets.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-500 p-8 text-center text-sm text-gray-500">
          No tickets yet — submit an issue to get started.
        </div>
      ) : (
        <>
        {tickets.map((ticket, i) => (
            <TicketCard
              key={ticket.ticket_id}
              ticket={ticket}
              index={i + 1}
              total={tickets.length}
            />
          ))}
          
          <div className="rounded-xl border border-gray-300 bg-white p-5">
            <button
              type="button"
              onClick={() => setShowRoutingStats((prev) => !prev)}
              className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-800"
            >
              Routing Time Stats
              <svg
                className={`h-4 w-4 transition-transform ${showRoutingStats ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showRoutingStats && (
              <div className="mt-3 grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-gray-100 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                    AI Routing Time
                  </p>
                  <p className="mt-1 text-sm text-gray-900">{stats.ai_routing_time.toFixed(2)}s</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                    Manual Routing Time
                  </p>
                  <p className="mt-1 text-sm text-gray-900">{stats.manual_routing_time.toFixed(2)}s</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                    AI vs Manual
                  </p>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      stats.ai_improvement_percent >= 0 ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {stats.ai_improvement_percent >= 0 ? "+" : ""}
                    {stats.ai_improvement_percent.toFixed(1)}%
                  </p>
                </div>
              </div>
            )}
          </div>

        </>
      )}
    </div>
  );
}
