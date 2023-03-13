import { Box, Typography, Container, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import RequestsListCss from "./styles.module.css"
import IconButton from '@mui/material/IconButton';
import ExcelButton from '../../assets/images/excel-button.png';
import RequestsListTable from '../RequestsListTable/RequestsListTable';
import { useState } from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
function RequestsList() {
  const { t } = useTranslation()
  const [language, setLanguage] = useState("tr")

  const handleLanguage = (e) => {
    debugger
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className={RequestsListCss.request_list_container}>

      <div className={RequestsListCss.request_list_title_container}>
        <div className={RequestsListCss.request_title}>{t("RequestList")}</div>

        <div>
          <Button onClick={handleLanguage} value={"en"} className={RequestsListCss.lang_button_eng}
            variant="text"
            size="small">en
          </Button>
          <Button onClick={handleLanguage} value={"tr"} className={RequestsListCss.lang_button_tr}
            variant="text"
            size="small">tr
          </Button>
        </div>
      </div>
      <div className={RequestsListCss.header_description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</div>

      <div className={RequestsListCss.request_list_actions_container}>
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

      <RequestsListTable />
    </div>

  );
}

export default RequestsList
