import React, { useEffect, useRef, useState } from 'react'
import SearchIcon from '../assets/icons/search.png'
import useFetch from '../hooks/useFetch';
import { IProduct } from '../interfaces';
import { useNavigate } from 'react-router-dom';

interface ISearch {
    toggleSearch: boolean;
    setToggleSearch: React.Dispatch<React.SetStateAction<boolean>>
}

function SearchInput({toggleSearch, setToggleSearch} : ISearch) {
    const {getData, data} = useFetch()
    const [products, setProducts] = useState<IProduct[]>()
    const searchRef = useRef<HTMLDivElement>(null)
    const searchInput = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    useEffect(() => {
        getData({endpoint: 'products'})
    }, [])

    useEffect(() => {
        setProducts(data as IProduct[])
    }, [data])


    const searchForPord = () => {
        if(toggleSearch){
            const valueToSearch = searchInput.current?.value?.toLowerCase()
            if(!valueToSearch) return

            const matchingProducts = products?.filter(product =>
                product.geoName.toLowerCase().includes(valueToSearch) || 
                (product.enName && product.enName.toLowerCase().includes(valueToSearch))
            )
            const firstMatchingProduct = matchingProducts?.[0]

            if(firstMatchingProduct){
                navigate(`/catalogue/${firstMatchingProduct?.enCategory}/${firstMatchingProduct?.id}`)
            }else{
                navigate(`/404`)
            }
        }else setToggleSearch(prev => !prev)

    }
    

    //toggle search visibility if search input is not an empty string
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(searchInput.current?.value !== '') return
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setToggleSearch(false)
            }
        }

        if (toggleSearch) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [toggleSearch, setToggleSearch])

  return (
    <div className="search-field" ref={searchRef}>
        <input type="search" ref={searchInput} className={`${toggleSearch ? 'active' : ''}`}/>
        <img src={SearchIcon} alt="" onClick={searchForPord}/>
  </div>
  )
}

export default SearchInput