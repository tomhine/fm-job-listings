import { useState } from 'react';
import styled from 'styled-components';
import JobList from './JobList';
import dataList from '../data/data.json';

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
    setFilters(cur => [...cur, e.target.innerText]);
    console.log(filters);
  };

  const filteredData = dataList.filter(
    data =>
      filters.includes(data.role) ||
      filters.includes(data.level) ||
      filters.includes(...data.languages)
  );

  return (
    <MainContainer>
      <JobList
        dataList={filters.length < 1 ? dataList : filteredData}
        onAddFilter={addFilterHandler}
      />
    </MainContainer>
  );
};

export default Main;
