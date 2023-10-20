//MUI
import { Box,Grid, styled,Button,TableRow } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export const Component = styled(Box)`
    background : #f2f2f2;
    margin-top : 55px;
`
export const Container = styled(Grid)(({theme})=>({
    background : '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]:{
      margin: 0
    }
}))

export const RightContainer = styled(Grid)`
    margin-top : 30px;
    padding-left: 25px;
    &>p{
      margin-top: 10px;
    }
`

export const LeftContainer = styled(Box)(({theme})=>({
    minWidth: '40%',
    padding : '40px 0 0 80px',
    [theme.breakpoints.down('lg')] : {
        padding: '20px 40px'
    }
}));

export const Image = styled('img')({
    width: '95%',
    padding: '15px'
})

export const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')] : {
        width: '46%'
    },
    [theme.breakpoints.down('sm')] : {
        width: '48%'
    }
}))

export const SmallText = styled(Box)`
	font-size: 14px;
    vertical-align: baseline;
    &>p{
      font-size: 14px;
      margin-top: 10px;
    }
`
export const StyledBadge = styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`
export const ColumnText = styled(TableRow)`
    font-size: 14px;
	vertical-align: baseline;
    &>td{
        font-size: 14px;
		margin-top : 10px;
		border : none;
    }
`