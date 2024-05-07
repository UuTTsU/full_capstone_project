import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { ICategory } from '../interfaces';

interface IProdCategoryInput {
  label: string;
  value: string;
  categories: ICategory[];
  onChange: (geoCategory: string, enCategory: string) => void;
}

const ProdCategoryInput = ({ label, value, categories, onChange }: IProdCategoryInput) => {

  return (
    <div className="prod-input category-input">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value, categories.find(cat => cat.geoCategory === e.target.value)?.enCategory || '')}>
        <option value="">Select...</option>
        {categories.map((category, index) => (
          <option key={index} value={category.geoCategory}>
            {category.geoCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProdCategoryInput