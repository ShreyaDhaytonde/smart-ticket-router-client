"use client";

import { useState } from "react";
import type { Ticket } from "@/app/types";
import { CONFIDENCE_STYLES, PRIORITY_STYLES } from "@/app/lib/ticket-ui";

type TicketCardProps = {
  ticket: Ticket;
  index: number;
  total: number;
};

export default function TicketCard({ ticket, index, total }: TicketCardProps) {
  const needsReview = ticket.confidence === "Low" || !ticket.is_support_issue;
  const [showRoutingStats, setShowRoutingStats] = useState(false);

  return (
    <div className="rounded-xl border border-gray-300 bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-gray-400">#{ticket.ticket_id}</span>
      </div>

      <p className="mt-1 text-base font-bold text-indigo-600">
        Issue {index} of {total}
      </p>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-800">
        Original Issue
      </p>
      <p className="mt-1 rounded-lg bg-gray-50 p-3 text-sm italic text-gray-700">
        {ticket.issue_text}
      </p>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-800">
        Reasoning
      </p>
      <p className="mt-1 text-sm text-gray-800">{ticket.reasoning}</p>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
            Category
          </p>
          <p className="mt-1 text-sm text-gray-900">{ticket.category}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
            Assigned Team
          </p>
          <p className="mt-1 text-sm text-gray-900">{ticket.assigned_team}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
            Priority
          </p>
          <span
            className={`mt-1 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${
              PRIORITY_STYLES[ticket.priority] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {ticket.priority}
          </span>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
            Confidence
          </p>
          <span
            className={`mt-1 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${
              CONFIDENCE_STYLES[ticket.confidence] ?? "bg-gray-100 text-gray-800"
            }`}
          >
            {ticket.confidence}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
          Human Review
        </p>
        <span
          className={`mt-1 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${
            needsReview ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"
          }`}
        >
          {needsReview ? "Yes" : "No"}
        </span>
      </div>

      <div className="mt-4 border-t border-gray-200 pt-3">
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
              <p className="mt-1 text-sm text-gray-900">{ticket.ai_routing_time.toFixed(2)}s</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Manual Routing Time
              </p>
              <p className="mt-1 text-sm text-gray-900">{ticket.manual_routing_time.toFixed(2)}s</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                AI vs Manual
              </p>
              <p
                className={`mt-1 text-sm font-semibold ${
                  ticket.ai_improvement_percent >= 0 ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {ticket.ai_improvement_percent >= 0 ? "+" : ""}
                {ticket.ai_improvement_percent.toFixed(1)}%
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
