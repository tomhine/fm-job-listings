import { useState } from 'react';
import styled from 'styled-components';
import JobList from './JobList';
import dataList from '../data/data.json';
import Filters from './Filters';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
`;

const Main = () => {
  const [filters, setFilters] = useState([]);

  const addFilterHandler = e => {
    if (filters.includes(e.target.innerText)) return;
    setFilters(cur => [...cur, e.target.innerText]);
  };

  const filteredData = dataList.filter(data => {
    const dataInfo = [data.role, data.level, ...data.languages, ...data.tools];
    return filters.every(filter => dataInfo.includes(filter));
  });

  const clearAllFiltersHandler = () => {
    setFilters([]);
  };

  const removeFilterHandler = (e, item) => {
    const index = filters.indexOf(item);
    if (index < 0) return;
    setFilters(currentFilters => {
      const newFilters = [...currentFilters];
      newFilters.splice(index, 1);
      return newFilters;
    });
  };

  return (
    <MainContainer>
      {filters.length > 0 && (
        <Filters
          filters={filters}
          onClearAllFilters={clearAllFiltersHandler}
          onRemoveFilter={removeFilterHandler}
        />
      )}
      <JobList
        dataList={filters.length < 1 ? dataList : filteredData}
        onAddFilter={addFilterHandler}
      />
    </MainContainer>
  );
};

export default Main;
