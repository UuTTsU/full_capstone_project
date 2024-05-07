import React from 'react'
import GoBackBtn from './GoBackBtn'

interface IPageTitle {
    pageTitle: string;
    link: string;
}

function PageTitle({pageTitle, link} : IPageTitle) {
  return (
    <div className="content-container">
      <div className='page-title'>
        <GoBackBtn link={link} />
        <h1>{pageTitle}</h1>
      </div>
    </div>
  )
}

export default PageTitle