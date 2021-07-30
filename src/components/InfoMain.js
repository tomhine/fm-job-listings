import styled from 'styled-components';

const Info = styled.div`
  display: flex;
  flex-direction: column;
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

const Position = styled.h1`
  color: var(--dark-text);
  font-size: 16px;
  margin: 2px 0px;

  &:hover {
    cursor: pointer;
    color: var(--primary);
  }
`;

const InfoUL = styled.ul`
  color: var(--light-text);
  display: flex;
  font-size: 12px;
  padding: 0;
  gap: 18px;

  > * {
    &:first-child {
      list-style: none;
    }
  }
`;

const InfoMain = ({ data }) => {
  return (
    <Info>
      <Row>
        <Company>{data.company}</Company>
        {data.new && <NewPill>NEW!</NewPill>}
        {data.featured && <FeaturedPill>FEATURED</FeaturedPill>}
      </Row>
      <Position>{data.position}</Position>
      <InfoUL>
        <li>{data.postedAt}</li>
        <li>{data.contract}</li>
        <li>{data.location}</li>
      </InfoUL>
    </Info>
  );
};

export default InfoMain;
