import React from 'react'
import LanguageChangeCss from './styles.module.css';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Button } from '@mui/material';
export default function LanguageChange({

}) {
    const { t } = useTranslation()

    const handleLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <Box style={{ display: "flex", height: "20px", justifyContent: "flex-end" }}>
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
    )
}
