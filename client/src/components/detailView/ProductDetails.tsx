import { Box, Typography, Table, TableBody,TableCell } from '@mui/material';
import { SmallText,StyledBadge,ColumnText } from './StyledComponent';
import { iProduct } from '../../models/models';

interface Props{
    product:iProduct
}

const ProductDetails = (props:Props) => {
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
	return (
		<>
			<Typography> {props.product.title.longTitle} </Typography>
			<Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}> 8 Rating & 1 Reviews
				<Box>
					<img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt='f-assured' style={{ width: 77, marginLeft: 20 }} />
				</Box>
			</Typography>
			<Typography>
				<Box component='span' style={{ fontSize: 28 }}>₹{props.product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
				<Box component='span' style={{ color: '#878787' }}><s>{props.product.price.mrp}</s></Box>&nbsp;&nbsp;&nbsp;
				<Box component='span' style={{ color: '#388E3C' }}>{props.product.price.discount}</Box>
			</Typography>
			<Typography>Available offers</Typography>
			<SmallText >
				<Typography><StyledBadge />Special PriceGet at flat ₹549</Typography>
				<Typography><StyledBadge />Bank Offer10% off on ICICI Bank Credit Card Transactions, up to ₹1250, on orders of ₹5,000 and above T&C</Typography>
				<Typography><StyledBadge />Bank Offer10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above T&C</Typography>
				<Typography><StyledBadge />Buy this Product and Get Extra ₹500 Off on Bikes & Scooters T&C</Typography>
				<Typography><StyledBadge />Bank Offer5% Cashback on Flipkart Axis Bank Card</Typography>
			</SmallText>
			<Table>
				<TableBody>
					<ColumnText>
						<TableCell style={{ color: '#878787' }}>Delivery</TableCell>
						<TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
					</ColumnText>
					<ColumnText>
						<TableCell style={{ color: '#878787' }}>Warranty</TableCell>
						<TableCell>No Warranty</TableCell>
					</ColumnText>
					<ColumnText>
						<TableCell style={{ color: '#878787' }}>Seller</TableCell>
						<TableCell>
							<Box component='span'  style={{ color: '#2874f0' }}>SuperComNet</Box>
							<Typography>GST Invoice Available</Typography>
							<Typography>View more sellers starting from ₹{props.product.price.cost}</Typography>
						</TableCell>
					</ColumnText>
					{props.product.description!="" && <ColumnText>
						<TableCell style={{ color: '#878787' }}>Description</TableCell>
						<TableCell style={{ fontWeight: 600 }}>{props.product.description}</TableCell>
					</ColumnText>}
				</TableBody>
			</Table>
		</>
  )
}

export default ProductDetails