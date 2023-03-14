import React, { Suspense } from 'react';
import AppCss from './styles.module.css';
// Route Import
import { Route, Routes, useLocation } from 'react-router-dom';
// MUI Components
import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage/Homepage';
import RequestsListPage from './pages/RequestsListPage/RequestsListPage';
// Components
import { Box } from '@mui/system';
import { Button, Container } from '@mui/material';
// Localization Imports
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationsEn } from './localization/en';
import { translationsTr } from './localization/tr';
import CreateRequestPage from './pages/CreateRequestPage/CreateRequestPage';

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


const handleLanguage = (e) => {
  i18n.changeLanguage(e.target.value)
}

function App() {

  let location = useLocation();

  return (
    <Suspense fallback="Loading">
      <div className="App">
        <Container
          maxWidth="xl"
        >
          <Box style={{ display: "flex", height: "20px", justifyContent: "flex-end" }}>
            <Button onClick={handleLanguage} value={"en"}
              className={AppCss.lang_button_eng}
              variant="text"
              size="small">en
            </Button>
            <Button onClick={handleLanguage} value={"tr"}
              className={AppCss.lang_button_tr}
              variant="text"
              size="small">tr
            </Button>
          </Box>
          <Box display="flex"
            sx={{
              // height: "750px"
            }} >
            <Layout />
            <Box padding={location?.pathname !== "/create-request" && "50px 0 0px 20px"} bgcolor="#F5F5F5">
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="home" element={<RequestsListPage />}></Route>
                <Route path="create-request" element={<CreateRequestPage />}></Route>
                <Route path="requests-list" element={<RequestsListPage />}></Route>
                <Route path="myRequests" element={<RequestsListPage />}></Route>
              </Routes>
            </Box>
          </Box>
        </Container>
      </div>
    </Suspense>
  );
}

export default App;
