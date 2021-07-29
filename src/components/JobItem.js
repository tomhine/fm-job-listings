import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border-left: 5px solid white;
  width: 327px;
  height: 258px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const JobItem = ({ data }) => {
  return (
    <Item>
      <Info>{data.company}</Info>
    </Item>
  );
};

export default JobItem;
