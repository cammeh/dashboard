import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@mui/material";
import React from "react";

import { Controls } from "./controls/Controls";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm></Grid>
          <Grid item>
            <Controls.Button text="Logout" size="small" color="secondary" />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
