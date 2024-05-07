import React, { useState } from 'react'
import { db } from '../config/firebase'
import { getDoc, doc, setDoc } from 'firebase/firestore'
import { ICategory, IProduct } from '../interfaces'

function useRequest() {
    const requestData = async ({endpoint, id, data} : {endpoint: string, id: string, data: any}) => {
        const prodRef = doc(db, `${endpoint}`, `${id}`)
        try {
            await setDoc(prodRef, data)
        } catch (error) {
            console.error(error)
        }
    }
  return {requestData}
}

export default useRequest