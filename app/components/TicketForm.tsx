"use client";

import { useState, type SubmitEvent } from "react";
import type { Ticket } from "@/app/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

type TicketFormProps = {
  onTicketsCreated: (tickets: Ticket[]) => void;
};

export default function TicketForm({ onTicketsCreated }: TicketFormProps) {
  const [issue, setIssue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!issue.trim() || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/tickets/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ issue }),
      });

      if (!res.ok) {
        throw new Error("Could not route this ticket. Please try again.");
      }

      const data: Ticket[] = await res.json();
      onTicketsCreated(data);
      setIssue("");
    } catch {
      setError("Something went wrong while routing your ticket. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-gray-300 bg-white p-4"
      >
        <label htmlFor="issue" className="text-sm font-medium font-bold text-gray-700">
          Describe the issue
        </label>
        <textarea
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="e.g. My order hasn't arrived and it's been two weeks..."
          rows={6}
          maxLength={2000}
          className="mt-2 w-full resize-none rounded-lg border border-gray-400 bg-white p-3 text-sm text-gray-900 outline-none focus:border-gray-800"
        />

        <button
          type="submit"
          disabled={submitting || !issue.trim()}
          className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 px-4 py-2.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-gray-400 disabled:bg-none"
        >
          {submitting ? "Classifying your ticket..." : "Submit ticket"}
        </button>
      </form>

      {error && (
        <div className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-none disabled:bg-gray-300">
          {error}
        </div>
      )}
    </div>
  );
}
