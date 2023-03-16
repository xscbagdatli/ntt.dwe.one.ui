import { useNavigate } from 'react-router-dom';
import React from 'react'
import LayoutCSS from "./styles.module.css"
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import { Box } from '@mui/system';

function Layout() {
    // const navigate = useNavigate();

    // // Function

    // function onHandleClickMenu(path) {
    //     navigate(path)
    // }

    return (
        <Box>
            <Header />
            <Navbar />
        </Box>
    );
};

export default Layout;
