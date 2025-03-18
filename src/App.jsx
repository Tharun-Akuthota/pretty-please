import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Box, CssBaseline, Stack } from "@mui/material";
import prettier from "prettier/standalone";
import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";

// Import components
import theme from "./components/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EditorPanel from "./components/EditorPanel";
import PrettyButton from "./components/PrettyButton";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const [inputCode, setInputCode] = useState(
    `// Paste your messy code here\nfunction hello() {\nconsole.log("Hello,    World!");\n    const x=   5;\n}`
  );
  const [outputCode, setOutputCode] = useState("");
  const [error, setError] = useState(null);

  const handleEditorChange = (value = "") => {
    setInputCode(value);
  };

  const prettifyCode = async () => {
    if (!inputCode.trim()) {
      setError("⚠️ Please enter some code to format.");
      return;
    }

    try {
      setError(null);
      const formattedCode = await prettier.format(inputCode, {
        parser: "babel",
        plugins: [babelPlugin, estreePlugin],
        semi: true,
        singleQuote: true,
        tabWidth: 2,
      });

      setOutputCode(formattedCode);
    } catch (err) {
      setError(`❌ Error: ${err.message}`);
      console.error("Prettier error:", err);
    }
  };

  // const prettifyCode = async () => {
  //   try {
  //     setError(null);

  //     const formattedCode = await prettier.format(inputCode, {
  //       parser: "babel", // Use 'babel' for JavaScript (no need for estree)
  //       plugins: [babel, typescript], // Ensure correct plugins
  //       semi: true,
  //       singleQuote: true,
  //       tabWidth: 2,
  //     });

  //     setOutputCode(formattedCode);
  //     console.log(formattedCode);
  //   } catch (err) {
  //     setError(`Error: ${err.message}`);
  //     console.error("Prettier error:", err);
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <Container
          maxWidth="xl"
          sx={{
            mt: 4,
            mb: 4,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Transform Your Messy Code
          </Typography>
          <Typography variant="body1" gutterBottom color="text.secondary">
            Paste your code on the left, click "Pretty Please", and get
            beautifully formatted code on the right.
          </Typography>

          {/* Replace Grid with Stack */}
          <Stack spacing={3} sx={{ flexGrow: 1, mb: 2 }}>
            <EditorPanel
              title="Input Code"
              code={inputCode}
              onChange={handleEditorChange}
            />
            <EditorPanel
              title="Prettified Code"
              code={outputCode}
              readOnly={true}
            />
          </Stack>

          <PrettyButton onClick={prettifyCode} />
          <ErrorDisplay error={error} />
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
