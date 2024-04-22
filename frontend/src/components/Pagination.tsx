import React from 'react'
import Arrow from '../assets/icons/arrow.png'

interface PaginationProps{
    totalPages: number;
    currPage: number;
    setCurrPage: React.Dispatch<React.SetStateAction<number>>;
}
function Pagination({totalPages, currPage, setCurrPage}: PaginationProps) {
    const leftPag: number[] = Array.from({ length: totalPages }, (_, index) => index + 1).slice(0,3)
  return (
    <div className='pagination-container content-container'>
        <div className="pagination-controls">
            <div className={`prev ${currPage > 1 ? 'active' : ''}`} onClick={() => setCurrPage(prevPage => Math.max(prevPage - 1, 1))}>
                <img src={Arrow} alt="" />
            </div>
            <div className="pagination-pages">
                {leftPag.map((each, index) => (
                    <div className={`${currPage === each ? 'active' : ''}`} onClick={() => setCurrPage(each)} key={index}>{each}</div>
                ))}
                <div>...</div>
                <div className={`${currPage === totalPages ? 'active' : ''}`} onClick={() => setCurrPage(totalPages)}>{totalPages}</div>
            </div>
            <div className={`next ${currPage < totalPages ? 'active' : ''}`} onClick={() => setCurrPage(prevPage => Math.min(prevPage + 1, totalPages))}>
                <img src={Arrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Pagination