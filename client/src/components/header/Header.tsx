import { FC } from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import {
  StyledHeader,
  Component,
  CustomButtonWrapper,
  Container,
  Wrapper
} from "./StyledComponents";
import { Toolbar, Box, Typography,Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { RootState } from "../../redux/reducers/rootReducer";
import Profile from "./Profile";

const Header: FC = () => {

  const {user} = useSelector((state:RootState)=>state);
  console.log(user);

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 56 }}>
        <Component to="/">
          <Box style={{ display: "flex" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081648.png"
              alt="Shoppify Logo"
              style={{ width: 40, marginRight: 20 }}
            />
            <Typography variant="h4">Shoppify</Typography>
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <Wrapper>
            <Profile user={user}/>
            <Container to="/cart">
              <Badge 
              // badgeContent={cartItems?.length} 
              color="secondary">
                <ShoppingCartIcon />
              </Badge>
              <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
          </Wrapper>
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
