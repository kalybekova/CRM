import React, { useState } from "react";
import {
  Form,
  FormFild,
  FormLabel,
  HR,
  Row,
  Title,
  UploaderActions,
  UploaderAdd,
  UploaderBlock,
  UploaderDelete,
  UploaderImage,
  UploaderInput,
  UploaderText,
} from "./styled";
import { BlockContainer } from "../../../Base/styled";
import Button from "../../Atoms/Button/Button";
import Select from "../../Atoms/Select/Select";
import { REGIONS } from "./const";
import Input from "../../Atoms/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../../Store/Slice/UsersSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorText } from "../LoginAccount/styled";

const PersonalInformstion = () => {
  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.rootReducer?.usersSlice?.carrent_user
  );

  const [image, setImage] = useState(user?.avatar ?? null);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);

  const [data, setData] = useState(user);

  console.log(data);

  function handlerImage(e) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
        dispatch(setCurrentUser({ ...data, avatar: event.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleInput = (value, id) => {
    setData((old) => ({ ...old, [id]: value }));
  };

  const handlerRemoveImage = () => {
    setImage(null);
    dispatch(setCurrentUser({ ...data, avatar: null }));
  };

  const handlerRegion = (option) => {
    setCurrentRegion(option);
    setData((old) => ({ ...old, country: option?.label }));
  };
  const handlerCity = (option) => {
    setCurrentCity(option);
    setData((old) => ({ ...old, city: option?.label }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.first_name === "" ||
      data.last_name === "" ||
      data.email === "" ||
      data.city === "" ||
      data.address === ""

      // data.phone === Number ||
      // data.postal_code.length < 5
    ) {
      toast.error("Заполните все поля!!!");
    } else {
      dispatch(setCurrentUser({ ...data, avatar: image }));
      toast.success("Успешно");
    }
  };

  return (
    <BlockContainer padding="24px 32px">
      <ToastContainer />

      <Title>Personal Information</Title>
      <HR />
      <UploaderBlock>
        <FormLabel htmlFor="upload-photo">
          <UploaderImage src={image} />
        </FormLabel>
        <UploaderInput onChange={handlerImage} id="upload-photo" type="file" />

        <UploaderBlock direction="column">
          <UploaderText>
            We only support .JPG, .JPEG, or .PNG file.
          </UploaderText>
          <UploaderActions>
            <UploaderAdd htmlFor="upload-photo">Upload your photo</UploaderAdd>
            <UploaderDelete>
              <Button handler={handlerRemoveImage} type="transparent-dark">
                Delete
              </Button>
            </UploaderDelete>
          </UploaderActions>
        </UploaderBlock>
      </UploaderBlock>

      <Form>
        <Row>
          <FormFild>
            <FormLabel htmlFor="first-name">First Name</FormLabel>
            <Input
              onChange={(value) => handleInput(value, "first_name")}
              value={data.first_name}
              id="first-name"
            />
          </FormFild>

          <FormFild>
            <FormLabel htmlFor="last-name">Last Name</FormLabel>
            <Input
              onChange={(value) => handleInput(value, "last_name")}
              value={data.last_name}
              id="last-name"
            />
          </FormFild>
        </Row>

        <Row>
          <FormFild>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              onChange={(value) => handleInput(value, "email")}
              value={data.email}
              id="email"
            />
          </FormFild>

          <FormFild>
            <FormLabel htmlFor="phone-number">
              Phone Number (Optional)
            </FormLabel>
            <Input
              onChange={(value) => handleInput(value, "phone number")}
              value={data.phone}
              id="phone-number"
            />
          </FormFild>
        </Row>

        <Title>Personal Address</Title>

        <Row>
          <FormFild>
            <FormLabel>Country or Region</FormLabel>
            <Select
              value={data?.country}
              options={REGIONS}
              handler={handlerRegion}
            />
          </FormFild>

          <FormFild>
            <FormLabel>City</FormLabel>
            <Select
              value={data?.city}
              options={currentRegion?.cities ?? []}
              handler={handlerCity}
            />
          </FormFild>
        </Row>

        <Row>
          <FormFild>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              onChange={(value) => handleInput(value, "address")}
              value={data.address}
              id="address"
            />
          </FormFild>

          <FormFild>
            <FormLabel htmlFor="postal-code">Postal Code</FormLabel>
            <Input
              onChange={(value) => handleInput(value, "postal_code")}
              value={data.postal_code}
              id="postal-code"
            />
            {data.postal_code.length < 5 || data.postal_code.length > 5 ? (
              <ErrorText>length should be 5</ErrorText>
            ) : null}
          </FormFild>
        </Row>
        <Button handler={handleSubmit}>Save</Button>
      </Form>
    </BlockContainer>
  );
};

export default PersonalInformstion;
