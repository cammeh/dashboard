import { Card, Paper, Typography } from "@mui/material";
import React from "react";

const PageHeader = (props) => {
  const { title, subTitle, icon } = props;
  return (
    <Paper className="page-header" elevation={0} square>
      <div className="main">
        <Card className="icon">{icon}</Card>
        <div className="title">
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
