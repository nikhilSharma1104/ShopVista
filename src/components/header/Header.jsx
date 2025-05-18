import { useState } from 'react';

import {AppBar, Toolbar, Typography, Box, Drawer, List, ListItemButton, IconButton, styled} from '@mui/material';
import {Menu} from "@mui/icons-material";

import { Link } from 'react-router-dom';
//components
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-Decoration: none;
    color: inherit;
`

const Subheading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)(({theme}) => ({
    margin: "0 5% 0 auto",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}));
    
const MenuButton = styled(IconButton)(({theme}) => ({
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "block",
    }
}));
const Header = ()=>{
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style = {{width: 200}} onClick = {handleClose}>
            <List>
                <ListItemButton>
                    <CustomButtons />
                </ListItemButton>
            </List>
        </Box>
    )

    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <MenuButton color = "inherit" onClick = {handleOpen}>
                    <Menu />
                </MenuButton>

                <Drawer open = {open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to = "/" >
                    <Typography style={{fontSize: 18, fontWeight: 800, fontStyle: "italic"}}>ShopVista</Typography>
                    <Box style={{display : "flex"}}>
                        <Subheading>Explore&nbsp;
                            <Box component="span" style = {{color : "#FFE500"}}>Plus</Box>
                        </Subheading>
                        <PlusImage src = {subURL} alt = "sublogo"/>
                    </Box>
                </Component>

                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;