import React from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Content />
    </>
  );
};

export default App;
