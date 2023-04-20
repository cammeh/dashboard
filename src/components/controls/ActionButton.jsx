import { Button } from "@mui/material";
import React from "react";

const ActionButton = (props) => {
  const { bgColor, color, children, onClick } = props;
  return (
    <Button
      style={{
        color: color,
        backgroundColor: bgColor,
        margin: "2px",
        minWidth: 0,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
