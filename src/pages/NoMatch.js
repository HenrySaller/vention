import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Wrapper from '../helpers/Wrapper';

const Section = styled.section`
  background-color: ${props => props.theme.color.grey200};
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: ${props => props.theme.color.blackDividers};
  font-family: ${props => props.theme.font.title};
  font-weight: 600;
  font-size: 80px;
  line-height: 1;
  letter-spacing: 0.01em;
  margin: 0 0 32px -0.08em;
  user-select: none;
`;

const Description = styled.p`
  color: ${props => props.theme.color.blackSecondary};
  font-family: ${props => props.theme.font.main};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin: 8px 0;
  user-select: none;
`;

const StyledLink = Description.withComponent(Link).extend`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: ${props => props.theme.color.blackDividers};
  }
`;

class NoMatch extends Component {
  render({ match }) {
    return (
      <Section>
        <Wrapper>
          <Title>Empty Page</Title>
          <Description>title: {match.params.path}</Description>
          <StyledLink to="/">back to home →</StyledLink>
        </Wrapper>
      </Section>
    );
  }
}

export default NoMatch;
