import React from "react";
import { Outlet } from "react-router-dom";
import MainTemplate from "../../Templaites/MainTemplate/MainTemplate";
import {
  LinkIcon,
  LinkKP,
  Links,
  Link,
  LinkText,
  LinkTitle,
  Content,
} from "./styled";
import {
  MyProfileCard,
  MyProfilePrinter,
  MyProfileStore,
  MyProfileTablerLink,
  MyProfileUser,
} from "../../../assets/Icons";
import MyProfileLock from "../../../assets/Icons/MyProfileLock";
import { FlexBlock } from "../../../Base/styled";

const MyProfile = () => {
  return (
    <MainTemplate title={"My Profile"}>
      <FlexBlock>
        <Links>
          <Link to={"personal-information"}>
            <LinkIcon>
              <MyProfileUser />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Personal Informations</LinkTitle>
              <LinkKP>Est arcu pharetra proin pellentesque</LinkKP>
            </LinkText>
          </Link>

          <Link to={"login-service"}>
            <LinkIcon>
              <MyProfileLock />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Login Services</LinkTitle>
              <LinkKP>Est arcu pharetra proin pellentesque</LinkKP>
            </LinkText>
          </Link>

          <Link to={"store-details"}>
            <LinkIcon>
              <MyProfileStore />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Store Details</LinkTitle>
              <LinkKP>Est arcu pharetra proin pellentesque</LinkKP>
            </LinkText>
          </Link>

          <Link to={"account"}>
            <LinkIcon>
              <MyProfileCard />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Account</LinkTitle>
              <LinkKP>Est arcu pharetra proin pellentesque</LinkKP>
            </LinkText>
          </Link>

          <Link to={"payment-billing"}>
            <LinkIcon>
              <MyProfileStore />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Payment & Billing</LinkTitle>
              <LinkKP>Est arcu pharetra proin pellentesque</LinkKP>
            </LinkText>
          </Link>

          <Link to={"taxes-dutaies"}>
            <LinkIcon>
              <MyProfilePrinter />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Taxes & Dutaies</LinkTitle>
              <LinkKP>Est arcu pharetra proin pellentesque</LinkKP>
            </LinkText>
          </Link>

          <Link to={"link-account"}>
            <LinkIcon>
              <MyProfileTablerLink />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Link Account</LinkTitle>
              <LinkKP>Est arcu pharetra proin pellentesque</LinkKP>
            </LinkText>
          </Link>
        </Links>
        <Content>
          <Outlet />
        </Content>
      </FlexBlock>
    </MainTemplate>
  );
};

export default MyProfile;
