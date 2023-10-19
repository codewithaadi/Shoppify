import { Box, Button, styled} from "@mui/material";
export const imageURL =
  "https://cdn-icons-png.flaticon.com/512/3081/3081648.png";

export const Component = styled(Box)`
  width: 400px;
  margin: auto;
  margin-top :100px;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

export const Image = styled(`img`)({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "30px",
});

export const Wrapper = styled(Box)`
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
export const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  height: 48px;
`;
export const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  border-radius: 2px;
  height: 48px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;
