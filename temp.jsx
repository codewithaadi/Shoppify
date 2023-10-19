import { useState } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../form-components/FormInputText";
import { toast } from "react-toastify";
import { FieldValues } from "react-hook-form";

const imageURL =
  "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled(`img`)({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    /* This is for the Textfield which is actually a Div , Check in Inspect Element and For Button also*/
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  height: 48px;
`;
const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  border-radius: 2px;
  height: 48px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

export default function Login() {
  const { control, handleSubmit } = useForm();

  const [account, toggleAccount] = useState("login");

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onSubmit = (data: FieldValues) => {
    toast.success('Inside On Sunmit');
    console.log(data);
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="loginLogo" />
        {account === "login" ? (
          <Wrapper>
            <FormInputText
              name="username"
              control={control}
              label="Enter Username"
            />
            <FormInputText
              name="password"
              control={control}
              label="Enter Password"
            />
            <LoginButton variant="contained" onClick={handleSubmit(onSubmit)}>
              Login
            </LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <SignupButton onClick={() => toggleSignup()}>
              Create an Account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <FormInputText name="name" control={control} label="Enter name" />
            <FormInputText
              name="username"
              control={control}
              label="Enter Username"
            />
            <FormInputText
              name="password"
              control={control}
              label="Enter Password"
            />
            <SignupButton onClick={handleSubmit(onSubmit)}>Signup</SignupButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
}
