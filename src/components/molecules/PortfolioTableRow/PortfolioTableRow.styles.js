import styled from 'styled-components';

export const StyledRow = styled.tr`
  height: 8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tintSecondary.dark3};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tintSecondary.dark7};
  }

  td:nth-last-of-type(2) {
    border-left: 3px solid ${({ theme }) => theme.colors.tintSecondary.dark5};
    padding-left: 3.5rem;
    padding-right: 0rem;
  }

  td:nth-last-of-type(1) {
    padding-left: 0.5rem;
    padding-right: 1.2rem;
  }
`;
