import { useState, useContext } from "react";
import {Box, Button, Typography, styled, Badge } from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";

import { DataContext } from "../../context/dataProvider";

//components
import LoginDialog from "../login/loginDialog";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({theme}) => ({
    display: "flex",
    margin: "0 3% 0 auto",
    "& > *": {
        marginRight: 40,
        fontSize: 16,
        alignItems: "center"
    },
    [theme.breakpoints.down('md')]: {
        display: "block",
    }
}));

const Container = styled(Link)(({theme}) => ({
    display: "flex",
    textDecoration: "none",
    color: "#fff",
    [theme.breakpoints.down('md')]: {
        display: "block",
    }
}))


const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`
const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const {account, setAccount} = useContext(DataContext);

    const openDialog = ()=>{
        setOpen(true);
    }

    const { cartItems } = useSelector(state => state.cart);
    return(
        <Wrapper>
            {
                account ? <Profile account = {account} setAccount={setAccount} />:
                <LoginButton variant="contained" onClick={()=> openDialog()}>Login</LoginButton>
            }
            <Typography style={{marginTop: 3, width: 135, marginLeft: 30}}>Become a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>
            <Container to="/cart">
                <Badge badgeContent = {cartItems?.length} color="secondary">
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Container>
            <LoginDialog open = {open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;