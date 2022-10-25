import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Wrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 20rem;
  min-height: 20rem;
  padding: 3rem;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  z-index: 999;

  &:focus {
    outline: none;
  }
`;

export const Relative = styled.div`
  width: 100%;
  height: 1rem;
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 2.6em;
    height: 2.6rem;
    transform: translate(50%, -50%);
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary};

    stroke: ${({ theme }) => theme.colors.tintSecondary.light8};

    transition: all 0.2s;

    &:hover {
      stroke: ${({ theme }) => theme.colors.tintSecondary.light12};
    }

    svg {
      stroke-width: 1px;
    }
  }
`;
