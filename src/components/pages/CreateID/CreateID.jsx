import React, { useState } from "react";
import AuthTemplate from "../../Templaites/AuthTemplate/AuthTemplate";
import {
  // Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  Container,
  ErrorText,
  Form,
  GetStarted,
  SocialButton,
  SocialLogin,
  Span,
  Title,
} from "../LoginAccount/styled";
import Input from "../../Atoms/Input/Input";
import { Apple, Google } from "../../../assets/Icons";
import Button from "../../Atoms/Button/Button";
import { FormFild, Row } from "../PersonalInformstion/styled";
import {
  validateEmail,
  validatePassword,
  validateText,
} from "../../../Utils/validation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../../Hooks/useInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "../../Atoms/Checkbox/Checkbox";

const CreateID = () => {
  const users = useSelector((state) => state.rootReducer?.usersSlice?.users);
  const nav = useNavigate();

  const first_name = useInput("", validateText);
  const last_name = useInput("", validateText);
  const email = useInput("", validateEmail);
  const password = useInput("", validatePassword);
  const [terms, setTerms] = useState(false);

  const searchSimilarUser = () => {
    const similar = users?.find((user) => email.value === user.email);
    return !!similar;
  };

  const handleCheckbox = (id, status) => {
    setTerms(status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validFirstName = first_name.validate();
    const validLastName = last_name.validate();
    const validEmail = email.validate();
    const validPassword = password.validate();

    if (validFirstName && validLastName && validPassword && validEmail) {
      if (!terms) {
        toast.error("Please read and check terms");
        return;
      }
      if (!searchSimilarUser()) {
        const first_step = {
          first_name: first_name.value,
          last_name: last_name.value,
          email: email.value,
          password: password.value,
        };
        nav("/user-information", { state: { first_step } });
      } else {
        alert("This email is already");
      }
    } else {
      toast.error("Please enter correct all inputs");
    }
  };
  return (
    <AuthTemplate>
      <ToastContainer />

      <Container>
        <Form>
          <Title>Create your Salesline ID</Title>

          <Row>
            <FormFild>
              <Input
                onChange={first_name.handleChange}
                placeholder="First Name"
                id="first-name"
              />
              {first_name.error ? (
                <ErrorText>Firt name length must be greater then 2</ErrorText>
              ) : null}
            </FormFild>

            <FormFild>
              <Input
                onChange={last_name.handleChange}
                placeholder="Last name"
                id="last-name"
              />
              {last_name.error ? (
                <ErrorText>Last name length must be greater then 2</ErrorText>
              ) : null}
            </FormFild>
          </Row>

          <Input onChange={email.handleChange} placeholder="email" />
          <ErrorText>Email is not valid</ErrorText>
          <Input
            onChange={password.handleChange}
            placeholder="Password"
            type="password"
          />
          <ErrorText>Passwor length must be greater than 5 </ErrorText>

          <CheckboxContainer>
            <CheckboxLabel>
              {/* <Checkbox type="checkbox" /> */}
              <Checkbox handler={handleCheckbox} item={{ id: "terms" }} />
              By proceeding, you agree to the
              <GetStarted href="#">Terms and Conditions</GetStarted>
            </CheckboxLabel>
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
            Already have an account?
            <GetStarted href="#">Sign In</GetStarted>
          </div>
        </Form>
      </Container>
    </AuthTemplate>
  );
};

export default CreateID;
