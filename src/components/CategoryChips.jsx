import { useState } from 'react';
import './CategoryChips.css';

const CategoryChips = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-chips">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
