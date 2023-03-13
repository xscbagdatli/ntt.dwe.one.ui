import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import DashboardCss from './styles.module.css';

function Dashboard() {
  const { t } = useTranslation()
  return (
    <Box className={DashboardCss.content_container}>
      <Box className={DashboardCss.dashboard_container}>
        <Box className={DashboardCss.requests_container}>
          <Box className={DashboardCss.request_number}>1200</Box>
          <Box className={DashboardCss.request_text}>{t("ProvidedRequest")}</Box>
        </Box>
        <Box className={DashboardCss.requests_container}>
          <Box className={DashboardCss.request_number}>1800</Box>
          <Box className={DashboardCss.request_text}>{t("TotalRequest")}</Box>
        </Box>
        <Box className={DashboardCss.requests_container}>
          <Box className={DashboardCss.request_number}>15000</Box>
          <Box className={DashboardCss.request_text}>{t("WaitingRequest")}</Box>
        </Box >
      </Box>
    </Box>
  );
}

export default Dashboard
