import { FC } from "react";
import {styled } from "@mui/material";
import topImage from '../../constants/top.png'

const Image = styled("img")(({ theme }) => ({
  marginTop: 10,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: "120px",
  },
}));

const Top: FC = () => {
  return (
    <>
      <Image
        src={topImage}
        alt="topSection"
      />
    </>
  );
};

export default Top;
