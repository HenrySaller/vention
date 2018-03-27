import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Wrapper = styled.div`
  max-width: ${props => props.theme.size.wrapper};
  margin: 0 24px;

  ${breakpoint('small')`
    margin: 0 56px;
  `}

  ${breakpoint('large')`
    margin: 0 80px;
  `}

  ${breakpoint('xlarge')`
    margin: 0 auto;
  `}
`;

export default Wrapper;
