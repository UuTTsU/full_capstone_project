import React, { useEffect, useState } from 'react'
import Edit from '../assets/icons/edit.png'
import Delete from '../assets/icons/delete.png'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, deleteDoc, setDoc } from "firebase/firestore"
import { db } from '../config/firebase'
import useFetch from '../hooks/useFetch'
import Star from '../assets/icons/star.png'
import FilledStar from '../assets/icons/FilledStar.png'
import useRequest from '../hooks/useRequest'
import { IProduct } from '../interfaces'

function ProdItem({id, prodName, endpoint, isFavorite, prodInfo} : {id: string, prodName: string, endpoint: string, isFavorite: boolean, prodInfo: IProduct}) {
    const navigate = useNavigate()
    const {bestSellers} = useParams()
    const {getData} = useFetch()
    const {requestData} = useRequest()
    const [currProd, setCurrProd] = useState<IProduct>()

    useEffect(() => {
        setCurrProd(prodInfo)
    }, [])

    const editItem = () => {
        navigate(`/admin/${endpoint}/${id}`)
    }

    const deleteItem = async () => {
        await deleteDoc(doc(db, 'products', id))
        getData({endpoint: 'products'})
    }

    const toggleFavorite = async () => {
        // const prodRef = doc(db, 'products', id)
        if(isFavorite){
            requestData({endpoint: 'products', id, data: {...prodInfo, isFavorite: false}})
            deleteDoc(doc(db, 'bestSellers', id))
        }else {
            requestData({endpoint: 'products', id, data: {...prodInfo, isFavorite: true}})
            requestData({endpoint: 'bestSellers', id, data: {...prodInfo, isFavorite: true}})
        }

        getData({endpoint: `${endpoint}`})
    }

  return (
    <div className='admin-prod-item'>
        <p>{prodName}</p>
        <div className="item-controls">
            <div className="add-favorite-btn" onClick={toggleFavorite}>
                <img src={isFavorite ? FilledStar : Star} alt="" />
            </div>
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

export default ProdItem