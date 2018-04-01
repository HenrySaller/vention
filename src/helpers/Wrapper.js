import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';

const Wrapper = styled.div`
  max-width: ${props => props.theme.size.wrapperW};
  flex-basis: 100%;
  width: 100%;

  ${({margin}) => map(margin, val => val && `
    margin: ${val};
  `)}
`;

Wrapper.defaultProps = {
  margin: {
    xsmall: '0 24px',
    small: '0 56px',
    large: '0 80px',
    xlarge: '0 auto',
  }
}

export default Wrapper;
