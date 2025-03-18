import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 2,
        px: 2,
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      <Typography
        component="p"
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.5 }}
      >
        Pretty Please © {new Date().getFullYear()} • Made with 💖 by Tharun
      </Typography>
    </Box>
  );
};

export default Footer;
