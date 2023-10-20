import { FC, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Box, Typography } from "@mui/material";
import {
  Component,
  Image,
  LoginButton,
  SignupButton,
  Wrapper,
  imageURL,
} from "./StyledComponents";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputText } from "../form-components/FormInputText";
import { toast } from "react-toastify";

import { userSignupStart,userLoginStart } from "../../redux/actions/userAction";
import { RootState } from "../../redux/reducers/rootReducer";

interface IFormInputs {
  name?: string;
  email: string;
  password: string;
  phone?: string;
}

const Logins: FC = () => {
  const {
    handleSubmit,
    control,
    reset,
  } = useForm<IFormInputs>();

  const dispatch = useDispatch();
  const {error,isUserLogged} = useSelector((state:RootState)=>state.user);
  

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    if(account==='login'){
        dispatch(userLoginStart(data));
        if(isUserLogged){
          toast.success('User Succesfully Login');
        }else{
          toast.error(error);
        }
    }else{
        dispatch(userSignupStart(data));
        toast.success('User Succesfully Signup');
        toggleSignup();
    }
  };
  const [account, toggleAccount] = useState("login");

  const toggleSignup = () => {
    reset();
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  return (
    <Component>
      <Box>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Image src={imageURL} alt="loginLogo" />
          <Typography variant="h4" style={{textAlign:'center'}}>Shoppify</Typography>
          {account === "login" ? (
            <Wrapper>
              <FormInputText
                name="username"
                label="Enter Username"
                control={control}
                rules={{ required: "Username is required" }}
              />
              <FormInputText
                name="password"
                label="Enter Password"
                control={control}
                rules={{ required: "Password is required" }}
              />
              <LoginButton
                type="submit"
                variant="contained"
              >
                Login
              </LoginButton>

              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <SignupButton onClick={() => toggleSignup()}>
                Create an Account
              </SignupButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <FormInputText name="username" label="Enter User Name" control={control}  rules={{ required: "Name is required" }} />
        
              <FormInputText
                name="email"
                label="Enter Email"
                control={control}
                rules={{ required: "Email is required" }}
              />

              <FormInputText
                name="password"
                label="Enter Password"
                control={control}
                rules={{ required: "Password is required" }}
              />
               
               <FormInputText
                name="phone"
                label="Enter Phone"
                control={control}
                rules={{ required: "Phone is required" }}
              />
    
              <SignupButton
                type="submit"
              >
                Signup
              </SignupButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <LoginButton variant="contained" onClick={() => toggleSignup()}>
                Already have an account
              </LoginButton>
            </Wrapper>
          )}
        </form>
      </Box>
    </Component>
  );
};

export default Logins;
