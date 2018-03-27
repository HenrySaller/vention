import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

import { footer as data } from './data';

import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';

import Wrapper from './styles/Wrapper';

// Mixins
const textMixin = css`
  color: ${props => props.theme.color.blackDisabled};
  font-family: ${props => props.theme.font.main};
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.5px;
  margin: 12px 0;
`;

// Styled Components
const Section = styled.section`
  background-color: ${props => props.theme.color.grey200};
`;

const Description = styled.p`
  ${textMixin};
  text-align: center;

  ${breakpoint('medium')`
    text-align: left;
  `}
`;

const StyledLinks = styled.p`
  margin: 0;
  text-align: center;

  ${breakpoint('medium')`
    text-align: right;
  `}
`;

const StyledLink = styled(Link)`
  ${textMixin};

  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  &:not(:last-child)::after {
    display: inline-block;
    content: '/';
    padding: 0 0.5em;
  }
`;

// Components
const Links = (props) => (
  <StyledLinks>
    {props.urls.map((link) => (
      <StyledLink to={link.path}>{link.title}</StyledLink>
    ))}
  </StyledLinks>
);

// Main Component
class Copyright extends Component {
  render() {
    return (
      <Section>
        <Wrapper>
          <Grid>
            <Grid.Unit size={{ medium: 1 / 2 }}>
              <Description>© 2016 Vention  /  All rights reserved</Description>
            </Grid.Unit>
            <Grid.Unit size={{ medium: 1 / 2 }}>
              <Links urls={data.copyright.urls} />
            </Grid.Unit>
          </Grid>
        </Wrapper>
      </Section>
    );
  }
}

export default Copyright;
