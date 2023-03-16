import React, { Suspense } from 'react';
import './App.css';
// Route Import
import { Route, Routes, useLocation } from 'react-router-dom';
// Pages - Components
import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage/Homepage';
import RequestsListPage from './pages/RequestsListPage/RequestsListPage';
import ProvidedRequestsPage from './pages/ProvidedRequestsPage/ProvidedRequestsPage';
import CreateRequestPage from './pages/CreateRequestPage/CreateRequestPage';
import RequestDetailPage from './pages/RequestDetailPage/RequestDetailPage';
// MUI Components
import { Box } from '@mui/system';
import { Container } from '@mui/material';
// Localization Imports
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationsEn } from './localization/en';
import { translationsTr } from './localization/tr';
import RequestsList from './components/requestsList/RequestsList/RequestsList';
import ErrorPage from './pages/ErrorPage/ErrorPage';

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

  let location = useLocation();

  return (
    <Suspense fallback="Loading">
      <div className="App">
        <Container maxWidth="lg">
          {/* <Header /> */}
          <Box>
            <Layout />
            <Box width="78%" marginLeft="auto" padding={location?.pathname !== "/create-request" && "0 0 0px 20px"}
              bgcolor={location.key !== "default" && "#F5F5F5"}
            >
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="home" element={<RequestsListPage />}></Route>
                <Route path="create-request" element={<CreateRequestPage />}></Route>
                <Route path="requests-list" element={<RequestsListPage />}>
                  <Route index={true} element={<RequestsList />}></Route>
                  <Route path="request-detail/:index" element={<RequestDetailPage />}></Route>
                </Route>
                <Route path="provided-requests" element={<ProvidedRequestsPage />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
              </Routes>
            </Box>
          </Box>
        </Container>
      </div>
    </Suspense>
  );
}

export default App;
