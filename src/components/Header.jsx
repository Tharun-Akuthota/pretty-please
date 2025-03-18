import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ px: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          color="inherit"
        >
          Pretty Please
        </Typography>
        <Box>
          <Typography variant="subtitle1" color="inherit">
            Code Beautifier
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
