import React from "react";
import { Box, SelectChangeEvent } from "@mui/material";
import TicketTableHeader from "./TicketTableHeader";
import TicketTableItem from "./TicketTableItem";
import { TicketItem } from "../types";
import Pagination from "./Pagination";

const TicketTable = ({
  data,
  selectedTicket,
  onTicketItemClick,
  filterData,
  paginate,
}: {
  data: TicketItem[];
  selectedTicket: TicketItem | null;
  onTicketItemClick: (item: TicketItem) => void;
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
  return (
    <Box bgcolor="white" sx={{ mr: { lg: 2 }, borderRadius: "5px" }} p={1}>
      <TicketTableHeader filterData={filterData} />
      {data.map((ticketItem, idx) => (
        <TicketTableItem
          key={idx}
          item={ticketItem}
          selectedTicket={selectedTicket}
          onTicketItemClick={onTicketItemClick}
        />
      ))}
      <Pagination paginate={paginate} />
    </Box>
  );
};

export default TicketTable;
