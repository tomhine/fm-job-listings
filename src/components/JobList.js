import styled from 'styled-components';
import JobItem from './JobItem';

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 87%;
  margin: 55px 0px;
`;

const JobList = ({ dataList, onAddFilter }) => {
  const jobs = dataList.map(job => (
    <JobItem key={job.id} data={job} onAddFilter={onAddFilter} />
  ));

  return <ListContainer>{jobs}</ListContainer>;
};

export default JobList;
