import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const StyledForm = styled.form`
  width: 30rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;

  span {
    color: ${({ theme }) => theme.colors.red};
    display: block;
    height: 1.4rem;
    font-size: 1.4rem;
    margin: 0.2rem 0 2rem;
  }

  button {
    margin-top: 0.6rem;
  }
`;

export const StyledButton = styled(Button)`
  padding: 0.8rem 2rem;
  font-size: 1.4rem;
`;
