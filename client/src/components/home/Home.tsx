import { FC } from "react";

//MUI
import { Box, styled } from "@mui/material";

//Components
import Header from "./header/Header";
import Banner from "./Banner";
import Top from "./Top";
// import Slide from "./Slide";

const Component = styled(Box)`
  margin-top: 28px;
  padding: 18px 0 10px 0;
  background: #f2f2f2;
`;

const Home: FC = () => {
  return (
    <>
      <Header />
      <Component>
        <Top />
        {/* <Slide 
        // products={products} 
        title="Products of the Day" 
        /> */}
        <Banner />
      </Component>
    </>
  );
};

export default Home;
