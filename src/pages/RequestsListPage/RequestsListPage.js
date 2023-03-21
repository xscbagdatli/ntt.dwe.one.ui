import React, { useEffect } from 'react';
import RequestsListPageCss from './styles.module.css';
import RequestsList from '../../components/requestsList/RequestsList/RequestsList';
import { Outlet } from 'react-router-dom';
import fetchRequirements from '../../api/requestsList/fetchRequirements';
// Components

function RequestsListPage() {

  useEffect(() => {
    fetchRequirements()
  }, [])

  return (
    <div className={RequestsListPageCss.content_container}>
      <Outlet />
    </div>
  );
}

export default RequestsListPage
