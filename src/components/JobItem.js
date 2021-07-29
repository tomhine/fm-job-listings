import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border-left: 5px solid
    ${({ featured }) => (featured ? 'var(--primary)' : 'white')};
  width: 327px;
  height: 258px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  padding: 10px;
  width: 95%;
`;

const Row = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 100%;
`;

const Company = styled.h3`
  color: var(--primary);
  font-size: 14px;
  margin-right: 10px;
`;

const NewPill = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding: 7px 8px 4px 8px;
  text-transform: uppercase;
  background-color: var(--primary);
  color: white;
  border-radius: 20px;
  font-weight: 700;
  font-size: 11px;
  text-align: center;
`;

const FeaturedPill = styled(NewPill)`
  background-color: var(--dark-text);
`;

const Position = styled.h1``;

const JobItem = ({ data }) => {
  return (
    <Item featured={data.featured}>
      <Info>
        <Row>
          <Company>{data.company}</Company>
          {data.new && <NewPill>NEW!</NewPill>}
          {data.featured && <FeaturedPill>FEATURED</FeaturedPill>}
        </Row>
      </Info>
    </Item>
  );
};

export default JobItem;
