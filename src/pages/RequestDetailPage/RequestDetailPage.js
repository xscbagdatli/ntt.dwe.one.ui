import React from 'react';
import RequestDetailPageCss from './styles.module.css';
import RequestDetail from '../../components/requestDetail/RequestDetail/RequestDetail';
// Components


function RequestDetailPage() {

  return (
    <div className={RequestDetailPageCss.content_container}>
      <RequestDetail />
    </div>
  );
}

export default RequestDetailPage
