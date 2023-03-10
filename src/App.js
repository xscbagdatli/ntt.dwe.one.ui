import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container sx={{
        display: "flex", height: "750px"
      }} maxWidth="xl">
        <Layout />
      </Container>
    </div>
  );
}

export default App;
