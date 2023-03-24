import React, { useEffect, useState } from 'react'
// import NavbarCss from './styles.module.css';
import { BsCheck2Square, BsPlusLg, BsListUl } from "react-icons/bs"
import { CgHomeAlt } from "react-icons/cg"
// import { BiHelpCircle } from "react-icons/bi"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
// import {Avatar, Divider, Link, Stack, Typography} from '@mui/material';
import { Link as RouteLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
    useNavigate,
} from 'react-router-dom';

export default function Navbar() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    let location = useLocation();

    const [value, setValue] = useState(0);

    const menu = [
        {
            title: "Homepage",
            path: "/",
            icon: <CgHomeAlt />
        },
        {
            title: "CreateRequest",
            path: "/create-request",
            icon: <BsPlusLg />
        },
        {
            title: "RequestsList",
            path: "/requests-list",
            icon: <BsListUl />
        },
        {
            title: "ProvidedRequestsByMe",
            path: "/provided-requests",
            icon: <BsCheck2Square />
        }
    ];

    const navbarTabStyle = (index) => {
        return {
            justifyContent: "flex-start",
            textTransform: "capitalize",
            borderRadius: "6px",
            maxWidth: "300px",
            minHeight: "50px",
            background: index === value && "#F43443",
            color: index === value ? "#FFF" : "unset"
        }
    }

    // const bottomTextStyle = () => {
    //     return {
    //         width: "230px",
    //         overflowWrap: "break-word",
    //         color: "#9DA6BA",
    //         fontSize: "14px"
    //     }
    // }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (location?.pathname === ("/")) {
            setValue(0);
        }
        else if (location?.pathname.includes("/create-request")) {
            setValue(1);
        }
        else if (location?.pathname.includes("/requests-list")) {
            setValue(2);
        }
        else if (location?.pathname.includes("/provided-requests")) {
            setValue(3);
        }
        // else if (location?.pathname === "/requests-list") {
        //     setValue(newValue);
        // }
    }, [location])


    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="242px"
            // height="500px"
            style={{ position: "fixed" }}
            marginTop="50px"
        >

            {/* <Box padding="20px 0 70px 70px">
                    <Link href="/" underline="none" color="unset" fontSize="22px">
                        <img src='./one-heart-logo.png' alt='logo' />
                    </Link>
                </Box> */}
            <Tabs orientation='vertical' value={value} onChange={handleChange}
                sx={{
                    '& .css-10d9dml-MuiTabs-indicator': {
                        width: "0px !important"
                    }
                }}>
                {
                    menu?.map((item, index) => (
                        <Tab className='navbar-tab' style={navbarTabStyle(index)} key={index} icon={item.icon} iconPosition="start" label={t(item.title)} to={item.path} component={RouteLink} />
                    ))
                }
            </Tabs>

            <Box style={{
                display: location?.pathname.includes("/request-detail") ? "flex" : "none",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "242px",
                marginTop: "20px"
            }}>
                <Box onClick={() => navigate(-1)}
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#E1474A", borderRadius: "30px",
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                        color: "#FFFFFF"
                    }}>
                    <ArrowBackIosNewIcon />
                </Box>
            </Box>
            {/* <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={{ height: "120px" }}>

                <Stack alignItems="center" direction="row" spacing={2} margin="14px">
                    <Link href="#" underline="none" color="unset" fontSize="22px">
                        <BiHelpCircle />
                    </Link>
                    <Link href="#" underline="none" color="#667085">
                        {t("Help")}
                    </Link>
                </Stack>
                <Box width="280px">
                    <Divider />
                </Box>
                <Box display="flex" alignItems="center" margin="14px 14px 0 14px">
                    <Avatar alt="avatar" src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg" />
                    <Box marginLeft="13px">
                        <p style={bottomTextStyle()}>Emre Taşdemir</p>
                        <p style={bottomTextStyle()}>emre.tasdemir@bs.nttdata.com</p>
                    </Box>
                </Box>
            </Box> */}
        </Box>

    )
}
