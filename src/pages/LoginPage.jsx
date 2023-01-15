import { AccountCircle, Google } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import {
  Box,
  Button,
  Input,
  InputAdornment,
  Link,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import React from "react";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "400px",
  margin: "0 auto",
  borderRadius: "10px",
  padding: "40px",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: blue[500],
  borderRadius: "20px",
  padding: "8px",
  "&:hover": {
    backgroundColor: blue[600],
  },
}));

export const SocButton = styled(Button)(({ theme }) => ({
  width: "50%",
  whiteSpace: "nowrap",
  fontWeight: "400",
  textAlign: "center",
}));

const LoginPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "DeepSkyBlue",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <StyledPaper elevation={24}>
        <Typography variant="h4" fontWeight={500} textAlign="center">
          Log in
        </Typography>
        <Stack spacing={3} flexDirection="column" marginTop="50px">
          <TextField
            label="Username"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="filled"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack marginTop="40px">
          <LoginButton variant="contained">Log in</LoginButton>
        </Stack>
        <Stack marginTop="30px" spacing={3}>
          <Typography variant="subtitle2" color="gray" textAlign="center">
            or log in with
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <SocButton variant="outlined" color="error">
              Google
            </SocButton>
            <SocButton variant="outlined">Facebook</SocButton>
          </Box>
        </Stack>  
      </StyledPaper>
    </Box>
  );
};

export default LoginPage;
