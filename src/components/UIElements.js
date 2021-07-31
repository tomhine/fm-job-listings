import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border-left: 5px solid white;
  width: 100%;
  box-shadow: 0 8px 14px 7px rgba(0, 0, 0, 0.08);

  @media (min-width: 800px) {
    flex-direction: row;
    height: 150px;
    width: 95%;
  }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--filter-tags);
  color: var(--primary);
  padding: 4px 10px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  max-width: max-content;
  height: 24px;
`;
