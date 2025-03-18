import React from "react";
import { Box, Button } from "@mui/material";

const PrettyButton = ({ onClick }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onClick}
        sx={{
          px: 4,
          py: 1.5,
          fontSize: "1.1rem",
          boxShadow: 3,
          minWidth: "200px",
          transition: "background-color 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
          "&:active": {
            backgroundColor: "primary.light",
            boxShadow: 1,
          },
        }}
      >
        Pretty Please
      </Button>
    </Box>
  );
};

export default PrettyButton;
