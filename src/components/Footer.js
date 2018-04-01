import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

import { footer as data } from '../data';

import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { grid } from 'styled-components-grid';

import Wrapper from '../helpers/Wrapper';

// Styled Components
const Section = styled.section`
  background-color: ${props => props.theme.color.white};
`;

const FlexWrapper = Wrapper.extend`
  ${grid({ wrap: { medium: false }})}

  padding: 36px 0;
`;

const Group = styled.div`
  ${props => props.wide && css`
    margin-right: auto;
  `};

  ${breakpoint('xsmall', 'medium')`
    ${props => grid.unit({ size: { small: props.wide ? 1 : 1/2 } })}

    ${props => !props.wide && css`
      margin-top: 36px;
      padding-right: 16px;
    `}
  `}

  ${breakpoint('medium')`
    padding-right: 16px;

    ${props => !props.wide && css`
      min-width: max-content;
    `}
  `}
`;

const Title = styled.h5`
  color: ${props => props.theme.color.blackPrimary};
  font-family: ${props => props.theme.font.title};
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.06em;
  margin: 0;
`;

const Description = styled.p`
  color: ${props => props.theme.color.blackSecondary};
  font-family: ${props => props.theme.font.main};
  font-size: 12px;
  line-height: 24px;
  margin: 0;

  max-width: 440px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.color.blackSecondary};
  font-family: ${props => props.theme.font.main};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.03em;
  margin: 12px 0;

  display: block;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Components
const Links = (props) => (
  <Group>
    <Title>{props.data.title}</Title>
    {props.data.urls.map((link) => (
      <StyledLink to={link.path}>{link.title}</StyledLink>
    ))}
  </Group>
);

// Main Component
class Footer extends Component {
  render() {
    return (
      <Section>
        <FlexWrapper>
          <Group wide>
            <Title>About Vention</Title>
            <Description>
              {data.description.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
              })}
            </Description>
          </Group>
          {data.sections.map((section) => (
            <Links data={section} />
          ))}
        </FlexWrapper>
      </Section>
    );
  }
}

export default Footer;
