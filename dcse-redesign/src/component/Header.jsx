import { AppBar, Grid, styled, Toolbar, Typography } from "@mui/material";
import Navbar from "./Navbar";
import logo from "../assets/ugmlogo.png";
import React from "react";
import { borderRadius } from "@mui/system";
import { Search } from "@mui/icons-material";
import { VerticalAlignCenter } from "@mui/icons-material";

const Searchbar = styled("div")(({ theme }) => ({
  background: "#D6D6D6",
  display: "flex",
  justifyContent: "right",
  paddingTop: "2%",
  paddingBottom: "2%",
  borderRadius: theme.shape.borderRadius,
}));

const Header = () => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ paddingTop: 2, paddingBottom: 2, background: "#25316D" }}
      >
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={0.75}>
              <div>
                <img src={logo} alt="Logo" width="91" height="92" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ paddingTop: 15, VerticalAlignCenter }}>
                <Typography
                  color="#FFF"
                  textAlign="left"
                  variant="h5"
                  fontWeight="bold"
                >
                  DEPARTMENT OF COMPUTER SCIENCE AND ELECTRONICS
                </Typography>
                <Typography color="#FFF" textAlign="left" variant="h5">
                  FACULTY OF MATHEMATICS AND NATURAL SCIENCES
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div></div>
            </Grid>
            <Grid item xs={2}>
              <div style={{ paddingTop: "10%", justifyContent: "left" }}>
                <Searchbar>
                  <Search />
                </Searchbar>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Navbar />

      {/* <Box bgcolor="#25316D">
        <Stack direction="row" spacing={2}>
          <img src={logo} alt="Logo" width="100" height="100" />
          <div>
            <Typography color="#FFF" textAlign="left" variant="h5">
              Department of Computer Science and Electronics
            </Typography>
            <Typography color="#FFF" textAlign="left" variant="h5">
              Faculty of Mathematics and Natural Sciences
            </Typography>
          </div>
        </Stack> */}
      {/* <Navbar />
      </Box> */}
    </div>
  );
};

export default Header;
