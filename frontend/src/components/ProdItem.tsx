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

function ProdItem({id, prodName, endpoint, isFavorite, prodInfo, onDelete} : {id: string, prodName: string, endpoint: string, isFavorite: boolean, prodInfo: IProduct, onDelete: (id: string) => void}) {
    const navigate = useNavigate()
    const { bestSellers } = useParams()
    const { getData } = useFetch()
    const { requestData } = useRequest()
    const [currProd, setCurrProd] = useState<IProduct>()
    const [favorite, setFavorite] = useState<boolean>(isFavorite)

    useEffect(() => {
        setCurrProd(prodInfo)
    }, [])

    const editItem = () => {
        navigate(`/admin/${endpoint}/${id}`)
    }
    

    const deleteItem = async () => {
        onDelete(id)
    }

    const toggleFavorite = async () => {
        if (favorite) {
            requestData({endpoint: 'products', id, data: {...prodInfo, isFavorite: false}})
            deleteDoc(doc(db, 'bestSellers', id))
            if(endpoint === 'bestSellers'){
                onDelete(id)
            }
        } else {
            requestData({endpoint: 'products', id, data: {...prodInfo, isFavorite: true}})
            requestData({endpoint: 'bestSellers', id, data: {...prodInfo, isFavorite: true}})
        }
        getData({endpoint: `${endpoint}`})
        setFavorite(!favorite)
    }
  return (
    <div className='admin-prod-item'>
        <p>{prodName}</p>
        <div className="item-controls">
            <div className="add-favorite-btn" onClick={toggleFavorite}>
                <img src={favorite ? FilledStar : Star} alt="" />
            </div>
            <div className="edit-btn" onClick={editItem}>
                <img src={Edit} alt="" style={{display: `${bestSellers ? 'none' : 'block'}`}}/>
            </div>
            <div className="delete-btn" onClick={deleteItem} style={{display: `${bestSellers ? 'none' : 'block'}`}}>
                <img src={Delete} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProdItem