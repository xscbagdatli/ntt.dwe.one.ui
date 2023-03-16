import { Box, Typography, Container, Button, TextField, InputAdornment, FormControl } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import RequestDetailCss from "./styles.module.css"
import IconButton from '@mui/material/IconButton';
import ExcelButton from '../../../assets/images/excel-button.png';
import RequestDetailTable from '../RequestDetailTable/RequestDetailTable';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';

function RequestDetail() {
  const { t } = useTranslation()

  return (
    <Box className={RequestDetailCss.request_detail_container}>
      <Box className={RequestDetailCss.request_detail_header_container}>
        <Box className={RequestDetailCss.request_detail_header_title}>{t("RequestDetail")}</Box>
        <Box className={RequestDetailCss.request_detail_header_description}>{t("RequestDetailDescription")}</Box>
      </Box>

      <Box className={RequestDetailCss.request_detail_dashboard_container}>
        <Box className={RequestDetailCss.request_detail_dashboard_column}>
          <Box className={RequestDetailCss.request_detail_dashboard_title}>{t("RequestNo")}</Box>
          <Box className={RequestDetailCss.request_detail_dashboard_value}>{"#88"}</Box>
        </Box>
        <Box className={RequestDetailCss.request_detail_dashboard_column}>
          <Box className={RequestDetailCss.request_detail_dashboard_title}>{t("RequestTitle")}</Box>
          <Box className={RequestDetailCss.request_detail_dashboard_value}>{"Home Renovation and Clothing Needs"}</Box>
        </Box>
        <Box className={RequestDetailCss.request_detail_dashboard_column}>
          <Box className={RequestDetailCss.request_detail_dashboard_title}>{t("ResponsibleName")}</Box>
          <Box className={RequestDetailCss.request_detail_dashboard_value}>{"Imrek, Asli"}</Box>
        </Box>
        <Box className={RequestDetailCss.request_detail_dashboard_column}>
          <Box className={RequestDetailCss.request_detail_dashboard_title}>{t("ResponsibleEmail")}</Box>
          <Box className={RequestDetailCss.request_detail_dashboard_value}>{"Asli.Imrek@bs.nttdata.com"}</Box>
        </Box>
      </Box>

      <RequestDetailTable />
    </Box>

  );
}

export default RequestDetail
