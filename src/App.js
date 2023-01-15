import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthContext } from "./context/AuthContext";
import Chat from './pages/Chat'

function App() {
  const [mode, setMode] = React.useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);


  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        className="App"
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setMode={setMode} mode={mode} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
