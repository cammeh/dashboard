import React, { useEffect, useState } from "react";

import StaffForm from "./StaffForm";
import useTable from "../../components/useTable";
import PageHeader from "../../components/PageHeader";
import Notification from "../../components/Notification";

import * as staffService from "../../services/staffService";

import PeopleOutlineTwoToneIcon from "@mui/icons-material/PeopleOutlineTwoTone";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";

import {
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@mui/material";

import { Controls } from "../../components/controls/Controls";
import { Search } from "@mui/icons-material";
import Popup from "../../components/Popup";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const headCells = [
  { id: "fullName", label: "Staff Name" },
  { id: "email", label: "Email Address" },
  { id: "mobile", label: "Phone Number" },
  { id: "department", label: "Department" },
  { id: "actions", label: "Actions", disableSorting: true },
];

const Staff = () => {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(staffService.getAllStaff());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (staff, resetForm) => {
    if (staff.id == 0) staffService.insertStaff(staff);
    else staffService.updateStaff(staff);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(staffService.getAllStaff());
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    staffService.deleteStaff(id);
    setRecords(staffService.getAllStaff());
    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "error",
    });
  };

  return (
    <>
      <PageHeader
        title="Registered RFID Users"
        subTitle="RFID records"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className="staff-content">
        <Toolbar>
          <Controls.Input
            label="Search RFID Users"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            className="new-button"
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <Controls.ActionButton color="##333996" bgColor="#3C44B126">
                    <EditOutlinedIcon
                      fontSize="small"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="#F83245"
                    bgColor="#F8324526"
                    onClick={() =>
                      setConfirmDialog({
                        isOpen: true,
                        title: "Delete Record?",
                        subTitle: "This process cannot be undone!",
                        onConfirm: () => {
                          onDelete(item.id);
                        },
                      })
                    }
                  >
                    <CloseIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Staff Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <StaffForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <Controls.ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default Staff;
