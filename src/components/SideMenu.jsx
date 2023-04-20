import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";

import PeopleIcon from "@mui/icons-material/People";
import WifiIcon from "@mui/icons-material/Wifi";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const SideMenu = () => {
  const menuItems = [
    {
      text: "Users",
      icon: <PeopleIcon color="default" />,
      path: "/",
    },
    {
      text: "Administration",
      icon: <AdminPanelSettingsIcon color="default" />,
      path: "/administration",
    },
  ];

  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Drawer variant="permanent" anchor="left">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "50px",
          }}
        >
          <Stack direction="row" alignItems="center" gap={1}>
            <WifiIcon fontSize="large" />
            <Typography variant="h5">RFID Door Control</Typography>
          </Stack>
        </div>

        <List
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideMenu;
