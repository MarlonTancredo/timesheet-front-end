import * as S from "./styles";
import { useState } from "react";

import { Calendar } from "react-calendar";
import "@fall-out/react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Application = () => {
  const [value, setValue] = useState<Value>(new Date());
  console.log(value);

  return (
    <S.CalendarWrapp>
      <Calendar
        selectRange
        minDate={new Date()}
        onChange={setValue}
        value={value}
      ></Calendar>
    </S.CalendarWrapp>
  );
};

export default Application;
