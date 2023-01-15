import { AppBar, styled, Toolbar, Typography, Button, Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social Network
        </Typography>
        <Stack gap={2} flexDirection='row' >
          <Link to='/login' style={{textDecoration: "none"}} >
          <Button variant="contained" color='success'>
            Log in
          </Button>
          </Link>
          <Link to='/register' style={{textDecoration: "none"}} >
          <Button variant="contained" color='success'>
            Sign up
          </Button>
          </Link>
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
