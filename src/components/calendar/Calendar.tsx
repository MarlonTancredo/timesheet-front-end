import { useState } from "react";

const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let sundays: number[] = [];
let mondays: number[] = [];
let tuesdays: number[] = [];
let wednesdays: number[] = [];
let thursdays: number[] = [];
let fridays: number[] = [];
let saturdays: number[] = [];

const Calendar = () => {
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const increaseYear = () => {
    setYear(year + 1);
  };

  const decreaseYear = () => {
    setYear(year - 1);
  };

  const handleOnChange = (value: string) => {
    setMonth(parseInt(value));
  };

  const verifyMonth = (month: string) => {
    switch (month) {
      case "January":
        return 31;
      case "February":
        return 28;
      case "March":
        return 31;
      case "April":
        return 30;
      case "May":
        return 31;
      case "June":
        return 30;
      case "July":
        return 31;
      case "August":
        return 31;
      case "September":
        return 30;
      case "October":
        return 31;
      case "November":
        return 30;
      case "December":
        return 31;
      default:
        return 0;
    }
  };

  sundays = [];
  mondays = [];
  tuesdays = [];
  wednesdays = [];
  thursdays = [];
  fridays = [];
  saturdays = [];

  const limit = verifyMonth(months[month]);
  for (let i = 1; i <= limit; i++) {
    const myDay = new Date(`${months[month]} ${i}, ${year}`);
    if (myDay.getDay() === 0) {
      sundays.push(i);
    }
    if (myDay.getDay() === 1) {
      mondays.push(i);
    }
    if (myDay.getDay() === 2) {
      tuesdays.push(i);
    }
    if (myDay.getDay() === 3) {
      wednesdays.push(i);
    }
    if (myDay.getDay() === 4) {
      thursdays.push(i);
    }
    if (myDay.getDay() === 5) {
      fridays.push(i);
    }
    if (myDay.getDay() === 6) {
      saturdays.push(i);
    }
  }

  return (
    // Calendar container.
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "1rem",
      }}
    >
      {/* Years decrease and encrease */}
      <div style={{ display: "flex", marginBottom: "0.5rem" }}>
        <button onClick={decreaseYear}>{`<`}</button>
        <div style={{ width: "7rem" }}>{year}</div>
        <button onClick={increaseYear}>{`>`}</button>
      </div>
      {/* Months */}
      <div style={{ display: "flex" }}>
        <select
          style={{ width: "7rem", textAlign: "center" }}
          onChange={(e) => {
            const value = e.target.value;
            handleOnChange(value);
          }}
          value={month}
        >
          {months.map((myMonth: string, index: number) => {
            return (
              <option key={index} value={index}>
                {myMonth}
              </option>
            );
          })}
        </select>
      </div>
      {/* Calendar */}
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          {weekDays.map((weekDay: string, index: number) => {
            return (
              <div style={{ fontWeight: "bold" }} key={index}>
                {weekDay}
              </div>
            );
          })}
          {/* Monday */}
          <div>
            {mondays.map((monday: number, index: number) => {
              return <div key={index}>{monday}</div>;
            })}
          </div>
          {/*Tuesday */}
          <div>
            {tuesdays.map((tuesday: number, index: number) => {
              return <div key={index}>{tuesday}</div>;
            })}
          </div>
          {/* Wednesday */}
          <div>
            {wednesdays.map((wednesday: number, index: number) => {
              return <div key={index}>{wednesday}</div>;
            })}
          </div>
          {/* Thursday */}
          <div>
            {thursdays.map((thursday: number, index: number) => {
              return <div key={index}>{thursday}</div>;
            })}
          </div>
          {/* Friday */}
          <div>
            {fridays.map((friday: number, index: number) => {
              return <div key={index}>{friday}</div>;
            })}
          </div>
          {/* Saturday */}
          <div>
            {saturdays.map((saturday: number, index: number) => {
              return <div key={index}>{saturday}</div>;
            })}
          </div>
          {/* Sunday */}
          <div>
            {sundays.map((sunday: number, index: number) => {
              return <div key={index}>{sunday}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
