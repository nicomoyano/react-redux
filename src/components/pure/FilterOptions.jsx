import React from 'react';
import FilterContainer from '../containers/FilterContainer';

const FilterOptions = () => {
  return (
    <div>
      <FilterContainer filter="SHOW_ALL">All</FilterContainer>
      <FilterContainer filter="SHOW_ACTIVE">Pending</FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED">Completed</FilterContainer>
    </div>
  );
};

export default FilterOptions;
