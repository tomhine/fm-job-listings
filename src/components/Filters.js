import React from 'react';
import styled from 'styled-components';
import { Card, Tag } from './UIElements';
import ClearIcon from '@material-ui/icons/Clear';

const Container = styled(Card)`
  flex-direction: row;
  width: 87%;
  padding: 18px 20px;
  position: relative;
  top: -30px;
  margin-bottom: -40px;

  @media (min-width: 800px) {
    height: auto;
    width: 83%;

    padding: 18px 32px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  gap: 12px 30px;
`;

const Clear = styled.button`
  background-color: transparent;
  border: none;
  color: var(--light-text);
  font-family: 'Spartan', sans-serif;
  font-size: 12px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: var(--primary);
  }
`;

const TagItem = styled.div`
  display: flex;
`;

const CrossContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  background-color: var(--primary);
  color: white;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  &:hover {
    cursor: pointer;
    background-color: var(--dark-text);
  }
`;

const Filters = ({ filters, onClearAllFilters, onRemoveFilter }) => {
  const filterTags = filters.map(filter => (
    <TagItem key={filter}>
      <Tag>{filter}</Tag>
      <CrossContainer onClick={e => onRemoveFilter(e, filter)}>
        <ClearIcon />
      </CrossContainer>
    </TagItem>
  ));

  return (
    <Container>
      <TagContainer>{filterTags}</TagContainer>
      <Clear onClick={onClearAllFilters}>Clear</Clear>
    </Container>
  );
};
export default Filters;
