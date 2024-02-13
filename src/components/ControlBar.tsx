import { Box, Grid } from "@mui/material";
import React from "react";
import TabControl from "./TabControl";
import Actions from "./Actions";
import { TicketItem } from "../types";

const ControlBar = ({
  filterData,
  ticketData,
}: {
  ticketData: TicketItem[];
  filterData: (term: string, groupTerm?: string) => void;
}) => {
  return (
    <Grid container sx={{ p: 3 }}>
      <Grid item xs={12} md={6}>
        <Box display="flex">
          <TabControl ticketData={ticketData} filterData={filterData} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="flex-end">
          <Actions />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ControlBar;
