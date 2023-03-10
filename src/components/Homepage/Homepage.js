import { Box, Typography, Container } from '@mui/material';
import Dashboard from '../Dashboard/Dashboard';
import HeaderText from '../HeaderText/HeaderText';

import HomepageCss from './styles.module.css';

function Homepage() {

  return (
    <div className={HomepageCss.content_container}>
      <HeaderText />
      <Dashboard />
    </div>
  );
}

export default Homepage
