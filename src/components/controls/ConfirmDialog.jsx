import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Controls } from "./Controls";

import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";

const ConfirmDialog = (props) => {
  const { confirmDialog, setConfirmDialog } = props;
  return (
    <Dialog open={confirmDialog.isOpen} maxWidth="md">
      <DialogTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NotListedLocationIcon
            style={{
              fontSize: "8rem",
              backgroundColor: "#F8324526",
              color: "#F83245",
              borderRadius: "50%",
            }}
          />
        </div>
      </DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            margin: "0 75px 0 75px",
          }}
        >
          <Typography variant="h4">{confirmDialog.title}</Typography>
          <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
        </div>
      </DialogContent>
      <DialogActions style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Controls.Button
            style={{ marginBottom: "15px", marginRight: "10px" }}
            text="No"
            color="default"
            onClick={() =>
              setConfirmDialog({ ...confirmDialog, isOpen: false })
            }
          />
          <Controls.Button
            style={{ marginBottom: "15px", marginLeft: "10px" }}
            text="Yes"
            color="secondary"
            onClick={confirmDialog.onConfirm}
          />
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
