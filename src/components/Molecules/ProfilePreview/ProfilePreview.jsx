import React from "react";
import {
  ProfileCompanyName,
  ProfileFullName,
  ProfileImage,
  ProfileStyled,
  ProfileText,
} from "./styled";

const ProfilePreview = () => {
  return (
    <ProfileStyled>
      <ProfileImage src="./assets/images/avatar.png" />
      <ProfileText>
        <ProfileFullName>Tynisha Obey</ProfileFullName>
        <ProfileCompanyName>Makostore</ProfileCompanyName>
      </ProfileText>
    </ProfileStyled>
  );
};

export default ProfilePreview;
