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
  return (
    <MainContainer>
      <JobList dataList={dataList} />
    </MainContainer>
  );
};

export default Main;
