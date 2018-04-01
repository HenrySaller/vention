import { h, Component } from 'preact';

import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Wrapper from '../helpers/Wrapper';
import Button from '../helpers/Button';
import Particles from '../helpers/Particles';

const Section = styled.section`
  background-color: ${props => props.theme.color.main};
  height: calc(100vh - ${props => props.theme.size.headerH});
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
`;

const StyledWrapper = styled(Wrapper)`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.title};
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.06em;
  margin: 0 0 16px 0;
`;

const Subtitle = styled.h3`
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.title};
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.06em;
  margin: 0 0 48px 0;
`;

const Description = styled.p`
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.main};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.03em;
  margin: 0 auto;
  margin-bottom: 48px;
  max-width: 400px;

  ${breakpoint('xsmall', 'medium')`
    display: none;
  `}
`;

const buttonStyles = css`
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.main};
  padding: 10px 14px 10px 10px;
  border-radius: 21px;
  box-shadow: 0 8px 8px ${props => props.theme.color.blackDividers};
`;

class Hero extends Component {
  render() {
    return (
      <Section>
        <StyledWrapper>
          <Title>Design your machine today. </Title>
          <Subtitle>Get it shipped tomorrow.</Subtitle>
          <Description>The only platform where you can design and build custom machine from a web-browser in just a few days.</Description>
          <Button icon="play_circle_outline" iconPosition="before" iconSize="24px" overrides={buttonStyles}>Play Intro</Button>
        </StyledWrapper>
        <Particles />
      </Section>
    );
  }
}

export default Hero;
