import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Editor from "@monaco-editor/react";

const EditorPanel = ({ title, code, onChange, language, readOnly = false }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: 2, backgroundColor: "primary.main", color: "white" }}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Editor
          height="100%"
          language={language}
          value={code || ""}
          onChange={onChange ? (val) => onChange(val) : undefined} // Safe handling
          theme="vs-dark"
          options={{
            readOnly,
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            automaticLayout: true,
          }}
        />
      </Box>
    </Paper>
  );
};

export default EditorPanel;
