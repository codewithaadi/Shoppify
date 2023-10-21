import { LeftContainer,StyledButton, Image} from "./StyledComponent"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCartStart } from "../../redux/actions/cartAction";
import { iProduct } from "../../models/models";


interface ActionItemProps{
  productDetails : iProduct
}

const ActionItem = (props:ActionItemProps) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addItemToCart = ()=>{
    const payload = {id:props.productDetails.id,quantity:1}
    dispatch(addToCartStart(payload));
    navigate('/cart')
}

  return (
    <LeftContainer>
            <Box style={{ border: '1px solid #f0f0f0', padding: '15px 20px', width: '90%', marginBottom: 10}}>
                <Image src={props.productDetails.detailUrl} alt="product" />
            </Box>
            <StyledButton variant='contained' 
            onClick={()=> addItemToCart()} 
            style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant='contained' style={{ background: '#fb541b' }} 
            ><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
  )
}

export default ActionItem