import React from "react";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;

  const convertToDefaultParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        format="DD/MM/YYYY"
        label={label}
        name={name}
        value={value}
        inputFormat="dd/MM/yyyy"
        defaultValue={dayjs(Date.now())}
        // onChange={(date) => onChange(convertToDefaultParam(name, date))}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
