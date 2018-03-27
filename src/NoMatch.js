import { h, Component } from 'preact';
import styled from 'styled-components';

import Wrapper from './styles/Wrapper';

const Section = styled.section`
  background-color: ${props => props.theme.color.grey200};
`;

const Description = styled.p`
  font-family: ${props => props.theme.font.main};
`;

class NoMatch extends Component {
  render({ match }) {
    return (
      <Section>
        <Wrapper>
          <Description>Page: {match.params.path}</Description>
        </Wrapper>
      </Section>
    );
  }
}

export default NoMatch;
