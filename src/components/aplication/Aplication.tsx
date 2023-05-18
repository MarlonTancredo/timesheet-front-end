import * as S from "./styles";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

const Application = () => {
  const [fromValue, fromSetValue] = useState<Dayjs | null>(dayjs(new Date()));
  const [toValue, toSetValue] = useState<Dayjs | null>(dayjs(new Date()));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <S.CalendarWrapp>
        <DemoItem label="From">
          <DateCalendar
            value={fromValue}
            onChange={(newValue) => fromSetValue(newValue)}
          />
        </DemoItem>
        <DemoItem label="to">
          <DateCalendar
            value={toValue}
            onChange={(newValue) => toSetValue(newValue)}
          />
        </DemoItem>
      </S.CalendarWrapp>
    </LocalizationProvider>
  );
};

export default Application;
