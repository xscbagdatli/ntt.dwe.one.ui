import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import DashboardCss from './styles.module.css';

function Dashboard() {
  const { t } = useTranslation()

  const requirementSummary = useSelector((state) => state.homepage.requirementSummary)

  return (
    <Box className={DashboardCss.content_container}>
      <Box className={DashboardCss.dashboard_container}>
        <Box className={DashboardCss.requests_container}>
          <Box color="#F43443" className={DashboardCss.request_number}>{requirementSummary?.finalizedRequirementCount}</Box>
          <Box className={DashboardCss.request_text}>{t("ProvidedRequest")}</Box>
        </Box>
        <Box className={DashboardCss.requests_container}>
          <Box color="#027A48" className={DashboardCss.request_number}>{requirementSummary?.totalRequirementCount}</Box>
          <Box className={DashboardCss.request_text}>{t("TotalRequest")}</Box>
        </Box>
        <Box className={DashboardCss.requests_container}>
          <Box color="#FF9500" className={DashboardCss.request_number}>{requirementSummary?.pendingRequirementCount}</Box>
          <Box className={DashboardCss.request_text}>{t("WaitingRequest")}</Box>
        </Box >
      </Box>
    </Box>
  );
}

export default Dashboard
