import { h, Component } from 'preact';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Wrapper from '../helpers/Wrapper';
import ScrollReveal from '../helpers/ScrollReveal';
import Animate from '../helpers/Animate';

import Scene from '../components/Scene';

const Section = styled.section`
  background-color: ${props => props.theme.color.white};
  text-align: center;
  position: relative;
  z-index: 4;
  padding-top: 80px;
`;

const BackgroundTop = styled.div`
  background-color: ${props => props.theme.color.white};
  position: absolute;
  top: 10px; right: 0; left: 0;
  height: 50vh;
  z-index: 1;

  will-change: transform;

  ${breakpoint('xsmall', 'medium')`
    display: none;
  `}

  ${breakpoint('medium')`
    transform: translateY(var(--ty));
  `}
`;

const Title = styled.h2`
  color: ${props => props.theme.color.blackPrimary};
  font-family: ${props => props.theme.font.title};
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.06em;

  margin: 0;
  margin-bottom: 16px;

  overflow: hidden;
`;

const Description = styled.p`
  color: ${props => props.theme.color.blackSecondary};
  font-family: ${props => props.theme.font.main};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.03em;

  margin: 0 auto;
  max-width: 680px;

  overflow: hidden;
`;

const StyledWrapper = styled(Wrapper)`
  position: relative;
  z-index: 2;
  padding-bottom: 24px;
`;

class Browser extends Component {
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
            to: 'middle-middle',
            props: {
              '--ty': {
                from: 0,
                to: '-100%',
                timing: 'sineIn',
              },
            },
          })} />

        <StyledWrapper>

          <Title>
            <ScrollReveal
              {...revealConfig}
              delay={200}>
              Hyperfast Design in Your Browser
            </ScrollReveal>
          </Title>

          <Description>
            <ScrollReveal
              {...revealConfig}
              delay={400}>
              {
                `Design your application using Vention's embedded part ` +
                `library and automatic component mating feature.`
              }
            </ScrollReveal>
          </Description>

        </StyledWrapper>

        <Scene />

      </Section>
    )
  }
}

export default Browser;
