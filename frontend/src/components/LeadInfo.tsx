import React from 'react'
import { ILead } from '../interfaces'
  
function LeadInfo({comment, email, phone, date} : ILead) {

  return (
    <div className='lead-info'>
        <div className="lead-details lead-comment">
            <p>{comment}</p>
        </div>
        <div className="lead-details">
            <span>Email</span>
            <p>{email}</p>
        </div>
        <div className="lead-details">
            <span>Phone</span>
            <p>{phone}</p>
        </div>
        <div className="lead-details">
            <span>Date</span>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default LeadInfo