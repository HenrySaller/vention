import { h, Component } from 'preact';

import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Wrapper from '../helpers/Wrapper';
import ScrollReveal from '../helpers/ScrollReveal';
import Button from '../helpers/Button';
import Animate from '../helpers/Animate';

import sceneBg from '../img/scene/bg.jpg';
import sceneDisplay from '../img/scene/display.png';

const Section = styled.div`
  background-color: ${props => props.theme.color.scene};
  position: relative;
`;

const StyledWrapper = styled(Wrapper)`
  position: relative;
  padding-bottom: 120px;

  ${breakpoint('medium')`
    padding-bottom: 240px;
  `}
`;

const BackgroundTop = styled.div`
  background-color: ${props => props.theme.color.white};
  position: absolute;
  top: 0; right: 0; left: 0;
  z-index: 1;

  will-change: transform;

  ${breakpoint('xsmall', 'medium')`
    padding-bottom: 18%;
  `}

  ${breakpoint('medium')`
    height: 50vh;
    transform: translateY(var(--ty));
  `}
`;

const SceneBg = styled.img`
  display: block;
  width: 100%;
  z-index: 0;
`;

const SceneDisplay = styled.img`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0 10%;

  position: absolute;
  top: 0; right: 0; left: 0;
  z-index: 2;

  will-change: transform;

  ${breakpoint('xsmall', 'medium')`
    padding-top: 10%;
  `}

  ${breakpoint('medium')`
    transform: translateY(var(--ty));
  `}
`;

const Description = styled.p`
  color: ${props => props.theme.color.blackSecondary};
  font-family: ${props => props.theme.font.main};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.03em;

  margin: 0 auto;
  margin-top: 24px;
  max-width: 680px;

  overflow: hidden;
`;

const buttonStyles = css`
  padding: 22px 32px;
  border-radius: 40px;
`;

class Scene extends Component {
  Animate = new Animate();

  componentDidMount() {
    this.Animate.init();
    this.Animate.start();
  }

  componentWillUnmount() {
    this.Animate.destroy();
  }

  render() {
    const revealConfig = {
      animateIn: 'active',
      duration: 0.8,
      animateOnce: true,
    }

    return (
      <Section>
        <BackgroundTop
          ref={el => this.Animate.add(el, {
            from: 'top-bottom',
            to: 'middle-top',
            props: {
              '--ty': {
                from: '10%',
                to: '-70%',
                timing: 'sineOut',
              },
            },
          })} />

        <StyledWrapper>
          <SceneDisplay
            src={sceneDisplay}
            ref={el => this.Animate.add(el, {
              from: 'top-bottom',
              to: 'top-top',
              props: {
                '--ty': {
                  from: '80%',
                  to: '30%',
                  timing: 'sineOut',
                },
              },
            })} />

          <SceneBg src={sceneBg} />

          <Button
            icon="arrow_forward"
            iconPosition="after"
            fontSize="24px"
            iconSize="32px"
            variation="main"
            shape="fill"
            overrides={buttonStyles}>
            Get Started
          </Button>
          <Description>
            <ScrollReveal
              {...revealConfig}
              delay={200}>
              {
                `Browse through a continuously expanding library of ` +
                `crowd-sourced designs, or start a new project from scratch.`
              }
            </ScrollReveal>
          </Description>
        </StyledWrapper>
      </Section>
    )
  }
}

export default Scene;
