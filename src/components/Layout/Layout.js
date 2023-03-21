import React, { useEffect } from 'react'
import LayoutCSS from "./styles.module.css"
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
// API
import fetchPriceUnits from '../../api/common/fetchPriceUnits';
import fetchMeasureUnits from '../../api/common/fetchMeasureUnits';
import fetchDeliveryTypes from '../../api/common/fetchDeliveryTypes';
import fetchBusinessPartners from '../../api/common/fetchBusinessPartners';
import fetchRequirementSummary from '../../api/homepage/fetchRequirementSummary';
import fetchProductTypes from '../../api/common/fetchProductTypes';
import fetchSplitProfileStatuses from '../../api/common/fetchSplitProfileStatuses';
import fetchSectors from '../../api/common/fetchSectors';

function Layout() {
    useEffect(() => {
        fetchPriceUnits()
        fetchMeasureUnits()
        fetchDeliveryTypes()
        fetchBusinessPartners()
        fetchRequirementSummary()
        fetchProductTypes()
        fetchSplitProfileStatuses()
        fetchSectors()
    }, [])

    return (
        <>
            <Header />
            <Navbar />
        </>
    );
};

export default Layout;
