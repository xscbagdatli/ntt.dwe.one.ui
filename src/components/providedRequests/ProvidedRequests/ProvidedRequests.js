import { Box, Typography, Container, Button, TextField, InputAdornment, FormControl } from '@mui/material';

import RequestsListCss from "./styles.module.css"
import ProvidedRequestsTable from '../ProvidedRequestsTable/ProvidedRequestsTable';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function ProvidedRequests() {
  const { t } = useTranslation()

  const providedRequestItem = useSelector((state) => state.providedRequests.providedRequestItem)


  return (
    <div className={RequestsListCss.requests_list_container}>

      <div className={RequestsListCss.requests_list_header_container}>
        <div className={RequestsListCss.requests_list_header_title}>{t("ProvidedRequestsByMe")}</div>
        <div className={RequestsListCss.requests_list_header_description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</div>
      </div>
      {
        providedRequestItem?.map((item, index) => {
          return <Box key={index}>
            <ProvidedRequestsTable item={item} />
          </Box>
        })
      }
    </div>

  );
}

export default ProvidedRequests
