import { Box, Typography, Container, Button, TextField, InputAdornment, FormControl } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import RequestDetailCss from "./styles.module.css"
import IconButton from '@mui/material/IconButton';
import ExcelButton from '../../../assets/images/excel-button.png';
import RequestDetailTable from '../RequestDetailTable/RequestDetailTable';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useEffect, useState } from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import fetchRequirementItem from '../../../api/requestDetail/fetchRequirementItem';

function RequestDetail() {
  const { t } = useTranslation()

  const requirements = useSelector((state) => state.requestsList.requirements)
  const selectedRequestIndex = useSelector((state) => state.requestsList.selectedRequestIndex)

  const [requestNo, setRequestNo] = useState(0)
  const [requestTitle, setRequestTitle] = useState("")
  const [responsibleName, setResponsibleName] = useState("")
  const [responsibleEmail, setResponsibleEmail] = useState("")

  useEffect(() => {
    setRequestNo(requirements?.[selectedRequestIndex].id)
    setRequestTitle(requirements?.[selectedRequestIndex].requestName)
    setResponsibleName(requirements?.[selectedRequestIndex].responsibleHrbpName)
    setResponsibleEmail(requirements?.[selectedRequestIndex].responsibleHrbpEmail)
  }, [requirements, selectedRequestIndex])

  useEffect(() => {
    if (requirements.length > 0 && selectedRequestIndex !== null) {
      fetchRequirementItem(requirements?.[selectedRequestIndex].id)
    }
  }, [requirements, selectedRequestIndex])

  return (
    <Box className={RequestDetailCss.request_detail_container}>
      <Box className={RequestDetailCss.request_detail_header_container}>
        <Box className={RequestDetailCss.request_detail_header_title}>{t("RequestDetail")}</Box>
        <Box className={RequestDetailCss.request_detail_header_description}>{t("RequestDetailDescription")}</Box>
      </Box>

      <Box className={RequestDetailCss.request_detail_dashboard_container}>
        <Box className={RequestDetailCss.request_detail_dashboard_column}>
          <Box className={RequestDetailCss.request_detail_dashboard_title}>{t("RequestNo")}</Box>
          <Box className={RequestDetailCss.request_detail_dashboard_value}>{`#${requestNo}`}</Box>
        </Box>
        <Box className={RequestDetailCss.request_detail_dashboard_column}>
          <Box className={RequestDetailCss.request_detail_dashboard_title}>{t("RequestTitle")}</Box>
          <Box className={RequestDetailCss.request_detail_dashboard_value}>{requestTitle}</Box>
        </Box>
        <Box className={RequestDetailCss.request_detail_dashboard_column}>
          <Box className={RequestDetailCss.request_detail_dashboard_title}>{t("ResponsibleName")}</Box>
          <Box className={RequestDetailCss.request_detail_dashboard_value}>{responsibleName}</Box>
        </Box>
        <Box className={RequestDetailCss.request_detail_dashboard_column}>
          <Box className={RequestDetailCss.request_detail_dashboard_title}>{t("ResponsibleEmail")}</Box>
          <Box className={RequestDetailCss.request_detail_dashboard_value}>{responsibleEmail}</Box>
        </Box>
      </Box>

      <RequestDetailTable />
    </Box>

  );
}

export default RequestDetail
