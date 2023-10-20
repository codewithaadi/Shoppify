import {useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Component,Container,RightContainer,} from "./StyledComponent"
import { loadProductDetailStart } from '../../redux/actions/productAction';
import { RootState } from '../../redux/reducers/rootReducer';
import { Grid} from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetails from './ProductDetails';

const DetailView = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  const {productDetails} = useSelector((state:RootState)=>state.product);

  useEffect(()=>{
    if(id){
      dispatch(loadProductDetailStart(id));
    } 
  },[dispatch,id])

  return (
    <Component>
      <div></div>
      {
        productDetails && Object.keys(productDetails).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem 
            imageURL={productDetails.detailUrl} 
            />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetails 
            product={productDetails} 
            />
          </RightContainer>
        </Container>
      }
    </Component>
  )
}

export default DetailView