import React from 'react'
import HeaderCss from './styles.module.css';
import { BsCheck2Square, BsPlusLg, BsListUl } from "react-icons/bs"
import { CgHomeAlt } from "react-icons/cg"
import { BiHelpCircle } from "react-icons/bi"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import { Button, Avatar, Divider, Link, Stack, Typography } from '@mui/material';
import { Link as RouteLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
// import { Link } from 'react-router-dom';
export default function Header({

}) {
    const { t } = useTranslation()

    const handleLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    const bottomTextStyle = () => {
        return {
            width: "230px",
            overflowWrap: "break-word",
            color: "#9DA6BA",
            fontSize: "14px"
        }
    }


    return (
        <Box style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
            zIndex: "100",
            background: "white",
            position: "sticky",
            top: "0",
        }}>
            <Box
                padding="20px 0 20px 50px"
            >
                <Link href="/" underline="none" color="unset" fontSize="22px">
                    <img src='../one-heart-logo.png' alt='logo' />
                </Link>
            </Box>
            {/* <Box style={{ display: "flex" }}>
                
            </Box> */}
            {/* <Box
            // display="flex"
            // flexDirection="column"
            // justifyContent="space-between"
            // sx={{ height: "120px" }}
            >

                {/* <Stack alignItems="center" direction="row" spacing={2} margin="14px">
                    <Link href="#" underline="none" color="unset" fontSize="22px">
                        <BiHelpCircle />
                    </Link>
                    <Link href="#" underline="none" color="#667085">
                        {t("Help")}
                    </Link>
                </Stack> */}
            {/* <Box width="280px">
                    <Divider />
                </Box> */}
            <Box display="flex" alignItems="center"
            // margin="14px 14px 0 14px"
            >
                <Box marginRight="24px">
                    <Button onClick={handleLanguage} value={"en"}
                        className={"w-8 min-w-0 lowercase text-[#9DA6BA]"}
                        variant="text"
                        size="small">
                        en
                    </Button>
                    <Button onClick={handleLanguage} value={"tr"}
                        className={"w-8 min-w-0 font-bold lowercase text-[#9DA6BA]"}
                        variant="text"
                        size="small">tr
                    </Button>
                </Box>
                <Avatar alt="avatar" src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg" />
                <Box marginLeft="13px">
                    <p style={bottomTextStyle()}>Emre Taşdemir</p>
                    <p style={bottomTextStyle()}>emre.tasdemir@bs.nttdata.com</p>
                </Box>
            </Box>
            {/* </Box> */}
        </Box>
    )
}
