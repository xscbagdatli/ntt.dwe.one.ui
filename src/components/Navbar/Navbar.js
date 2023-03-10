import React, { useState } from 'react'
import './Navbar.css';
import { BsCheck2Square, BsPlusLg, BsListUl } from "react-icons/bs"
import { CgHomeAlt } from "react-icons/cg"
import { BiHelpCircle } from "react-icons/bi"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import { Avatar, Divider, Link, Stack, Typography } from '@mui/material';

export default function Navbar({
    value,
    setValue,
    component,
    setComponent
}) {

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const menu = [
        {
            title: "Anasayfa",
            path: "/",
            icon: <CgHomeAlt />
        },
        {
            title: "Talep Oluşturma",
            path: "/request-create",
            icon: <BsPlusLg />
        },
        {
            title: "Talep Listesi",
            path: "/request-list",
            icon: <BsListUl />
        },
        {
            title: "Karşıladığım Talepler",
            path: "/receive-request",
            icon: <BsCheck2Square />
        }
    ];

    const navbarTabStyle = (index) => {
        return {
            justifyContent: "flex-start",
            textTransform: "capitalize",
            borderRadius: "6px",
            minHeight: "50px",
            background: index === value && "#B42318",
            color: index === value ? "#FFF" : "unset"
        }
    }

    const bottomTextStyle = () => {
        return {
            width: "230px",
            overflowWrap: "break-word",
            color: "#9DA6BA",
            fontSize: "14px"
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            setComponent(newValue);
        }
        else if (newValue === 1) {
            setComponent(newValue);
        }
        else if (newValue === 2) {
            setComponent(newValue);
        }
        else if (newValue === 3) {
            setComponent(newValue);
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="21%"
        >
            <Box>
                <Box display="flex" alignItems="center" justifyContent="center" paddingY="33px"> <img src='./one-heart-logo.png' alt='logo' /></Box>
                <Tabs orientation='vertical' value={value} onChange={handleChange}>
                    {
                        menu?.map((item, index) => (
                            <Tab className='navbar-tab' style={navbarTabStyle(index)} key={index} icon={item.icon} iconPosition="start" label={item.title} />
                        ))
                    }
                </Tabs>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={{ height: "120px" }}>

                <Stack alignItems="center" direction="row" spacing={2} margin="14px">
                    <Link href="#" underline="none" color="unset" fontSize="22px">
                        <BiHelpCircle />
                    </Link>
                    <Link href="#" underline="none" color="#667085">
                        Yardım
                    </Link>
                </Stack>
                <Divider />
                <Box display="flex" alignItems="center" margin="14px 14px 0 14px">
                    <Avatar alt="avatar" src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg" />
                    <Box marginLeft="13px">
                        <p style={bottomTextStyle()}>Emre Taşdemir</p>
                        <p style={bottomTextStyle()}>emre.tasdemir@bs.nttdata.com</p>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}
