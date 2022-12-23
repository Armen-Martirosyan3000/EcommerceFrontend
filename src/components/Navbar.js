import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined,Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import { resetCart } from "../redux/cartRedux";
import { useNavigate } from "react-router-dom";


//Navbar

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

//Navbar Left

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


//Language
// const Language = styled.span`
//   font-size: 15px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

//SearchContainer
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "25px",fontSize:"8px"})}
`;


//Navbar Center

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ marginLeft: "1px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
    color: #6550FF;
   font-size:45px;
  ${mobile({ fontSize: "18px" })}
`;

//Navbar Right

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 10, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.quantity)
  const isEmpty = function (obj) {  
    return Object.keys(obj).length === 0;
  }

  const user = useSelector((state) => state.user.currentUser)

  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate("/login")
    dispatch(resetCart());

  };
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{ color: "gray", fontSize: 15, "margin-left": 5}} />
          </SearchContainer> 
        </Left>
        <Center>
          <Logo>KAGADA</Logo>
        </Center>
        <Right>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <MenuItem>HOME</MenuItem>
          </Link>
          {
            isEmpty(user) &&
            <>
              <Link to={"/register"} style={{ textDecoration: 'none' }}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to={"/login"} style={{ textDecoration: 'none' }}>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          }
          {!isEmpty(user) && <MenuItem onClick={handleClick}>LOGOUT</MenuItem>}
          <Link to={"/cart"} >
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

