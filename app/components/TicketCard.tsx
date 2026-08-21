"use client";

import type { TicketCardProps } from "@/app/types/TicketTypes";
import { CONFIDENCE_STYLES, PRIORITY_STYLES } from "@/app/constants/ticket-ui";

export default function TicketCard({ ticket, index, total }: TicketCardProps) {
  const needsReview = ticket.confidence === "Low" || !ticket.is_support_issue;

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
    </div>
  );
}
