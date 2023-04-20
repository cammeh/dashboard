import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";
import React from "react";

const Checkbox = (props) => {
  const { name, label, value, onChange } = props;

  const convertToDefaultParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultParam(name, e.target.checked))
            }
          />
        }
        label={label}
      ></FormControlLabel>
    </FormControl>
  );
};

export default Checkbox;
