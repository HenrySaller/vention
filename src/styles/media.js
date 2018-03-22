import { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 375
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc;
}, {});

export default media;
