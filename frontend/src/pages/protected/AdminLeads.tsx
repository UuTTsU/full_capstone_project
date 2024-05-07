import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase';
import { doc, getDocs, collection } from "firebase/firestore"
import LeadInfo from '../../components/LeadInfo';
import { ILead } from '../../interfaces';
import useFetch from '../../hooks/useFetch';

function AdminLeads() {
  const [leads, setLeads] = useState<ILead[] | null>(null)
  const {getData, data} = useFetch()

  useEffect(() => {
    getData({endpoint: 'leads'})
  }, [])

  useEffect(() => {
    setLeads(data as ILead[])
  }, [data])

  return (
    <div className='admin-items-container'>
      <h1>შეტყობინებები</h1>
      <div className="admin-list-container">
        {leads && leads?.map((each, index) => (
          <LeadInfo key={index} comment={each.comment} email={each.email} phone={each.phone} date={each.date}/>
        ))}
      </div>
    </div>
  )
}

export default AdminLeads