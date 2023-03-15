import { useNavigate } from 'react-router-dom';
import React from 'react'
import LayoutCSS from "./styles.module.css"
import Navbar from '../Layout/Navbar/Navbar';

function Layout() {
    // const navigate = useNavigate();

    // // Function

    // function onHandleClickMenu(path) {
    //     navigate(path)
    // }

    return (
        <Navbar />
    );
};

export default Layout;
