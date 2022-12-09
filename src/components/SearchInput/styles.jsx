import styled from 'styled-components';

export const Input = styled.input({
  border: '1px solid #ccc',
  borderRadius: '10px',
  display: 'inline-block',
  margin: '0.5rem',
  padding: '1rem',
  width: '30%',
  fontSize: '20px',
  '@media (max-width: 760px)': {
    width: 'auto',
  },
});

export const ErrorMsg = styled.span({
  color: 'red',
  fontWeight: '700',
  padding: '10px',
});

export const Button = styled.button({
  backgroundColor: '#1976d2',
  borderRadius: '10px',
  color: '#fff',
  margin: '0 auto',
  padding: '1rem',
  width: '10rem',
  fontSize: '20px',
  '@media (max-width: 760px)': {
    width: 'auto',
  },
});
