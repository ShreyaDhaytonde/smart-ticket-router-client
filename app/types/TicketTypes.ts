export type TicketCardProps = {
  ticket: Ticket;
  index: number;
  total: number;
};

export type TicketListProps = {
  tickets: Ticket[];
};

export type TicketFormProps = {
  onTicketsCreated: (tickets: Ticket[]) => void;
};

export type Ticket = {
  ticket_id: string;
  created_at: string;
  issue_summary: string;
  category: string;
  priority: string;
  assigned_team: string;
  reasoning: string;
  confidence: string;
  is_support_issue: boolean;
  rejection_reason: string;
  issue_text: string;
  ai_routing_time: number;
  manual_routing_time: number;
  ai_improvement_percent: number;
};
