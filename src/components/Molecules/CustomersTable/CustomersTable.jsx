import React from "react";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableStatus,
  TableTd,
  TableTh,
  TableTr,
} from "../Table/styled";

const COLUMNS = " 1fr 1.3fr 1fr 0.6fr 0.6fr  50px 50px";

const Table = ({ data, removeBtn, editBtn }) => {
  return (
    <TableContainer>
      <TableHead>
        <TableTr gridTemplateColumns={COLUMNS}>
          <TableTh>Customer name</TableTh>
          <TableTh>Email</TableTh>
          <TableTh>Location</TableTh>
          <TableTh>Orders</TableTh>
          <TableTh>Spent</TableTh>
          <TableTh></TableTh>
          <TableTh></TableTh>
        </TableTr>
      </TableHead>
      <TableBody>
        {data?.map((item) => (
          <TableTr key={item?.id} gridTemplateColumns={COLUMNS}>
            <TableTd>{item?.full_name}</TableTd>
            <TableTd>{item?.email}</TableTd>
            <TableTd>{item?.location}</TableTd>
            <TableTd>{item?.orders} orders</TableTd>
            <TableTd>${item?.spent}</TableTd>
            <TableStatus
              bg="#FFF0F0"
              color="#Fe964a"
              onClick={() => editBtn(item)}
            >
              Edit
            </TableStatus>
            <TableStatus
              bg="#E7F7EF"
              color="#0CAF60"
              onClick={() => removeBtn(item)}
            >
              Remove
            </TableStatus>
          </TableTr>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;
