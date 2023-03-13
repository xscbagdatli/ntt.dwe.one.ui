import React from 'react';
import HomepageCss from './styles.module.css';

// Components
import Dashboard from '../../components/Dashboard/Dashboard';
import HeaderText from '../../components/HeaderText/HeaderText';


function Homepage() {

  return (
    <div className={HomepageCss.content_container}>
      <HeaderText />
      <Dashboard />
    </div>
  );
}

export default Homepage
