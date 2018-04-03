import { h, Component } from 'preact';

import styled, { css, keyframes } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ScrollAnimation from 'react-animate-on-scroll';

import Wrapper from '../helpers/Wrapper';
import Icon from '../helpers/Icon';
import ScrollReveal from '../helpers/ScrollReveal';

const Section = styled.section`
  background-color: ${props => props.theme.color.grey100};
  text-align: center;
  overflow: hidden;
  padding: 80px 0;
`;

const Title = styled.h2`
  color: ${props => props.theme.color.blackPrimary};
  font-family: ${props => props.theme.font.title};
  font-weight: 500;
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

  &::before {
    display: block;
    content: '';

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

  &:hover {
    &::before {transform: scale(1.1);}
    &::after {opacity: 0;}
  }

  ${breakpoint('medium')`
    width: 65%;

    will-change: transform;
    transition: transform 0.1s linear;
    transform: translateX(var(--tx));
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

  background-color: ${props => props.theme.color.white};
`;

const BoxInfo = styled.div`
  flex-grow: 1;
  text-align: left;
  margin: 0 16px 0 24px;
`;

const BoxTitle = styled.h3`
  color: ${props => props.theme.color.blackPrimary};
  font-family: ${props => props.theme.font.title};
  font-weight: 500;
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
    <div className={props.className}>
      <BoxBg />
      <Icon
        icon={props.icon}
        size={{xsmall: '24px', medium: '40px'}}
        color={props.color}
        border="4px"
        padding="12px" />
      <BoxInfo>{props.children}</BoxInfo>
    </div>
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
  font-weight: 700;
  font-size: 540px;
  line-height: 320px;

  user-select: none;

  will-change: opacity;

  ${breakpoint('xsmall', 'medium')`
    display: none;
  `}

  ${breakpoint('medium')`
    &.active {
      animation-name: ${revealAnimation};
    }
  `}
`;

class Steps extends Component {
  Animate = {
    elements: [],
    instances: [],
    getAnimations: function() {
      const list = [];
      this.elements.forEach((el, i) => {
        list.push({
          box: el,
        })
      });
      return list;
    }
  }

  componentDidMount() {
    const animations = this.Animate.getAnimations();
    const config = {
      from: -25,
      to: 10,
    }

    animations.forEach((ref) => {
      const from = `${ref.box.props.reverse ? -config.from : config.from}%`;
      const to = `${ref.box.props.reverse ? -config.to : config.to}%`;

      this.Animate.instances.push(basicScroll.create({
        elem: ref.box.base,
        from: 'bottom-bottom',
        to: 'top-middle',
        direct: true,
        props: {
          '--tx': {
            from,
            to,
            timing: 'expoOut',
          },
        },
      }));
    });

    this.Animate.instances.forEach(instance => instance.start());
  }

  componentWillUnmount() {
    this.Animate.instances.forEach(instance => instance.destroy());
  }

  render() {
    const revealConfig = {
      animateIn: 'active',
      duration: 0.8,
      animateOnce: true,
    }

    return (
      <Section>
        <Wrapper>

          <Title>
            <ScrollReveal
              {...revealConfig}
              delay={200}>
              Design and Build in Minutes
            </ScrollReveal>
          </Title>

          <Description>
            <ScrollReveal
              {...revealConfig}
              delay={400}>
              A single hardware and software environment to select parts, design, order and assemble industrial equipement and prototypes.
            </ScrollReveal>
          </Description>

          <BoxWrapper>
            <Number
              {...revealConfig}
              align="left"
              position="-80%, -60%">
              1
            </Number>
            <StyledBox
              icon="create"
              reverse
              ref={el => this.Animate.elements.push(el)}>
              <BoxTitle>Design</BoxTitle>
              <BoxDescription>Create an assembly in your browser using Vention’s library of industrial modular parts.</BoxDescription>
            </StyledBox>
          </BoxWrapper>

          <BoxWrapper>
            <Number
              {...revealConfig}
              align="right"
              position="20%, -80%">
              2
            </Number>
            <StyledBox
              icon="shopping_cart"
              ref={el => this.Animate.elements.push(el)}>
              <BoxTitle>Order</BoxTitle>
              <BoxDescription>Review your Assembly’s bill of material and order all the parts directly from Vention’s website.</BoxDescription>
            </StyledBox>
          </BoxWrapper>

          <BoxWrapper>
            <Number
              {...revealConfig}
              align="left"
              position="0, -40%">
              3
            </Number>
            <StyledBox
              icon="build"
              reverse
              ref={el => this.Animate.elements.push(el)}>
              <BoxTitle>Assemble</BoxTitle>
              <BoxDescription>Receive your flat-pack box and start assembling your design as you would for IKEA furniture.</BoxDescription>
            </StyledBox>
          </BoxWrapper>

          <BoxWrapper>
            <Number
              {...revealConfig}
              align="right"
              position="60%, -70%">
              4
            </Number>
            <StyledBox
              icon="publish"
              ref={el => this.Animate.elements.push(el)}>
              <BoxTitle>Publish</BoxTitle>
              <BoxDescription>Opt to publish your design privately or publicly.</BoxDescription>
            </StyledBox>
          </BoxWrapper>

        </Wrapper>
      </Section>
    )
  }
}

export default Steps;
