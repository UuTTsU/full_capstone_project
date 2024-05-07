import React from 'react';
import { useTranslation } from 'react-i18next';

interface IAvailabilityInput {
  isAvailable: boolean;
  onToggle: () => void;
}

const ProdAvailabilityInput = ({ isAvailable, onToggle } : IAvailabilityInput) => {
    const {i18n} = useTranslation()
  return (
    <div className="availability-input prod-input">
      <span>{i18n.language === 'en' ? 'Availability' : 'ხელმისაწვდომია'}</span>
      <label className="switch" style={{ backgroundColor: isAvailable ? '#34C759' : '#C3C3C3' }}>
        <input type="checkbox" checked={isAvailable} onChange={onToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default ProdAvailabilityInput
