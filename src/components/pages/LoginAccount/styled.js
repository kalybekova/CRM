import styled from "styled-components";

export const LoginContent = styled.div``;

export const Container = styled.div`
width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f7fa; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const ForgotPassword = styled.a`
  color: #00aaff;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Span = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialButton = styled.button`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 12px;
  margin: 0 5px;
  background-color: #fff;
  color: #444;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const GetStarted = styled.a`
  color: #00cc99;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;



export const ErrorText =styled.p`
color: red;
font-size: 12px;
margin-top: 5px;
`