import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import LayoutCSS from "./styles.module.css"
import Navbar from '../Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import { Box } from '@mui/material';

function Layout() {
    const [value, setValue] = useState(0);
    const [component, setComponent] = useState("");

    // const navigate = useNavigate();

    // // Function

    // function onHandleClickMenu(path) {
    //     navigate(path)
    // }

    return (
        <>
            <Navbar value={value} setValue={setValue} component={component} setComponent={setComponent} />
            <Box height="550px" margin="50px 0 50px 20px">
                {
                    value === 0 &&
                    <Homepage />
                }
            </Box>
        </>
    );
};

export default Layout;
