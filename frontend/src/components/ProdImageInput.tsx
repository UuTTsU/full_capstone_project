// ProdImageInput.tsx
import React, { useState } from 'react' 

interface IProdImageInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prodImages: string[];
  onDeleteImage: (index: number) => void
}

const ProdImageInput = ({ onChange, prodImages, onDeleteImage } : IProdImageInput) => {

  return (
    <div className="prod-image prod-input">
      <p>პროდუქტის ფოტოები</p>
      <input 
        type="file"
        multiple
        onChange={onChange}
      />
      <div className="images-container">
        {prodImages.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img src={image} alt='' />
              <button onClick={() => onDeleteImage(index)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  ) 
}

export default ProdImageInput 
