import React, { useState } from 'react'
import { collection, getDocs, doc, getDoc } from "firebase/firestore"
import { db } from '../config/firebase'
import { ICategory, ILead, IProduct } from '../interfaces'

function useFetch() {
    const [data, setData] = useState<IProduct[] | IProduct | ILead[] | ICategory[]>([])

    const getData = async ({endpoint, id}: {endpoint: string, id?: string}) => {
        try {
            if (id) {
              const dataRef = doc(db, endpoint, id)
              const docSnap = await getDoc(dataRef)
              if (docSnap.exists()) {
                console.log(docSnap.data())
                setData(docSnap.data() as IProduct)
              } else {
                if(id === null) console.error('Doc doesnt exist')
              }
            } else {
              const dataSnapshot = await getDocs(collection(db, endpoint));
              const dataRes: IProduct[] = dataSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as IProduct));
              setData(dataRes)
            }
        } catch (error) {
            console.error(error)
        }

        return () => {
            setData([])
        }
    }

    return {getData, data}
}

export default useFetch