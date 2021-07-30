import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import InfoMain from './InfoMain';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border-left: 5px solid
    ${({ featured }) => (featured ? 'var(--primary)' : 'white')};
  width: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
    height: 150px;
    width: 95%;
  }
`;

const Hori = styled.div`
  width: 87%;
  height: 1px;
  background-color: var(--light-text);
  opacity: 0.5;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
  width: 90%;
  align-self: flex-start;

  @media (min-width: 800px) {
    align-self: center;
    justify-content: flex-end;
    margin-right: 10px;
  }
`;

const Tag = styled.div`
  background-color: var(--filter-tags);
  color: var(--primary);
  padding: 8px 10px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  max-width: max-content;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: var(--primary);
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  align-self: flex-start;
  margin-left: 20px;
  margin-top: -20px;

  @media (min-width: 800px) {
    margin: 20px 18px 20px 26px;
    align-self: center;
    width: 88px;
    height: 88px;
  }
`;

const JobItem = ({ data, onAddFilter }) => {
  const tags = [data.role, data.level, ...data.languages, ...data.tools];
  const logoImg = process.env.PUBLIC_URL + data.logo;

  const windowWidth = useWindowSize().width;

  return (
    <Item featured={data.featured}>
      <Logo src={logoImg} />
      <InfoMain data={data} />
      {windowWidth < 800 && <Hori />}
      <TagContainer>
        {tags.map(tag => (
          <Tag key={`${tag}_${Math.random()}`} onClick={onAddFilter}>
            {tag}
          </Tag>
        ))}
      </TagContainer>
    </Item>
  );
};

export default JobItem;
