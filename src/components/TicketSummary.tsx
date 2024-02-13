import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import TileItem from "./TileItem";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import DirectionsBoatRoundedIcon from "@mui/icons-material/DirectionsBoatRounded";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import { TicketItem } from "../types";

const TicketSummary = ({
  selectedTicket,
}: {
  selectedTicket: TicketItem | null;
}) => {
  return (
    <>
      {selectedTicket && (
        <>
          <Box bgcolor="white" p={1} sx={{ borderRadius: "5px" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <TileItem
                title="Ticket Number"
                content={selectedTicket.ticketNumber}
              />
              <Box width="50%">
                <Chip
                  color={
                    selectedTicket.status === "Open" ? "warning" : "success"
                  }
                  icon={<CircleIcon sx={{ height: "12px" }} />}
                  label={selectedTicket.status}
                  size="small"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <TileItem
                title="Agent"
                content={
                  <Box display="flex" gap={1}>
                    <Avatar
                      sx={{ height: "24px", width: "24px", fontSize: "10px" }}
                    >
                      {selectedTicket.agent[0] +
                        selectedTicket.agent[1].toLocaleUpperCase()}
                    </Avatar>
                    <Typography>{selectedTicket.agent}</Typography>
                  </Box>
                }
              />
              <Box width="50%">
                <TileItem
                  title="Due"
                  content={
                    Math.floor(
                      (Date.parse(new Date(selectedTicket.due).toISOString()) -
                        Date.parse(new Date().toISOString())) /
                        3600000
                    ) + " Hrs"
                  }
                />
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <TileItem
                title="Resolution Team"
                content={
                  <AvatarGroup total={10}>
                    <Avatar
                      sx={{ height: "24px", width: "24px", fontSize: "10px" }}
                      alt="Remy Sharp"
                    />
                    <Avatar
                      sx={{ height: "24px", width: "24px", fontSize: "10px" }}
                      alt="Travis Howard"
                    />
                    <Avatar
                      sx={{ height: "24px", width: "24px", fontSize: "10px" }}
                      alt="Agnes Walker"
                    />
                    <Avatar
                      sx={{ height: "24px", width: "24px", fontSize: "10px" }}
                      alt="Trevor Henderson"
                    />
                  </AvatarGroup>
                }
              />
              <Box width="50%">
                <TileItem
                  title="Tasks"
                  content={
                    <Box display="flex" alignItems="center" gap={2}>
                      <Box width="4rem">
                        <LinearProgress
                          variant="determinate"
                          value={
                            (selectedTicket.completedTasks * 100) /
                            selectedTicket.totalTasks
                          }
                        />
                      </Box>
                      <Chip
                        label={`${selectedTicket.completedTasks}/${selectedTicket.totalTasks}`}
                        size="small"
                      />
                    </Box>
                  }
                />
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <TileItem
                title="Raised By"
                content={
                  <Box display="flex" gap={1}>
                    <Avatar
                      sx={{ height: "24px", width: "24px", fontSize: "10px" }}
                    >
                      {selectedTicket.raisedBy[0] +
                        selectedTicket.raisedBy[1].toLocaleUpperCase()}
                    </Avatar>
                    <Typography>{selectedTicket.raisedBy}</Typography>
                  </Box>
                }
              />
              <Box width="50%">
                <TileItem
                  title="Created On"
                  content={`${new Date(selectedTicket.createdOn).getDate()} /
            ${new Date(selectedTicket.createdOn).getMonth() + 1} / ${new Date(
                    selectedTicket.createdOn
                  ).getFullYear()}`}
                />
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box
              sx={{
                display: { lg: "flex" },
                justifyContent: { md: "space-between" },
                alignItems: { md: "start" },
              }}
            >
              {selectedTicket.agent === "Alice" ? <CheckCircleIcon sx={{ color: "green" }} /> : <ArrowCircleUpRoundedIcon
              sx={{
                color:
                selectedTicket.status === "Open"
                    ? "blue"
                    : Math.floor(
                        (Date.parse(new Date(selectedTicket.due).toISOString()) -
                          Date.parse(new Date().toISOString())) /
                          3600000
                      ) < 1
                    ? "red"
                    : selectedTicket.status === "Closed"
                    ? "green"
                    : "black"
              }}
            />}
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
                  label={selectedTicket.labels[0]}
                  size="small"
                  sx={{ mr: 1 }}
                />
                <Chip
                  variant="filled"
                  color="primary"
                  icon={<NewReleasesOutlinedIcon />}
                  size="small"
                  label={selectedTicket.labels[1] ?? "Equipment Failure"}
                />
              </Box>
            </Box>
          </Box>
          <Box bgcolor="white" p={1} mt={2} sx={{ borderRadius: "5px" }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Ticket Details
            </Typography>
            <Typography variant="caption">{selectedTicket.summary}</Typography>
          </Box>
        </>
      )}
    </>
  );
};

export default TicketSummary;
