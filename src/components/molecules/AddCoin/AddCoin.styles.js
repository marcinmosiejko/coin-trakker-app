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

  button {
    margin-top: 0.6rem;
  }
`;

export const StyledButton = styled(Button)`
  padding: 0.8rem 2rem;
  font-size: 1.4rem;
`;
