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
    <div className={RequestsListCss.request_list_container}>

      <div className={RequestsListCss.request_list_title_container}>
        <div className={RequestsListCss.request_title}>{t("RequestsList")}</div>
      </div>
      <div className={RequestsListCss.header_description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</div>

      <div className={RequestsListCss.request_list_actions_container}>
        <div className={RequestsListCss.request_list_actions_left_container}>

          <TextField id="outlined-basic" label="Search" variant="outlined"
            sx={{ width: "600px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon color='error' />
                </InputAdornment>
              )
            }} />

        </div>
        <div className={RequestsListCss.request_list_actions_right_container}>
          <div className={RequestsListCss.request_list_excel_container}>
            <IconButton className={RequestsListCss.excel_button} color="primary" aria-label="upload excel" component="label">
              <input hidden accept=".xlsx" type="file" />
              <img src={ExcelButton} alt="excel-button" />
            </IconButton>
          </div>
          <div className={RequestsListCss.request_list_filters_container}>
            <Button sx={{
              textTransform: "capitalize",
              fontWeight: "bold",
              color: " #344054"
            }}
              startIcon={<FilterListIcon sx={{
                color: "#F43443"
              }} />}>
              Filtreler
            </Button>
          </div>
        </div>
      </div>

      <RequestsListTable />
    </div>

  );
}

export default RequestsList
