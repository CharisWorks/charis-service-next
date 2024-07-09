"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Charis Works
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
