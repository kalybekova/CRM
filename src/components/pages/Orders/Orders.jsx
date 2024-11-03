import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainTemplate from "../../Templaites/MainTemplate/MainTemplate";

import RemoveModal from "../../Organisms/RemoveModal/RemoveModal";

import Tabs from "../../Molecules/Tabs/Tabs";
import Table from "../../Molecules/Table/Table";

import Search from "../../Atoms/Search/Search";
import CustonDatePicker from "../../Atoms/CustomDatePicker/CustonDatePicker";
import FilterButton from "../../Atoms/FilterButton/FilterButton";
import Select from "../../Atoms/Select/Select";
import Button from "../../Atoms/Button/Button";
import { BlockContainer } from "../../../Base/styled";
import { order_list, PAYMENT_OPTIONS } from "./Const";
import { OrdersBlock } from "./styled";

import {
  checkedForRemove,
  removeOrder,
  searchByPayment,
  searchByStatus,
  searchByTitle,
  setData,
  tabHandler,
  visableRemoveModal,
} from "../../../Store/Slice/OrdersSlice";

const Orders = ({ title }) => {
  const dispatch = useDispatch();

  const [serach, setSearch] = useState("");

  const data = useSelector((state) => state?.rootReducer.ordersSlice?.data);

  const visibleRemove = useSelector(
    (state) => state?.rootReducer.ordersSlice?.remove_modal_visable
  );

  const tabsList = useSelector(
    (state) => state?.rootReducer.ordersSlice?.tabs_list
  );

  const [filterShow, setFilterShow] = useState(false);

  useEffect(() => {
    searchHandler(serach.trim());
  }, [serach]);

  const setTab = (id) => {
    dispatch(tabHandler(id));
    dispatch(searchByStatus(id));
  };

  const searchByPaymentHandler = (payment) =>
    dispatch(searchByPayment(payment));

  const checkedHandler = (id, status) =>
    dispatch(checkedForRemove({ id, status }));

  const removeHandler = () => dispatch(removeOrder());

  const searchHandler = (title) => dispatch(searchByTitle(title));

  const searchByStatusHandler = (id) => dispatch(searchByStatus(id));

  const searchBydate = (res) => dispatch(setData(res));

  const showRemove = () => dispatch(visableRemoveModal(true));
  const hideRemove = () => dispatch(visableRemoveModal(false));

  return (
    <MainTemplate title="Orders">
      {visibleRemove ? (
        <RemoveModal closeHandler={hideRemove} submitHandler={removeHandler} />
      ) : null}

      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <OrdersBlock>
          <Search value={serach} setValue={setSearch} />
          <CustonDatePicker data={order_list} setData={searchBydate} />
          <FilterButton active={filterShow} setFilters={setFilterShow} />
          <Button handler={showRemove}>Remove order</Button>
        </OrdersBlock>
        {filterShow ? (
          <Select options={PAYMENT_OPTIONS} handler={searchByPaymentHandler} />
        ) : null}
        <Table data={data} haldlerForCheckbox={checkedHandler} />
      </BlockContainer>
    </MainTemplate>
  );
};

export default Orders;
