import React, { useState } from "react";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  Container,
  ErrorText,
  ForgotPassword,
  Form,
  GetStarted,
  // LoginContent,
  SocialButton,
  SocialLogin,
  Span,
  Title,
} from "./styled";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import { Apple, Google } from "../../../assets/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../../Store/Slice/UsersSlice";
import { useNavigate } from "react-router-dom";
import AuthTemplate from "../../Templaites/AuthTemplate/AuthTemplate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInput } from "../../../Hooks/useInput";
import { validateEmail, validatePassword } from "../../../Utils/validation";

const LoginAccount = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const users = useSelector((state) => state.rootReducer?.usersSlice?.users);

  const email = useInput("", validateEmail);
  const password = useInput("", validatePassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = email.validate();
    const validPassword = password.validate();

    if (validEmail && validPassword) {
      const user = users?.find(
        (user) => user.email === email.value && user.password === password.value
      );
      if (user) {
        dispatch(setCurrentUser(user));
        nav("/");
      }
      //  else {
      //   toast.error("Invalid email or password");
      // }
    }
  };

  return (
    <AuthTemplate>
      <ToastContainer />
      <Container>
        <Form>
          <Title>Login to your account</Title>
          <Input onChange={email.handleChange} placeholder="email" />
          {email.error ? <ErrorText>Email is not valid</ErrorText> : null}
          <Input
            onChange={password.handleChange}
            placeholder="Password"
            type="password"
          />
          {password.error ? (
            <ErrorText>Passwor length must be greater than 5 </ErrorText>
          ) : null}

          <CheckboxContainer>
            <CheckboxLabel>
              <Checkbox type="checkbox" />
              {/* <Checkbox item={{ id: "r/emember" }} /> */}
              Remember me
            </CheckboxLabel>
            <ForgotPassword href="#">Forgot Password?</ForgotPassword>
          </CheckboxContainer>
          <Button handler={handleSubmit}>Sign in with email</Button>
          <Span>Or login with</Span>
          <SocialLogin>
            <SocialButton>
              <Google />
              Google
            </SocialButton>
            <SocialButton>
              <Apple />
              Apple
            </SocialButton>
          </SocialLogin>
          <div>
            Don’t have an account? <GetStarted href="#">Get Started</GetStarted>
          </div>
        </Form>
      </Container>
    </AuthTemplate>
  );
};

export default LoginAccount;
