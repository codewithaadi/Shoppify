import { LeftContainer,StyledButton, Image} from "./StyledComponent"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {Box } from '@mui/material';

interface ActionItemProps{
    imageURL : string;
}

const ActionItem = (props:ActionItemProps) => {
  return (
    <LeftContainer>
            <Box style={{ border: '1px solid #f0f0f0', padding: '15px 20px', width: '90%', marginBottom: 10}}>
                <Image src={props.imageURL} alt="product" />
            </Box>
            <StyledButton variant='contained' 
            // onClick={()=> addItemToCart()} 
            style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant='contained' style={{ background: '#fb541b' }} 
            // onClick={()=>buyNow()}
            ><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
  )
}

export default ActionItem