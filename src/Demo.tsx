import moment from "moment";
import "moment/locale/es"; // uncomment and change to test different languages
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

/**
 * how you used the components
 */
export default function Demo() {
  const [value, setValue] = useState(moment());
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StaticDatePicker
        onChange={setValue}
        value={value}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
