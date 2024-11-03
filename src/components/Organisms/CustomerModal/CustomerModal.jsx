import React, { useEffect, useState } from "react";
import ModalTemplate from "../../Templaites/ModalTemplate/ModalTemplate";
import { GridStyled } from "../../../Base/styled";
import Button from "../../Atoms/Button/Button";
import { Label, ModalStyled } from "./styled";
import Select from "../../Atoms/Select/Select";
import { LOCATIONS, TYPEPRODUCTS } from "../../pages/Customers/const";
import Input from "../../Atoms/Input/Input";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createHandler,
  editCustomerHandler,
} from "../../../Store/Slice/CustomersSlice";

const CustomerModal = ({ closeHandler, submitHandler }) => {
  const dispatch = useDispatch();

  const currentItem = useSelector(
    (state) => state?.rootReducer?.customersSlice?.current_edit_item
  );

  const [data, setData] = useState({
    id: null,
    full_name: "",
    email: "",
    location: null,
    orders: "",
    spent: 150.0,
    type_product: null,
    date: null,
  });

  useEffect(() => {
    if (currentItem) {
      setData(currentItem);
    }
  }, [currentItem]);

  const locationsHandler = (location) => {
    setData((old) => ({ ...old, location: location.value }));
  };

  const productsHandler = (type_product) => {
    setData((old) => ({ ...old, type_product: type_product.value }));
  };

  const fullNameHandler = (full_name) => {
    setData((old) => ({ ...old, full_name: full_name }));
  };

  const emailHandler = (email) => {
    setData((old) => ({ ...old, email: email }));
  };

  const ordersHandler = (orders) => {
    setData((old) => ({ ...old, orders: orders }));
  };

  const spentHandler = (spent) => {
    setData((old) => ({ ...old, spent: spent }));
  };

  const validation = () => {
    if (
      data?.full_name?.length &&
      data?.email?.length &&
      data?.location?.length &&
      String(data?.orders?.length) &&
      String(data?.spent?.length) &&
      data?.type_product?.length
    ) {
      return true;
    } else {
      toast.error("Заполните все поля!!!");
      return false;
    }
  };

  const createCustomer = () => {
    const id = Math.floor(Math.random() * 5000);
    const date = moment(new Date()).format("YYYY-MM-DD");
    // setData((old) => ({ ...old, id: id, date: date }));
    validation() && dispatch(createHandler({ ...data, id: id, date: date }));
  };

  const editCustomer = () => {
    validation && dispatch(editCustomerHandler(data));
  };
  console.log(data);
  return (
    <ModalTemplate title="Customer" closeHandler={closeHandler}>
      <ToastContainer />
      <ModalStyled>
        <GridStyled gridColumns="1fr">
          <Label>Full Name</Label>
          <Input onChange={fullNameHandler} value={data.full_name} />
        </GridStyled>

        <GridStyled gridColumns="1fr">
          <Label>Email</Label>
          <Input onChange={emailHandler} value={data.email} />
        </GridStyled>

        <GridStyled gridColumns="1fr">
          <Label>Oders</Label>
          <Input onChange={ordersHandler} value={data.orders} />
        </GridStyled>

        <GridStyled gridColumns="1fr">
          <Label>Spent</Label>
          <Input onChange={spentHandler} value={data?.spent} />
        </GridStyled>

        <GridStyled gridColumns="1fr">
          <Label>Locations</Label>
          <Select
            value="State or province"
            handler={locationsHandler}
            options={LOCATIONS}
          />
        </GridStyled>

        <GridStyled gridColumns="1fr">
          <Label>Type Products</Label>
          <Select
            value="All product"
            handler={productsHandler}
            options={TYPEPRODUCTS}
          />
        </GridStyled>

        <GridStyled gridColumns="1fr 1fr">
          <Button handler={closeHandler} type="transparent">
            Cancel
          </Button>
          <Button handler={currentItem ? editCustomer : createCustomer}>
            Save
          </Button>
        </GridStyled>
      </ModalStyled>
    </ModalTemplate>
  );
};

export default CustomerModal;
