import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const ErrorDisplay = ({ error }) => {
  return error ? (
    <Box sx={{ mb: 2 }}>
      <Paper
        sx={{
          p: 2,
          backgroundColor: "error.light",
          borderLeft: "4px solid",
          borderColor: "error.main",
        }}
      >
        <Typography color="error">{error}</Typography>
      </Paper>
    </Box>
  ) : null;
};

export default ErrorDisplay;
