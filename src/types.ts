export interface TicketItem {
  status: "Open" | "Closed";
  ticketNumber: number;
  title: string;
  summary: string;
  agent: string;
  resolver: string;
  team: string[];
  totalTasks: number;
  completedTasks: number;
  raisedBy: string;
  createdOn: Date;
  updatedOn: Date;
  due: Date;
  labels: string[];
}
