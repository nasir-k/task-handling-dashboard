import React from "react";
import { Avatar, Box, Chip, Divider, Typography } from "@mui/material";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import DirectionsBoatRoundedIcon from "@mui/icons-material/DirectionsBoatRounded";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TileItem from "./TileItem";
import { TicketItem } from "../types";

const TicketTableItem = ({
  item,
  selectedTicket,
  onTicketItemClick,
}: {
  item: TicketItem;
  selectedTicket: TicketItem | null;
  onTicketItemClick: (item: TicketItem) => void;
}) => {
  console.log(item);
  return (
    <Box
      p={2}
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        "&:hover": {
          background: "#e6e6e6",
          cursor: "pointer",
          borderRadius: "6px",
        },
      }}
      display="flex"
      gap={2}
      justifyContent="space-between"
      bgcolor={
        selectedTicket?.ticketNumber === item.ticketNumber
          ? "lightgrey"
          : "white"
      }
      onClick={() => {
        onTicketItemClick(item);
      }}
    >
      <Box>
        <Box
          sx={{
            display: { lg: "flex" },
            justifyContent: { md: "space-between" },
            alignItems: { md: "start" },
            minWidth: { lg: "34rem" },
          }}
        >
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            gap={2}
          >
            {item.agent === "Alice" ? <CheckCircleIcon sx={{ color: "green" }} /> : <ArrowCircleUpRoundedIcon
              sx={{
                color:
                  item.status === "Open"
                    ? "blue"
                    : Math.floor(
                        (Date.parse(new Date(item.due).toISOString()) -
                          Date.parse(new Date().toISOString())) /
                          3600000
                      ) < 1
                    ? "red"
                    : item.status === "Closed"
                    ? "green"
                    : "black"
              }}
            />}
            <Typography>{item.ticketNumber}</Typography>
            <Typography>{item.title}</Typography>
          </Box>
          <Box
            sx={{ mt: { xs: "1rem", lg: 0 } }}
            display="flex"
            justifyContent="start"
            alignItems="center"
          >
            <Chip
              variant="outlined"
              color="primary"
              icon={<DirectionsBoatRoundedIcon />}
              label={item.labels[0]}
              size="small"
              sx={{ mr: 1 }}
            />
            <Chip
              variant="filled"
              color="primary"
              icon={<NewReleasesOutlinedIcon />}
              size="small"
              label={item.labels[1] ?? "Equipment Failure"}
            />
          </Box>
        </Box>
        <Box
          sx={{
            mt: 1,
            display: { xs: "none", md: "flex", maxWidth: "37rem" },
          }}
        >
          <Avatar
            sx={{ width: 24, height: 24, fontSize: "10px", mr: 2, ml: 5 }}
            alt={item.agent}
          >
            {item.agent[0] + item.agent[1].toUpperCase()}
          </Avatar>
          <Typography variant="caption" sx={{ color: "grey" }} noWrap>
            {item.summary}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap={3}>
        <TileItem
          title="Tasks"
          content={`${item.completedTasks}/${item.totalTasks}`}
        />
        <TileItem title="Resolver" content={item.resolver} />
        <TileItem
          title="Assigned"
          content={
            <Avatar sx={{ height: 24, width: 24, fontSize: "10px" }}>
              {item.agent[0] + item.agent[1].toUpperCase()}
            </Avatar>
          }
        />
        <TileItem
          title="Due"
          content={
            Math.floor(
              (Date.parse(new Date(item.due).toISOString()) -
                Date.parse(new Date().toISOString())) /
                3600000
            ) + " Hrs"
          }
        />
        <TileItem
          title="Updated On"
          content={`${new Date(item.updatedOn).getDate()} /
            ${new Date(item.updatedOn).getMonth() + 1} / ${new Date(
            item.updatedOn
          ).getFullYear()}`}
        />
      </Box>
      <Divider />
    </Box>
  );
};

export default TicketTableItem;
