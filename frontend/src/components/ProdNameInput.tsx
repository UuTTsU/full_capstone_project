// ProdNameInput.tsx
import React from 'react'

interface IProdNameInput {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ProdNameInput = ({ label, value, onChange } : IProdNameInput) => {
  return (
    <div className="prod-name prod-input">
      <p>{label}</p>
      <input 
        type="text" 
        value={value || ''} 
        onChange={onChange}
      />
    </div>
  )
}

export default ProdNameInput
