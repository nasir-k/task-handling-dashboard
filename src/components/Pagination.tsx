import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pagination = ({
  paginate: {
    page,
    rowsPerPage,
    rowsCount,
    totalNumberOfPages,
    currentShowingMax,
    currentShowingMin,
    handleChangePage,
    handleChangeRowsPerPage,
    activeRows,
  },
}: {
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
    <Box display="flex" alignItems="center" justifyContent="end">
      <Box display="flex" alignItems="center">
        <Typography sx={{ width: "13rem" }}>Rows per page:</Typography>
        <FormControl fullWidth>
          <Select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <IconButton
        disabled={page === 1 || rowsCount === 0}
        sx={{ marginRight: "1rem" }}
        onClick={() => handleChangePage(page - 1)}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography>
        {`${rowsCount === 0 ? 0 : currentShowingMin} - ${
          currentShowingMax < rowsCount ? currentShowingMax : rowsCount
        } of ${rowsCount}`}
      </Typography>
      <IconButton
        disabled={page === totalNumberOfPages || rowsCount === 0}
        onClick={() => handleChangePage(page + 1)}
        sx={{ marginLeft: "1rem" }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default Pagination;
