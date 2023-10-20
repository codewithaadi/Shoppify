import { FC,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
//MUI
import { Box, styled } from "@mui/material";

//Components
import Header from "./header/Header";
import Banner from "./Banner";
import Top from "./Top";
import { loadProductsStart } from "../../redux/actions/productAction";
import Slide from "./Slide";

const Component = styled(Box)`
  margin-top: 28px;
  padding: 18px 0 10px 0;
  background: #f2f2f2;
`;

const Home: FC = () => {

  
  const {products} = useSelector((state:RootState)=>state.product)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadProductsStart());
  },[dispatch])

  return (
    <>
      <Header />
      <Component>
        <Top />
        <Slide 
        products={products} 
        title="Products of the Day" 
        />
        <Banner />
      </Component>
    </>
  );
};

export default Home;
