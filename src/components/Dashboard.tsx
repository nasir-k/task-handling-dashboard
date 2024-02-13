import React, { useState } from "react";
import { Box } from "@mui/material";
import ControlBar from "./ControlBar";
import TicketData from "./TicketData";

import Data from "../DummyData/data.json";
import { TicketItem } from "../types";
import usePagination from "../hooks/usePagination";
import Pagination from "./Pagination";

const Dashboard: React.FC = () => {
  const [ticketData, setTicketData] = useState<TicketItem[]>(
    JSON.parse(JSON.stringify(Data))
  );
  const [filteredData, setFilteredData] = useState(ticketData);

  const paginate = usePagination(1, 10, filteredData);

  const filterData = (term: string, groupTerm?: string) => {
    term = term.trim().toLocaleLowerCase();

    if (term.length) {
      const newData = ticketData.filter(
        (item) =>
          item.ticketNumber.toString().includes(term) ||
          item.title.toLocaleLowerCase().includes(term)
      );
      setFilteredData(newData);
    } else if (groupTerm?.length) {
      groupTerm = groupTerm.toLocaleLowerCase();
      let newData: TicketItem[] = [];
      console.log(groupTerm);
      switch (groupTerm) {
        case "all":
          newData = ticketData;
          break;
        case "assigned to me":
          newData = ticketData.filter((item) => item.agent === "Alice");
          console.log(newData);
          break;
        case "unassigned":
          newData = ticketData.filter((item) => item.agent === "unassigned");
          break;
        case "overdue":
          newData = ticketData.filter(
            (item) =>
              Math.floor(
                (Date.parse(new Date(item.due).toISOString()) -
                  Date.parse(new Date().toISOString())) /
                  3600000
              ) < 1
          );
          break;
        case "all open":
          newData = ticketData.filter((item) => item.status === "Open");
          break;
        default:
          newData = ticketData;
      }
      setFilteredData(newData);
    } else {
      setFilteredData(ticketData);
    }
  };

  return (
    <Box>
      <ControlBar ticketData={ticketData} filterData={filterData} />
      <TicketData
        data={ticketData}
        filteredData={paginate.activeRows}
        filterData={filterData}
        paginate={paginate}
      />
    </Box>
  );
};

export default Dashboard;
