import { AppBar, Divider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ paddingTop: 2, paddingBottom: 2, background: "#25316D" }}
        >
          <Box color="#FFF">
            <div style={{ fontSize: 20, fontWeight: "bold" }}>Home</div>
          </Box>
          <Box color="#FFF">
            <div style={{ fontSize: 20, fontWeight: "bold" }}>Department</div>
          </Box>
          <Box color="#FFF">
            <div style={{ fontSize: 20, fontWeight: "bold" }}>Research</div>
          </Box>
          <Box color="#FFF">
            <div style={{ fontSize: 20, fontWeight: "bold" }}>Program</div>
          </Box>
          <Box color="#FFF">
            <div style={{ fontSize: 20, fontWeight: "bold" }}>Lecturers</div>
          </Box>
          <Box color="#FFF">
            <div style={{ fontSize: 20, fontWeight: "bold" }}>Academic</div>
          </Box>

          {/* <div>Home</div>
        <div>Department</div>
        <div>Research</div>
        <div>Program</div>
        <div>Lecturers</div>
        <div>Academic</div> */}
        </Stack>
      </AppBar>
    </div>
  );
};

export default navbar;
