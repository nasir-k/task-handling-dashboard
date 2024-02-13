import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import { TicketItem } from "../types";

interface TabButton {
  filter: string;
  color: string;
}

const tabButtons: TabButton[] = [
  { filter: "All", color: "black" },
  { filter: "Assigned to me", color: "skyblue" },
  { filter: "Unassigned", color: "orange" },
  { filter: "Overdue", color: "red" },
  { filter: "All Open", color: "blue" },
];

const TabButton = ({
  filter,
  color,
  filterData,
  ticketData,
}: {
  ticketData: TicketItem[];
  filterData: (term: string, groupTerm?: string) => void;
} & TabButton) => {
  const getCount = () => {
    const term = filter.toLocaleLowerCase();
    switch (term) {
      case "all":
        return ticketData.length;
      case "assigned to me":
        return ticketData.filter((item) => item.agent === "Alice").length;
      case "unassigned":
        return ticketData.filter((item) => item.agent === "unassigned").length;
      case "overdue":
        return ticketData.filter(
          (item) =>
            Math.floor(
              (Date.parse(new Date(item.due).toISOString()) -
                Date.parse(new Date().toISOString())) /
                3600000
            ) < 1
        ).length;
      case "all open":
        return ticketData.filter((item) => item.status === "Open").length;
      default:
        return ticketData.length;
    }
  };
  return (
    <Button
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
      onClick={() => filterData("", filter)}
    >
      <Typography sx={{ color: color ?? "grey" }}>{getCount()}</Typography>
      <Typography
        variant="caption"
        display="block"
        sx={{ textTransform: "capitalize", color: "grey" }}
      >
        {filter}
      </Typography>
    </Button>
  );
};

export default function TabControl({
  filterData,
  ticketData,
}: {
  ticketData: TicketItem[];
  filterData: (term: string, groupTerm?: string) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="Large button group">
        {tabButtons.map((tButton, idx) => (
          <TabButton
            key={idx}
            {...tButton}
            filterData={filterData}
            ticketData={ticketData}
          />
        ))}
      </ButtonGroup>
    </Box>
  );
}
