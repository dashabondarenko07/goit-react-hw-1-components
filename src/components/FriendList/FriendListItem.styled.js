import styled from 'styled-components';

export const Status = styled.span`
  height: 48px;
  width: 48px;
  border-radius: ${p => p.theme.radii.round};
  background: ${p => {
    return p.isOnline ? p.theme.colors.green : p.theme.colors.red;
  }};
`;
