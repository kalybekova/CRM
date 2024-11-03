import React from "react";
import {
  Form,
  FormFild,
  FormLabel,
  Row,
  Title,
} from "../PersonalInformstion/styled";
import Input from "../../Atoms/Input/Input";
import { REGIONS } from "../PersonalInformstion/const";
import Select from "../../Atoms/Select/Select";
import {
  Buttons,
  Userinfo,
  UserInfoBlock,
  UserinfoContent,
  UserInfoDiv,
  UserInfoPr,
  UserInfoSubTitle,
  UserinfoTitle,
} from "../UserInfo/styled";
import Button from "../../Atoms/Button/Button";

const UserAddress = () => {
  return (
    <Userinfo>
      <UserinfoContent>
        <UserinfoTitle>Add an address so you can get paid</UserinfoTitle>
        <UserInfoPr>
          This will be used as your default business address. You can change it
          later
        </UserInfoPr>
        <UserInfoBlock>
          <UserInfoDiv>
            <UserInfoSubTitle>Country or region</UserInfoSubTitle>
            <Select />
          </UserInfoDiv>

          <Row>
            <FormFild>
              <FormLabel htmlFor="first-name">First Name</FormLabel>
              <Input id="first-name" />
            </FormFild>

            <FormFild>
              <FormLabel htmlFor="last-name">Last Name</FormLabel>
              <Input id="last-name" />
            </FormFild>
          </Row>

          <UserInfoDiv>
            <UserInfoSubTitle>Address</UserInfoSubTitle>
            <Select />
          </UserInfoDiv>

          <UserInfoDiv>
            <UserInfoSubTitle>City </UserInfoSubTitle>
            <Select />
          </UserInfoDiv>

          <Row>
            <FormFild>
              <UserInfoSubTitle>City </UserInfoSubTitle>
              <Select value="Please choose one" />
            </FormFild>

            <FormFild>
              <UserInfoSubTitle>Postal Code </UserInfoSubTitle>
              <Select value="Please choose one" />
            </FormFild>
          </Row>
        </UserInfoBlock>
      </UserinfoContent>
      <Buttons>
        <Button type="transparent-dark">Back</Button>
        <Button>Continue</Button>
      </Buttons>
    </Userinfo>
  );
};

export default UserAddress;
