import styled from 'styled-components';

export const ImageHolder = styled.img({
  cursor: 'pointer',
  width: '100%',
  height: '30rem',
  '@media (max-width: 480px)': {
    height: 'auto',
  },
});

export const Title = styled.h1({
  textAlign: 'center',
});
