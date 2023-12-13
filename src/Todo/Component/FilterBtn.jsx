import React from 'react';
import './FilterBtn.css';

export default function FilterBtn({filterData, _selectValue, setFilter}) {
  const handleFilter = (e) => {
    setFilter(e.currentTarget.dataset.value);
  };

  return (
    <button
      className={'btn-filter' + (_selectValue === filterData.type ? ' is-active' : '')}
      type='button'
      data-value={filterData.type}
      onClick={handleFilter}
    >
      {filterData.text}
    </button>
  );
}

