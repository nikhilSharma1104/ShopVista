import { Box, Button, styled } from "@mui/material";
import {ShoppingCart as Cart, FlashOn as Flash} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/cartAction";

import { useState } from "react";

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down('lg')]: {
        padding: "20px 40px"
    }
}));

const Image = styled('img')({
    padding: "15px",
    width: "95%"
});

const StyledButton = styled(Button)(({theme}) => ({
    width: "48%",
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]: {
        width: "46%"
    },
    [theme.breakpoints.down('sm')]: {
        width: "48%"
    },
}));


const ActionItem = ({product}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const {id} = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate("/cart");
    }
    return (
        <LeftContainer>
            <Box style = {{padding: "15px 20px", border: "1px solid #f0f0f0", marginBottom: 10}}>
                <Image src = {product.detailUrl} alt="product_img" />
            </Box>
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{marginRight: 10, background: "#ff9f00"}}><Cart/>Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{background: "#fb541b"}}><Flash/>Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;