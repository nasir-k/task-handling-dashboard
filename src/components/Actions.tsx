import React from "react";
import { Badge, Box, Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";

const Actions = () => {
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<FilterAltIcon />}
        endIcon={
          <Badge
            color="secondary"
            badgeContent={4}
            sx={{ pl: "1rem", mr: "1rem",color: "white" }}
          ></Badge>
        }
        sx={{ mr: "1rem",color: "black", borderColor: "black" }}
      >
        Filters
      </Button>
      <Button variant="contained"  sx={{backgroundColor: "black"}} startIcon={<AddIcon />}>
        CREATE TICKET
      </Button>
    </>
  );
};

export default Actions;
