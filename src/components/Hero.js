import { h, Component } from 'preact';

import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Wrapper from '../helpers/Wrapper';
import Button from '../helpers/Button';
import Particles from '../helpers/Particles';
import ScrollReveal from '../helpers/ScrollReveal';

const Section = styled.section`
  background-color: ${props => props.theme.color.main};
  height: calc(100vh - ${props => props.theme.size.headerH});
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const StyledWrapper = styled(Wrapper)`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.title};
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.06em;

  margin: 0;
  margin-bottom: 16px;

  overflow: hidden;
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.title};
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.06em;

  margin: 0;
  margin-bottom: 48px;

  overflow: hidden;
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
  overflow: hidden;

  ${breakpoint('xsmall', 'medium')`
    display: none;
  `}
`;

const buttonStyles = css`
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.main};
  padding: 10px 14px 10px 10px;
  border-radius: 24px;
  box-shadow: 0 8px 8px ${props => props.theme.color.blackDividers};
`;

class Hero extends Component {
  render() {
    const animationConfig = {
      animateIn: 'active',
      duration: 0.8,
      animateOnce: true,
    }

    return (
      <Section>
        <StyledWrapper>

          <Title>
            <ScrollReveal
              {...animationConfig}
              delay={200}>
              Design your machine today.
            </ScrollReveal>
          </Title>

          <Subtitle>
            <ScrollReveal
              {...animationConfig}
              delay={400}>
              Get it shipped tomorrow.
            </ScrollReveal>
          </Subtitle>

          <Description>
            <ScrollReveal
              {...animationConfig}
              delay={600}>
              {
                `The only platform where you can design and build custom ` +
                `machine from a web-browser in just a few days.`
              }
            </ScrollReveal>
          </Description>

          <Button
            icon="play_circle_outline"
            iconPosition="before"
            iconSize="24px"
            overrides={buttonStyles}>
            Play Intro
          </Button>

        </StyledWrapper>
        <Particles />
      </Section>
    );
  }
}

export default Hero;
