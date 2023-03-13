import React from 'react';
import CreateRequest from '../../components/createRequest/CreateRequest/CreateRequest';
import CreateRequestPageCss from './styles.module.css';

// Components


function CreateRequestPage() {

  return (
    <div className={CreateRequestPageCss.content_container}>
      <CreateRequest />
    </div>
  );
}

export default CreateRequestPage
