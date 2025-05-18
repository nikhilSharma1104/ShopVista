
import {Box, TableBody, Table, TableCell,TableRow, Typography, styled} from "@mui/material";
import  {LocalOffer as Badge} from "@mui/icons-material";

const SmallText = styled(Box)`
    vertical-align : baseline;
    & > p{
        font-size: 14px;
        margin-Top: 10px;
    }
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    margin-top: 10px;
    & > td{
        font-size: 14px;
        border: none;
    }

`
const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: green;
    width: 20px;
`;

const ProductDetail = ({product}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adurl = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5*24*60*60*1000));

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5, color: "#878787", fontSize: 14}}>
                8 Ratings & 1 Reviews
                <Box component = "span"><img src={fassured} style={{width: 77, marginLeft: 20}} alt="assured"/></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color: "#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color: "green"}}>{product.price.discount} off</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Sign-up for ShopVista Pay Later & get free Times Prime Benefits worth ₹20,000* Know More</Typography>
                <Typography><StyledBadge />Get extra 6% off (price inclusive of cashback/coupon) T&C</Typography>
                <Typography><StyledBadge />5% Cashback on ShopVista Axis Bank Card T&C</Typography>
                <Typography><StyledBadge />10% Instant Discount on SBI Credit Card EMI Txns, up to ₹1750, on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge />Extra ₹750 off on SBI Credit Card and Credit EMI Txns on Net Cart Value of ₹24,990 and above T&C</Typography>
                <Typography><StyledBadge />No cost EMI ₹1,388/month. Standard EMI also available</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Warranty</TableCell>
                        <TableCell style={{fontWeight: 600}}>6 Months Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{color: "#2774f0"}}>NikhilComNet</Box>
                            <Typography>GST Invoice Available</Typography>
                            <Typography>View More Sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adurl} alt="supercoins" style={{width: 390}} />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Desciption</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}


export default ProductDetail;