import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Add from "./components/Add";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";


function App() {
  const [mode, setMode] = React.useState('light')
  
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme} >
    <Box className="App" bgcolor={"background.default"}  color={'text.primary'} >
      <Navbar />
      <Stack spacing={1} direction="row" justifyContent="space-between">
        <Sidebar setMode={setMode} />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
