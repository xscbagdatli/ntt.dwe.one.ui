import React, { Suspense } from 'react';
import './App.css';
// Route Import
import { Route, Routes } from 'react-router-dom';
// MUI Components
import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage/Homepage';
import RequestsList from './components/RequestsList/RequestsList';
// Components
import { Box } from '@mui/system';
import { Container } from '@mui/material';
// Localization Imports
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationsEn } from './localization/en';
import { translationsTr } from './localization/tr';

// Localization Setup
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      tr: { translation: translationsTr },
    },
    lng: i18n.language,
    fallbackLng: "tr",
    interpolation: { escapeValue: false }
  })



function App() {
  return (
    <Suspense fallback="Loading">
      <div className="App">
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            height: "750px"
          }}>
          <Layout />
          <Box margin="50px 0 50px 20px">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="home" element={<RequestsList />}></Route>
              <Route path="requests-list" element={<RequestsList />}></Route>
              <Route path="myRequests" element={<RequestsList />}></Route>
            </Routes>
          </Box>
        </Container>
      </div>
    </Suspense>
  );
}

export default App;
