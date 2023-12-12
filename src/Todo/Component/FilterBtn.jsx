import React from 'react';
import styles from './FilterBtn.module.css';

export default function FilterBtn({filterData, _selectValue, setFilter}) {
  const handleFilter = (e) => {
    setFilter(e.currentTarget.dataset.value);
  };

  return (
    <button
      className={styles.filter + (_selectValue === filterData.type ? ` ${styles.active}` : '')}
      type='button'
      data-value={filterData.type}
      onClick={handleFilter}
    >
      {filterData.text}
    </button>
  );
}

