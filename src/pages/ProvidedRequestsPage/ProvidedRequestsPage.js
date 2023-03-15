import React from 'react';
import ProvidedRequestsPageCss from './styles.module.css';

// Components
import ProvidedRequests from '../../components/providedRequests/ProvidedRequests/ProvidedRequests';

function ProvidedRequestsPage
  () {

  return (
    <div className={ProvidedRequestsPageCss.content_container}>
      <ProvidedRequests />
    </div>
  );
}

export default ProvidedRequestsPage
