// ProdDescriptionTextarea.tsx
import React from 'react'

interface IProdDescr {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const ProdDescrInput = ({ label, value, onChange }: IProdDescr) => {
  return (
    <div className="prod-description prod-input">
      <p>{label}</p>
      <textarea
        value={value || ''} 
        onChange={onChange}
      />
    </div>
  )
}

export default ProdDescrInput
