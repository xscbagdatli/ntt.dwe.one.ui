import React, { useEffect } from 'react';
import HomepageCss from './styles.module.css';

// Components
import Dashboard from '../../components/homepage/Dashboard/Dashboard';
import HeaderText from '../../components/homepage/HeaderText/HeaderText';
// API
import fetchPriceUnits from '../../api/common/fetchPriceUnits';
import fetchMeasureUnits from '../../api/common/fetchMeasureUnits';
import fetchDeliveryTypes from '../../api/common/fetchDeliveryTypes';
import fetchRequirementSummary from '../../api/homepage/fetchRequirementSummary';


function Homepage() {

  useEffect(() => {
    fetchPriceUnits()
    fetchMeasureUnits()
    fetchDeliveryTypes()
    fetchRequirementSummary()
  }, [])

  return (
    <div className={HomepageCss.content_container}>
      <HeaderText />
      <Dashboard />
    </div>
  );
}

export default Homepage
