import { useEffect, useState } from "react";
import { BlockContainer } from "../../../Base/styled";
import Tabs from "../../Molecules/Tabs/Tabs";
import MainTemplate from "../../Templaites/MainTemplate/MainTemplate";
import { order_list, TABS_LIST } from "./Const";
import Table from "../../Molecules/Table/Table";
import Search from "../../Atoms/Search/Search";
import CustonDatePicker from "../../Atoms/CustomDatePicker/CustonDatePicker";

const Orders = ({ title }) => {
  const [tabList, setTabList] = useState(TABS_LIST);
  const [serach, setSearch] = useState("");
  const [data, setData] = useState(order_list);

  useEffect(() => {
    searchByTitle(serach);
  }, [serach]);

  const setTab = (id) => {
    const data = tabList.map((tab) => {
      if (tab.id === id) {
        tab.active = true;
      } else {
        tab.active = false;
      }
      return tab;
    });
    setTabList(data);
  };

  const searchByTitle = (title) => {
    const sendData = order_list.filter((item) =>
      item.title.toLowerCase().trim().includes(title.toLowerCase().trim())
    );
    setData(sendData);
  };

  return (
    <MainTemplate title="Orders">
      <BlockContainer>
        <Tabs list={tabList} setTab={setTab} />
        <Search value={serach} setValue={setSearch} />
        <CustonDatePicker data={data} setData={setData} />
        <Table data={data} />
      </BlockContainer>
    </MainTemplate>
  );
};

export default Orders;
