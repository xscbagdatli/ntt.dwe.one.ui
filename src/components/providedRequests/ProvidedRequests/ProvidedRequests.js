import { Box, Typography, Container, Button, TextField, InputAdornment, FormControl } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import RequestsListCss from "./styles.module.css"
import IconButton from '@mui/material/IconButton';
import ExcelButton from '../../../assets/images/excel-button.png';
import ProvidedRequestsTable from '../ProvidedRequestsTable/ProvidedRequestsTable';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';

function ProvidedRequests() {
  const { t } = useTranslation()

  return (
    <div className={RequestsListCss.requests_list_container}>

      <div className={RequestsListCss.requests_list_header_container}>
        <div className={RequestsListCss.requests_list_header_title}>{t("ProvidedRequestsByMe")}</div>
        <div className={RequestsListCss.requests_list_header_description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</div>
      </div>

      <ProvidedRequestsTable />
      <ProvidedRequestsTable />
      <ProvidedRequestsTable />
    </div>

  );
}

export default ProvidedRequests
