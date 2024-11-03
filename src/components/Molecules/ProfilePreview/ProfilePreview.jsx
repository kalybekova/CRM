import React from "react";
import {
  ProfileCompanyName,
  ProfileFullName,
  ProfileImage,
  ProfileStyled,
  ProfileText,
} from "./styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfilePreview = () => {
  const nav = useNavigate();

  const user = useSelector(
    (state) => state.rootReducer?.usersSlice?.carrent_user
  );
  console.log(user);

  return (
    <div onClick={() => nav("/my-profile")}>
      <ProfileStyled>
        <ProfileImage src={user?.avatar ?? "/assets/images/user.png"} />
        <ProfileText>
          <ProfileFullName>
            {user?.first_name} {user?.last_name}
          </ProfileFullName>
          <ProfileCompanyName>Makostore</ProfileCompanyName>
        </ProfileText>
      </ProfileStyled>
    </div>
  );
};

export default ProfilePreview;
