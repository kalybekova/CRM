import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerStyled } from "./styled";

const CustonDatePicker = ({ data, setData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const searchByDate = (date) => {
    setStartDate(date);
    const results = data.filter((item) => {
      return item.date === moment(date).format("YYYY-MM-DD");
    });
    setData(results);
  };

  const searchByDateRange = (startData, endData) => {
    const result = data.filter((item) => {
      if (!startData || !endData) return item;
      const itemDate = moment(item.date).format("YYYY-MM-DD");
      const start = moment(startData).format("YYYY-MM-DD");
      const end = moment(endData).format("YYYY-MM-DD");
      return itemDate >= start && itemDate <= end;
    });
    setData(result);
  };

  return (
    <DatePickerStyled>
      {/* <DatePicker selected={startDate} onChange={searchByDate} /> */}
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        isClearable
        onChange={(dates) => {
          console.log(dates);
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
          searchByDateRange(start, end);
        }}
      />
    </DatePickerStyled>
  );
};

export default CustonDatePicker;
