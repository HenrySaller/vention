import { h, Component } from 'preact';

import { steps as data } from '../data';

import styled, { css, keyframes } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ScrollAnimation from 'react-animate-on-scroll';

import Wrapper from '../helpers/Wrapper';
import Icon from '../helpers/Icon';
import ScrollReveal from '../helpers/ScrollReveal';
import Animate from '../helpers/Animate';

const Section = styled.section`
  background-color: ${props => props.theme.color.grey100};
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 80px 0;

  ${breakpoint('medium')`
    padding-bottom: 240px;
  `}
`;

const BackgroundTop = styled.div`
  background-color: ${props => props.theme.color.grey100};
  position: absolute;
  top: 0; right: 0; left: 0;
  height: 50vh;
  z-index: -1;

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
  margin-bottom: 16px;
  max-width: 680px;

  overflow: hidden;
`;

const slideAnimationConfig = (props) => {
  const config = {
    from: -25,
    to: 10,
  }

  const from = `${props.reverse ? -config.from : config.from}%`;
  const to = `${props.reverse ? -config.to : config.to}%`;

  return {from, to};
}

const slideAnimation = (props) => {
  const config = slideAnimationConfig(props);

  return keyframes`
    from {
      transform: translateX(${config.from});
      opacity: 0;
    }
    to {
      transform: translateX(${config.to});
      opacity: 1;
    }
  `
};

const fadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const StyledBox = styled(Box).attrs({
  color: props => props.theme.color.main,
})`
  background-color: ${props => props.theme.color.white};
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  border-radius: 60px;
  padding: 24px;
  margin: 0 auto;
  margin-top: 40px;
  width: 100%;

  will-change: transform, opacity;

  &::before {
    display: block;
    content: '';
    overflow: hidden;

    position: absolute;
    top: 0; right: 5%; bottom: 10%; left: 5%;
    z-index: -1;

    border-radius: 60px;
    transform-origin: center top;

    box-shadow: 0 24px 32px ${props => props.theme.color.blackDividers};

    will-change: transform;
    transition: transform 0.6s ${props => props.theme.easing.easeExpoOut};
  }

  &::after {
    display: block;
    content: '';

    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;

    margin: -1px;
    border-radius: 60px;

    border: 1px solid ${props => props.theme.color.black};
    opacity: 0.12;

    will-change: opacity;
    transition: opacity 0.6s ${props => props.theme.easing.easeExpoOut};
  }

  ${breakpoint('xsmall', 'medium')`
    &.active {
      animation-name: ${fadeInAnimation};
      animation-fill-mode: forwards;
    }

    border-radius: 24px;

    &::after, &::before {
      border-radius: 24px;
    }
  `}

  ${breakpoint('medium')`
    width: 65%;
    transform: translateX(${
      props => slideAnimationConfig({reverse: props.reverse}).from
    });

    &:hover {
      &::before {transform: scale(1.1);}
      &::after {opacity: 0;}
    }

    &.active {
      animation-name: ${props => slideAnimation({reverse: props.reverse})};
      animation-fill-mode: forwards;
    }
  `}

  ${breakpoint('large')`
    width: 560px;
  `}
`;

const BoxWrapper = styled.div`
  position: relative;
`;

const BoxBg = styled.div`
  display: block;
  content: '';

  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -1;
  border-radius: 60px;
  will-change: transform;

  background-color: ${props => props.theme.color.white};

  ${breakpoint('xsmall', 'medium')`
  border-radius: 24px;
  `}
`;

const BoxInfo = styled.div`
  flex-grow: 1;
  text-align: left;
  margin: 0 16px 0 24px;
`;

const BoxTitle = styled.h3`
  color: ${props => props.theme.color.blackPrimary};
  font-family: ${props => props.theme.font.title};
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.06em;

  margin: 0;
  margin-bottom: 4px;
`;

const BoxDescription = styled.p`
  color: ${props => props.theme.color.blackPrimary};
  font-family: ${props => props.theme.font.main};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;

  margin: 0;
`;

function Box(props) {
  return (
    <ScrollAnimation
      className={props.className}
      animateIn="active"
      duration={0.8}
      animateOnce={true}>
      <BoxBg />
      <Icon
        icon={props.icon}
        size={{xsmall: '24px', medium: '40px'}}
        color={props.color}
        border="4px"
        padding="12px" />
      <BoxInfo>{props.children}</BoxInfo>
    </ScrollAnimation>
  )
}

const revealAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const Number = styled(ScrollAnimation)`
  position: absolute;
  top: 0;

  ${props => props.align && css`
      ${props.align}: 0;
  `}

  ${props => props.position && css`
      transform: translate(${props.position});
  `}

  color: ${props => props.theme.color.grey200};
  font-family: ${props => props.theme.font.title};
  font-weight: 600;
  font-size: 540px;
  line-height: 320px;

  user-select: none;
  opacity: 0;
  will-change: opacity;

  ${breakpoint('xsmall', 'medium')`
    display: none;
  `}

  ${breakpoint('medium')`
    &.active {
      animation-name: ${revealAnimation};
      animation-fill-mode: forwards;
    }
  `}
`;

class Steps extends Component {
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
        <Wrapper>

          <Title>
            <ScrollReveal
              {...revealConfig}
              delay={0}>
              Design and Build in Minutes
            </ScrollReveal>
          </Title>

          <Description>
            <ScrollReveal
              {...revealConfig}
              delay={200}>
              {
                `A single hardware and software environment to select ` +
                `parts, design, order and assemble industrial equipement ` +
                `and prototypes.`
              }
            </ScrollReveal>
          </Description>

          {data.map((step) => (
            <BoxWrapper>
              <Number
                {...revealConfig}
                align={step.number.align}
                position={step.number.position}>
                {step.number.content}
              </Number>
              <StyledBox
                icon={step.icon}
                reverse={step.reverse}>
                <BoxTitle>{step.title}</BoxTitle>
                <BoxDescription>{step.description}</BoxDescription>
              </StyledBox>
            </BoxWrapper>
          ))}

        </Wrapper>
      </Section>
    )
  }
}

export default Steps;
