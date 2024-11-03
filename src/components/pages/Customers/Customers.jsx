import React, { useEffect, useState } from "react";
import MainTemplate from "../../Templaites/MainTemplate/MainTemplate";
import { BlockContainer, FlexBlock, GridStyled } from "../../../Base/styled";
import CustomersHeader from "../../Molecules/CustomersHeader/CustomersHeader";
import CustomersTable from "../../Molecules/CustomersTable/CustomersTable";
import { useDispatch, useSelector } from "react-redux";
import FilterButton from "../../Atoms/FilterButton/FilterButton";
import Search from "../../Atoms/Search/Search";
import {
  customerRemove,
  filterBySpent,
  searchHandler,
  searchLocationHandler,
  searchProductHandler,
  setCurrentEdit,
  setCurrentRemove,
  setData,
  visabileCustomerModel,
  visableRemoveModal,
} from "../../../Store/Slice/CustomersSlice";
import { CUSTOMERS, LOCATIONS, SPENTS, TYPEPRODUCTS } from "./const";
import Select from "../../Atoms/Select/Select";
import CustonDatePicker from "../../Atoms/CustomDatePicker/CustonDatePicker";
import CustomerModal from "../../Organisms/CustomerModal/CustomerModal";
import RemoveModal from "../../Organisms/RemoveModal/RemoveModal";
import { SelectDiv, SelectDivTitle } from "../../Atoms/Select/styled";

const Customers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.rootReducer.customersSlice?.data);

  const m_data = useSelector(
    (state) => state?.rootReducer.customersSlice?.m_data
  );

  const customerModalVisable = useSelector(
    (state) => state?.rootReducer?.customersSlice?.visabile_customer_modal
  );
  const removeModalVisable = useSelector(
    (state) => state?.rootReducer?.customersSlice?.visabile_remove_modal
  );

  const [serach, setSearch] = useState("");
  const [filterShow, setFilterShow] = useState(false);

  useEffect(() => {
    searchByName(serach.trim());
  }, [serach]);

  const searchByName = (full_name) => dispatch(searchHandler(full_name));

  const searchByLocation = (location) =>
    dispatch(searchLocationHandler(location));

  const searchByDate = (results) => dispatch(setData(results));

  const searchByProduct = (product) => dispatch(searchProductHandler(product));

  const filterSpend = (spend) => dispatch(filterBySpent(spend));

  const hideCustomerModal = () => {
    dispatch(setCurrentEdit(null));

    dispatch(visabileCustomerModel(false));
  };
  const showCustomerModal = (item) => {
    console.log(item);
    dispatch(setCurrentEdit(item ?? null));
    dispatch(visabileCustomerModel(true));
  };

  const hideRemoveModal = () => {
    dispatch(setCurrentRemove(null));
    dispatch(visableRemoveModal(false));
  };
  const showRemoveModal = (item) => {
    dispatch(setCurrentRemove(item));
    dispatch(visableRemoveModal(true));
  };

  const removeHandler = () => {
    dispatch(customerRemove());
  };
  return (
    <MainTemplate title="Customers">
      {customerModalVisable ? (
        <CustomerModal closeHandler={hideCustomerModal} />
      ) : null}
      {removeModalVisable ? (
        <RemoveModal
          closeHandler={hideRemoveModal}
          submitHandler={removeHandler}
        />
      ) : null}

      <CustomersHeader showModal={showCustomerModal} />
      <BlockContainer marginTop="24px">
        <FlexBlock justifyContent="space-between" alignItems="center">
          <Search
            placeholder="Search by name, email, or others..."
            value={serach}
            setValue={setSearch}
          />
          <FilterButton active={filterShow} setFilters={setFilterShow} />
        </FlexBlock>
        {filterShow ? (
          <GridStyled marginTop="20px" gridColumns="1fr 1fr 1fr 1fr">
            <SelectDiv>
              <SelectDivTitle>Location</SelectDivTitle>
              <Select
                value="State or province"
                options={LOCATIONS}
                handler={searchByLocation}
              />
            </SelectDiv>

            <SelectDiv>
              <SelectDivTitle>Amount Spent</SelectDivTitle>
              <Select value="> $1,000" options={SPENTS} handler={filterSpend} />
            </SelectDiv>

            <SelectDiv>
              <SelectDivTitle>Order Date</SelectDivTitle>
              <CustonDatePicker
                value="Select date"
                data={m_data}
                setData={searchByDate}
              />
            </SelectDiv>

            <SelectDiv>
              <SelectDivTitle>Type of Products </SelectDivTitle>
              <Select
                value="All product"
                options={TYPEPRODUCTS}
                handler={searchByProduct}
              />
            </SelectDiv>
          </GridStyled>
        ) : null}

        <CustomersTable
          data={data}
          removeBtn={showRemoveModal}
          editBtn={showCustomerModal}
        />
      </BlockContainer>
    </MainTemplate>
  );
};

export default Customers;
