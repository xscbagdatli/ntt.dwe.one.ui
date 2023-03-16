import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ErrorPageCss from './styles.module.css';

function ErrorPage() {

  return (
    <div className={ErrorPageCss.content_container}>
      <Typography variant="h3">Aradığınız sayfa bulunmamakta.</Typography>
    </div>
  );
}

export default ErrorPage
