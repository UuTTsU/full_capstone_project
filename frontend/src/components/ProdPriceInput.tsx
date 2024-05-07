// PrdPriceInput.tsx
import React from 'react';

interface IProdPriceInput{
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProdPriceInput = ({ label, value, onChange } : IProdPriceInput) => {
  return (
    <div className="prd-price prod-input">
      <p>{label}</p>
      <input 
        type='text'
        value={value || ''} 
        onChange={onChange}
      />
    </div>
  );
};

export default ProdPriceInput;
