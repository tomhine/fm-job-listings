import styled from 'styled-components';
import JobItem from './JobItem';

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 87%;
  margin: 55px 0px;
`;

const JobList = ({ dataList }) => {
  return (
    <ListContainer>
      <JobItem data={dataList[0]} />
    </ListContainer>
  );
};

export default JobList;
