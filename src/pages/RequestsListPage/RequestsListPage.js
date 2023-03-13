import React from 'react';
import RequestsListPageCss from './styles.module.css';
import RequestsList from '../../components/requestsList/RequestsList/RequestsList';
// Components


function RequestsListPage() {

  return (
    <div className={RequestsListPageCss.content_container}>
      <RequestsList />
    </div>
  );
}

export default RequestsListPage
