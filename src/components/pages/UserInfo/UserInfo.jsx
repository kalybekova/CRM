import React, { useEffect, useState } from "react";
import {
  Box,
  Buttons,
  Div,
  Userinfo,
  UserInfoBlock,
  UserinfoContent,
  UserInfoDiv,
  UserInfoPr,
  UserInfoSpan,
  UserInfoSubTitle,
  UserinfoTitle,
  UserinfoWebsite,
} from "./styled";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import Select from "../../Atoms/Select/Select";
import Button from "../../Atoms/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { sellingOptions } from "./const";
import { TYPEPRODUCTS, SPENTS } from "../Customers/const";
import { toast } from "react-toastify";

const UserInfo = () => {
  const location = useLocation();
  console.log(location.state);
  const nav = useNavigate();

  const [state, setState] = useState({
    selling: null,
    platform: [],
    spent: null,
    type_product: null,
  });

  useEffect(() => {
    if (!location.state) {
      toast.error("please enter all inputs in registration");
      nav("/user-id");
    }
  }, []);

  const handleSelect = (id, option) => {
    // console.log(id ,option);
    setState((old) => ({ ...old, [id]: option.label }));
  };

  const handleCheckbox = (id, status) => {
    let platform = state?.platform;
    let has = state?.platform.filter((item) => item?.id === id);
    if (!has.length) {
      platform = [...state.platform, { id, status }];
    } else {
      platform = platform?.filter((item) => item?.id !== id);
    }
    setState((old) => ({ ...old, platform }));
  };

  const handleSubmit = () => {
    if (
      state.selling == null ||
      state.spent == null ||
      state.type_product == null
    ) {
      toast.error("Выберите все данные!!!");
    } else {
      nav("/user-address", { second_step: { state } }, location.state);
    }
  };
  // console.log({ second_step: { state } }, location.state);

  return (
    <Userinfo>
      <UserinfoContent>
        <UserinfoTitle>Tell us about yourself</UserinfoTitle>
        <UserInfoPr>
          We’ll help you get started based on your responses
        </UserInfoPr>
        <UserInfoBlock>
          <UserInfoDiv>
            <UserInfoSubTitle>Are you already selling?</UserInfoSubTitle>
            <Select
              handler={(option) => handleSelect("selling", option)}
              options={sellingOptions}
            />
          </UserInfoDiv>

          <UserInfoDiv>
            <UserInfoSubTitle>
              Where else would you like to sell online?
            </UserInfoSubTitle>
            <UserInfoPr>
              With Saleline’s platform, you can reach customers across multiple
              sales channels and make more sales.
            </UserInfoPr>
            <Div>
              <Box>
                <UserinfoWebsite>
                  <Checkbox
                    handler={handleCheckbox}
                    item={{ id: "instagram" }}
                  />
                  <UserInfoSpan>Instagram</UserInfoSpan>
                </UserinfoWebsite>
                <UserinfoWebsite>
                  <Checkbox
                    handler={handleCheckbox}
                    item={{ id: "facebook" }}
                  />
                  <UserInfoSpan>Facebook</UserInfoSpan>
                </UserinfoWebsite>
              </Box>
              <Box>
                <UserinfoWebsite>
                  <Checkbox
                    handler={handleCheckbox}
                    item={{ id: "personal-website" }}
                  />
                  <UserInfoSpan>Personal Website</UserInfoSpan>
                </UserinfoWebsite>

                <UserinfoWebsite>
                  <Checkbox handler={handleCheckbox} item={{ id: "orders" }} />
                  <UserInfoSpan>Orders</UserInfoSpan>
                </UserinfoWebsite>
              </Box>
            </Div>
          </UserInfoDiv>

          <UserInfoDiv>
            <UserInfoSubTitle>What is your current revenue?</UserInfoSubTitle>
            <Select
              options={SPENTS}
              handler={(option) => handleSelect("spent", option)}
            />
          </UserInfoDiv>
          <UserInfoDiv>
            <UserInfoSubTitle>
              Which industry will you be operating in?
            </UserInfoSubTitle>
            <Select
              options={TYPEPRODUCTS}
              handler={(option) => handleSelect("type_product", option)}
            />
          </UserInfoDiv>
        </UserInfoBlock>
      </UserinfoContent>
      <Buttons>
        <Button type="transparent-dark">Skip</Button>
        <Button handler={handleSubmit}>Continue</Button>
      </Buttons>
    </Userinfo>
  );
};
export default UserInfo;
