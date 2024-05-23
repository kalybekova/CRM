import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FilterIcon } from "../../../assets/Icons";
import { order_list } from "../../pages/Orders/Const";

const CustonDatePicker = ({ data, setData }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //   const searchByDate = (date) => {
  //     setStartDate(date);
  //     const results = order_list.filter((item) => {
  //       return item.date === moment(date).format("YYYY-MM-DD");
  //     });
  //     setData(results);
  //   };

  const searchByDateRange = (startData, endData) => {
    const result = data.filter((item) => {
      const itemDate = moment(item.date).format("YYYY-MM-DD");
      const start = moment(startData).format("YYYY-MM-DD");
      const end = moment(endData).format("YYYY-MM-DD");
      return itemDate >= start && itemDate <= end;
    });
    setData(result)
  };

  return (
    <div>
      <FilterIcon />
      {/* <DatePicker selected={startDate} onChange={searchByDate} /> */}

      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
          searchByDateRange(start, end);
        }}
      />
    </div>
  );
};

export default CustonDatePicker;
