import React from 'react'
import Edit from '../assets/icons/edit.png'
import Delete from '../assets/icons/delete.png'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { doc, deleteDoc } from "firebase/firestore"
import { db } from '../config/firebase'

function CategoryItem({id, category} : {id: string, category: string}) {
  const navigate = useNavigate()
  const {bestSellers} = useParams()
  const {getData} = useFetch()

  const editItem = () => {
      navigate(`/admin/categories/${id}`)
  }

  const deleteItem = async () => {
      await deleteDoc(doc(db, 'categories', id))
      getData({endpoint: 'categories'})
  }
  
  return (
    <div className='admin-prod-item'>
        {category}
        <div className="item-controls">
            <div className="edit-btn" onClick={editItem}>
                <img src={Edit} alt="" />
            </div>
            <div className="delete-btn" onClick={deleteItem} style={{display: `${bestSellers ? 'none' : 'block'}`}}>
                <img src={Delete} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CategoryItem