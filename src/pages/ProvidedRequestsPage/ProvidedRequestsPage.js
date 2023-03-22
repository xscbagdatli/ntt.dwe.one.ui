import React, { useEffect } from 'react';
import ProvidedRequestsPageCss from './styles.module.css';

// Components
import ProvidedRequests from '../../components/providedRequests/ProvidedRequests/ProvidedRequests';
import fetchCommitments from '../../api/providedRequests/fetchCommitments';

function ProvidedRequestsPage() {

  useEffect(() => {
    fetchCommitments()
  }, [])

  return (
    <div className={ProvidedRequestsPageCss.content_container}>
      <ProvidedRequests />
    </div>
  );
}

export default ProvidedRequestsPage
