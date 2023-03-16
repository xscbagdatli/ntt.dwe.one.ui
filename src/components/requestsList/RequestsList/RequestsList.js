import { Box, Typography, Container, Button, TextField, InputAdornment, FormControl } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import RequestsListCss from "./styles.module.css"
import IconButton from '@mui/material/IconButton';
import ExcelButton from '../../../assets/images/excel-button.png';
import RequestsListTable from '../RequestsListTable/RequestsListTable';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';

function RequestsList() {
  const { t } = useTranslation()

  return (
    <div className={RequestsListCss.requests_list_container}>

      <div className={RequestsListCss.requests_list_header_container}>
        <div className={RequestsListCss.requests_list_header_title}>{t("RequestsList")}</div>
        <div className={RequestsListCss.requests_list_header_description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</div>
      </div>

      <div className={RequestsListCss.requests_list_actions_container}>
        <div className={RequestsListCss.requests_list_actions_left_container}>
          <TextField id="outlined-basic" label={t("Search")} variant="outlined"
            sx={{ width: "600px", background: "#fff" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon color='error' />
                </InputAdornment>
              )
            }} />
        </div>
        <div className={RequestsListCss.requests_list_actions_right_container}>
          <div className={RequestsListCss.requests_list_excel_container}>
            <IconButton className={RequestsListCss.requests_list_excel_button} color="primary" aria-label="upload excel" component="label" sx={{ borderRadius: "unset" }}>
              <input hidden accept=".xlsx" type="file" />
              <img src={ExcelButton} alt="excel-button" />
            </IconButton>
          </div>
          <div className={RequestsListCss.requests_list_filter_container}>
            <Button
              className={RequestsListCss.requests_list_filter_button}
              // sx={{
              //   textTransform: "capitalize",
              //   fontWeight: "bold",
              //   color: " #344054"
              // }}
              startIcon={<FilterListIcon sx={{
                color: "#F43443"
              }} />}>
              {t("Filters")}
            </Button>
          </div>
        </div>
      </div>

      <RequestsListTable />
    </div>

  );
}

export default RequestsList
