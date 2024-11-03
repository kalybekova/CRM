import React from "react";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableOrder,
  TableOrderId,
  TableStatus,
  TableTd,
  TableTh,
  TableTr,
} from "./styled";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import moment from "moment";

const Table = ({ data, haldlerForCheckbox }) => {
  return (
    <TableContainer>
      <TableHead>
        <TableTr>
          <TableTh></TableTh>
          <TableTh>Orders</TableTh>
          <TableTh>Date</TableTh>
          <TableTh>Customers</TableTh>
          <TableTh>Payment</TableTh>
          <TableTh>Status</TableTh>
          <TableTh>Price</TableTh>
        </TableTr>
      </TableHead>
      <TableBody>
        {data?.map((item) => (
          <TableTr>
            <TableTd>
              <Checkbox
                margin="23px 30px"
                item={item}
                handler={haldlerForCheckbox}
              />
            </TableTd>
            <TableTd>
              <TableOrder>{item.title}</TableOrder>
              <TableOrderId>{item.id}</TableOrderId>
            </TableTd>
            <TableTd>{moment(item.date).format("ll")} </TableTd>
            <TableTd>{item.customer.full_name}</TableTd>
            <TableTd>
              <TableStatus bg="#E7F7EF" color="#0CAF60">
                {item.payment_status}
              </TableStatus>
            </TableTd>
            <TableTd>
              <TableStatus bg="#FFF0F0" color="#Fe964a">
                {item.status}
              </TableStatus>
            </TableTd>
            <TableTd>${item.price}</TableTd>
          </TableTr>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;
