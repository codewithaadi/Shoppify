import {
  AppBar,
//   Toolbar,
  styled,
  Box,
  InputBase,
  IconButton,
//   Drawer,
  List,
//   ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';

export const StyledHeader = styled(AppBar)`
  background: #219C90;
  height: 55px;
`;

export const SearchContainer = styled(Box)`
    background: #fff;
    width:38%;
    border-radius: 2px;
    margin-left:15px;
    display:flex;
`;

export const SearchIconWrapper = styled(Box)`
    color:blue;
    padding: 4px;
`
export const InputSearchBase = styled(InputBase)`
    width:100%;
    padding-left:20px;
    font-size: unset;
`
export const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 38px;
    width: 560px;
`
export const Component = styled(Link)`
    margin-left: 10%;
    margin-right:3%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`


export const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 8% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

export const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

export const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

export const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '100px !important',
        fontSize: '16px',
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))