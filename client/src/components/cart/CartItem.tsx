import { Typography, Box, styled, Button } from '@mui/material'
import { useDispatch } from 'react-redux';

//CommonUtils
import { removeFromCartStart } from '../../redux/actions/cartAction';

const addEllipsis = (text:string) =>{
    if(text.length> 50){
        return text.substring(0,50) + '...';
    }
    return text;
}

//CSS
const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display:flex;
    background: #fff;
`
const LeftComponent = styled(Box)`
    margin: 20px;
    display:flex;
    flex-direction: column;
`
const SellerText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`
const RemoveButton = styled(Button)`
    margin-top : 59px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`

const CartItem = (props:any) => {
    
  const dispatch = useDispatch();

  const removeItemFromCart = (id:string)=>{
    dispatch(removeFromCartStart(id));
  }

  return (
    <Component>
            <LeftComponent>
                <img src={props.item.url} alt="product" style={{height: 160,width: 150}}/>
            </LeftComponent>
            <Box style= {{margin: 20}}>
                <Typography>{addEllipsis(props.item.title.longTitle)}</Typography>
                <SellerText>Seller: RetailNet
                </SellerText>
                <Typography style={{margin: '20px 0'}}>
                    <Box component='span' style={{ fontWeight: 550, fontSize:22 }}>₹{props.item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{ color: '#878787' }}><s>{props.item.price.mrp}</s></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{ color: '#388E3C' }}>{props.item.price.discount}</Box>
                </Typography>
                <RemoveButton onClick={()=> removeItemFromCart(props.item.id)}>Remove</RemoveButton>
            </Box>
        </Component>
  )
}

export default CartItem