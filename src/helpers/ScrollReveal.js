import ScrollAnimation from 'react-animate-on-scroll';
import styled, { keyframes } from 'styled-components';

const revealAnimation = keyframes`
  from {transform: translateY(-100%);}
  to {transform: translateY(0);}
`;

const ScrollReveal = styled(ScrollAnimation)`
  will-change: transform;

  &.active {
    animation-name: ${revealAnimation};
    animation-timing-function: ${props => props.theme.easing.easeExpoOut};
  }
`;

export default ScrollReveal;
