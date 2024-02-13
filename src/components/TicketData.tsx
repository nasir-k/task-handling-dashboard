import React, { useState } from "react";
import { Grid, Box, SelectChangeEvent, Modal, useMediaQuery } from "@mui/material";
import TicketTable from "./TicketTable";
import TicketSummary from "./TicketSummary";
import { TicketItem } from "../types";

const TicketData = ({
  data,
  filteredData,
  filterData,
  paginate,
}: {
  data: TicketItem[];
  filteredData: TicketItem[];
  filterData: (term: string) => void;
  paginate: {
    page: number;
    rowsPerPage: number;
    rowsCount: number;
    totalNumberOfPages: number;
    currentShowingMax: number;
    currentShowingMin: number;
    handleChangePage: (newPage: number) => void;
    handleChangeRowsPerPage: (event: SelectChangeEvent<number>) => void;
    activeRows: any[];
  };
}) => {
  const [selectedTicket, setSelectedTicket] = useState<TicketItem | null>(null);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1200px)');

  const handleClose = () => setOpen(false);

  const onTicketItemClick = (item: TicketItem) => {
    setSelectedTicket(item);
    setOpen(true);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box p={3} sx={{ background: "#f1f1f1" }}>
      <Grid container>
        <Grid item xs={12} lg={9}>
          <TicketTable
            data={filteredData}
            selectedTicket={selectedTicket}
            onTicketItemClick={onTicketItemClick}
            filterData={filterData}
            paginate={paginate}
          />
        </Grid>
        <Grid item sx={{ display: { xs: "none", lg: "block" } }} lg={3}>
          <TicketSummary selectedTicket={selectedTicket} />
        </Grid>
        {isMobile && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TicketSummary selectedTicket={selectedTicket} />
            </Box>
          </Modal>
        )}
      </Grid>
    </Box>
  );
};

export default TicketData;
