import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
  padding: ${p => p.theme.space[0]};
  list-style-type: none;
`;
export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    padding-left: ${p => p.theme.space[5]}px;
  }
`;
