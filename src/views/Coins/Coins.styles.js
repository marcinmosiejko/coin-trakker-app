import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Wrapper = styled.div`
  min-height: 100rem;
  padding: 3rem 2rem 3rem 2.5rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  button {
    cursor: pointer;
    padding: 0.2rem 2rem;
  }
`;

export const Pagination = styled(ReactPaginate)`
  list-style-type: none;

  display: flex;
  gap: 1.2rem;

  li {
    cursor: pointer;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.tintSecondary.dark7};

    -ms-user-select: none;
    user-select: none;

    transition: all 0.25s;

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
    }
  }
`;
