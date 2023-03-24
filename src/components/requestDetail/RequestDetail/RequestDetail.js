import { Box } from '@mui/material';
import RequestDetailCss from "./styles.module.css"
import RequestDetailTable from '../RequestDetailTable/RequestDetailTable';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import fetchRequirementItem from '../../../api/requestDetail/fetchRequirementItem';

function RequestDetail() {
  const { t } = useTranslation()

  const requirements = useSelector((state) => state.requestsList.requirements)
  const selectedRequestId = useSelector((state) => state.requestsList.selectedRequestId)

  const [requestNo, setRequestNo] = useState(0)
  const [requestTitle, setRequestTitle] = useState("")
  const [responsibleName, setResponsibleName] = useState("")
  const [responsibleEmail, setResponsibleEmail] = useState("")

  useEffect(() => {
    let sendDataToFetch = requirements?.filter(req => req.id === selectedRequestId)
    if (requirements.length > 0 && selectedRequestId !== null && sendDataToFetch?.length > 0) {
      setRequestNo(sendDataToFetch?.[0]?.id)
      setRequestTitle(sendDataToFetch?.[0]?.requestName)
      setResponsibleName(sendDataToFetch?.[0]?.responsibleHrbpName)
      setResponsibleEmail(sendDataToFetch?.[0]?.responsibleHrbpEmail)

      fetchRequirementItem(sendDataToFetch?.[0])
    }
  }, [requirements, selectedRequestId])

  return (
    <Box className={RequestDetailCss.request_detail_container}>
      <Box className={RequestDetailCss.request_detail_header_container}>
        <Box className={RequestDetailCss.request_detail_header_title}>{t("RequestDetail")}</Box>
        <Box className={RequestDetailCss.request_detail_header_description}>{t("RequestDetailDescription")}</Box>
      </Box>

      <Box className={RequestDetailCss.request_detail_dashboard_container}>
        <Box className={RequestDetailCss.request_detail_dashboard_column}>
          <Box className={RequestDetailCss.request_detail_dashboard_title}>{t("RequestNo")}</Box>
          <Box className={RequestDetailCss.request_detail_dashboard_value}>{`#${requestNo ? requestNo : ""}`}</Box>
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
