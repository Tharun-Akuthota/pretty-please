import React from "react";
import { Container as MuiContainer } from "@mui/material";

const Container = ({ children, sx = {}, ...props }) => {
  return (
    <MuiContainer
      disableGutters
      {...props}
      sx={{
        width: "100%",
        px: { xs: 1, sm: 2, md: 3 },
        ...sx,
      }}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
