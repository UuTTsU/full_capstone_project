import React, { useRef, useState } from 'react'
import Prod1 from '../assets/img/Prod1.png'
import Prod2 from '../assets/img/Prod2.png'
import Prod3 from '../assets/img/Prod3.png'
import Prod4 from '../assets/img/Prod4.png'
import Prod5 from '../assets/img/Prod5.png'
import Arrow from '../assets/icons/arrow.png'

function ProductGallery({prodImages} : {prodImages: string[]}) {
  // const prodImages = [Prod1, Prod2, Prod3, Prod4, Prod5, Prod1, Prod2, Prod3, Prod4, Prod5]
  const [mainImgIndex, setMainImgIndex] = useState<number>(0)
  const prodImagesRef = useRef<HTMLDivElement>(null)

  const handleNextImage = () => {
    const nextIndex = (mainImgIndex + 1) % prodImages.length
    setMainImgIndex(nextIndex)
    scrollToImage(nextIndex)
  }

  const handlePrevImage = () => {
    const prevIndex = (mainImgIndex - 1 + prodImages.length) % prodImages.length
    setMainImgIndex(prevIndex)
    scrollToImage(prevIndex)
  }

  const scrollToImage = (index: number) => {
    if (prodImagesRef.current) {
      const imageWidth = prodImagesRef.current.children[0].clientWidth
      prodImagesRef.current.scrollTo({
        left: index * imageWidth,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className='slider-container'>
        <div className="main-image">
          <img src={prodImages[mainImgIndex]} alt="" />
        </div>
        <div className="img-pagination">
            <div className="prev-img" onClick={handlePrevImage}>
              <img src={Arrow} alt="" />
            </div>
            <div className="prod-images" ref={prodImagesRef}>
              {prodImages.map((each, index) => (
                <img src={each} key={index} onClick={() => setMainImgIndex(index)} alt="" />
              ))}
            </div>
            <div className="next-img" onClick={handleNextImage}>
              <img src={Arrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProductGallery