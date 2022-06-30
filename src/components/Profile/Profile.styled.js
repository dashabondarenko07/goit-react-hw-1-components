import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
`;
export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    padding-left: ${p => p.theme.space[5]}px;
  }
`;
