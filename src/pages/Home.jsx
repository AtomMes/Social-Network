import React from "react";

import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import { Stack } from "@mui/material";
import Add from "../components/Add";

const Home = ({ setMode, mode }) => {
  return (
    <Stack spacing={1} direction="row" justifyContent="space-between">
      <Sidebar setMode={setMode} />
      <Feed />
      <RightBar />
      <Add />
    </Stack>
  );
};

export default Home;
