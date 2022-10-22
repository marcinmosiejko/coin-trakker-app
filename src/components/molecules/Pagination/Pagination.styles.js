import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { breakPoints } from 'assets/styles/breakPoints';

export const StyledPagination = styled(ReactPaginate)`
  list-style-type: none;

  display: flex;
  justify-content: center;
  gap: 1.2rem;

  li {
    cursor: pointer;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.tintSecondary.dark7};

    -ms-user-select: none;
    user-select: none;

    transition: all 0.25s;

    @media only screen and (max-width: ${breakPoints.m}) {
      border-radius: 5px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.tintSecondary.dark11};
    }

    &.selected {
      color: ${({ theme }) => theme.colors.tintSecondary.dark1};
      background-color: ${({ theme }) => theme.colors.primary};
    }

    a {
      display: block;
      padding: 0.8rem 1.6rem;

      @media only screen and (max-width: ${breakPoints.m}) {
        font-size: 1.4rem;
        padding: 0.6rem 1.2rem;
      }
    }
  }
`;
