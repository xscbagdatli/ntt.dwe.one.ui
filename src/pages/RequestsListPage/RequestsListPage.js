import React from 'react';
import RequestsListPageCss from './styles.module.css';
import RequestsList from '../../components/requestsList/RequestsList/RequestsList';
import { Outlet } from 'react-router-dom';
// Components


function RequestsListPage() {

  return (
    <div className={RequestsListPageCss.content_container}>
      <Outlet />
    </div>
  );
}

export default RequestsListPage
