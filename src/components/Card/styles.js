import styled from 'styled-components';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
  },
});

export const Tile = styled.div({
  backgroundColor: '#f1f1f1',
  margin: '0.5rem',
  padding: '1rem',
  fontSize: '24px',
});
