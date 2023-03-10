import { Box, Typography, Container } from '@mui/material';

import DashboardCss from './styles.module.css';

function Dashboard() {

  return (
    <div className={DashboardCss.content_container}>
      <div className={DashboardCss.dashboard_container}>
        <div className={DashboardCss.requests_container}>
          <div className={DashboardCss.request_number}>1200</div>
          <div className={DashboardCss.request_text}>Karşılanan Talep</div>
        </div>
        <div className={DashboardCss.requests_container}>
          <div className={DashboardCss.request_number}>1800</div>
          <div className={DashboardCss.request_text}>Toplam Talep</div>
        </div>
        <div className={DashboardCss.requests_container}>
          <div className={DashboardCss.request_number}>15000</div>
          <div className={DashboardCss.request_text}>Bekleyen Talep</div>
        </div >
      </div>
    </div>
  );
}

export default Dashboard
