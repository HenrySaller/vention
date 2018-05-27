import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

import { catalog as data } from '../data';

import styled, { css, withTheme } from 'styled-components';
import breakpoint, { map } from 'styled-components-breakpoint';
import { grid } from 'styled-components-grid';

import Wrapper from '../helpers/Wrapper';
import Button from '../helpers/Button';
import ScrollReveal from '../helpers/ScrollReveal';
import Animate from '../helpers/Animate';

import Press from './Press';

const Section = styled.section`
  background-color: ${props => props.theme.color.secondary};
  text-align: center;
  position: relative;
  z-index: 3;
  padding: 80px 0;

  ${breakpoint('medium')`
    padding-bottom: 240px;
  `}

  &::before {
    display: block;
    content: '';
    background-color: ${props => props.theme.color.white};
    position: absolute;
    top: 0; right: 0; left: 0;
    height: 50vh;
    z-index: -1;
  }
`;

const BackgroundTop = styled.div`
  background-color: ${props => props.theme.color.white};
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

const BackgroundMiddle = styled.div`
  background-color: ${props => props.theme.color.white};
  position: absolute;
  top: 0; right: 0; left: 0;
  bottom: 50%;
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

const Items = styled.div`
  ${grid}

  background-color: ${props => props.theme.color.grey50};
  background-clip: padding-box;
  border: 1px solid ${props => props.theme.color.blackDividers};
  box-shadow: 0 16px 32px ${props => props.theme.color.blackDividers};
  margin-top: 56px;
`;

const Info = styled.div`
  ${grid.unit({size: { medium: 1 / 3, xlarge: 1 / 4 }})}

  background-color: ${props => props.theme.color.white};
  box-sizing: border-box;
  text-align: left;
  padding: 24px;

  ${breakpoint('xsmall', 'medium')`
    border-bottom: 1px solid ${props => props.theme.color.blackDividers};
  `}

  ${breakpoint('medium')`
    border-right: 1px solid ${props => props.theme.color.blackDividers};

    display: flex;
    flex-direction: column;
  `}

  ${({padding}) => map(padding, val => val && `
    padding: ${val};
  `)}
`;

Info.defaultProps = {
  padding: {
    xsmall: '24px',
    small: '48px',
    medium: '40px',
  }
}

const Text = styled.p`
  color: ${props => props.theme.color.blackSecondary};
  font-family: ${props => props.theme.font.main};
  font-size: 14px;
  line-height: 24px;

  margin: 0;
  flex-grow: 1;

  ${breakpoint('xsmall', 'medium')`
    margin-bottom: 32px;
  `}

  ${breakpoint('medium')`
    line-height: 32px;
  `}
`;

const buttonStyles = css`
  position: relative;
  text-align: left;
  border-width: 0;

  &::after {
    display: block;
    content: '';

    position: absolute;
    bottom: 0;
    left: 5px;

    height: 2px;
    width: 24px;

    background-color: ${props => props.theme.color.secondary};
  }
`;

const ItemsGrid = styled.div`
  ${grid.unit({size: { medium: 2 / 3, xlarge: 3 / 4 }})}

  display: flex;
  flex-wrap: wrap;
`;

const ItemImageWrap = styled.div`
  ${breakpoint('medium')`
    position: relative;
    padding-bottom: 100%;
  `}
`;

const ItemTitle = styled.h4`
  color: ${props => props.theme.color.blackPrimary};
  font-family: ${props => props.theme.font.title};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.06em;

  margin: 0;
  padding: 8px 16px;

  position: relative;

  ${breakpoint('medium')`
    position: absolute;
    top: 0; left: 0; right: 0;

    opacity: 0;

    will-change: transform, opacity;
    transition:
      transform 0.3s ${props => props.theme.easing.easeCubicInOut},
      opacity 0.3s ${props => props.theme.easing.easeCubicInOut};
  `}

  &::after {
    display: block;
    content: '';

    position: absolute;
    bottom: 0;
    left: 50%;

    height: 2px;
    width: 24px;

    transform: translate(-50%, 100%);

    background-color: ${props => props.theme.color.blackDividers};
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;

  ${breakpoint('xsmall', 'medium')`
    width: 75%;
  `}

  ${breakpoint('medium')`
    will-change: transform;
    transition: transform 0.3s ${props => props.theme.easing.easeCubicInOut};

    position: absolute;
    top: 0; left: 0; right: 0;
  `}
`;

const Item = styled(Link)`
  ${grid.unit({size: { small: 1 / 2, xlarge: 1 / 3 }})}

  text-decoration: none;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  padding: 24px;

  ${breakpoint('medium')`
    &::before {
      display: block;
      content: '';

      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: -1;

      background-color: ${props => props.theme.color.grey100};
      border: 1px solid ${props => props.theme.color.blackDividers};
      opacity: 0;

      will-change: opacity;
      transition: opacity 0.3s ${props => props.theme.easing.easeCubicInOut};
    }

    &:hover {
      &::before {
        opacity: 1;
      }

      ${ItemTitle} {
        transform: translateY(16px);
        opacity: 1;
      }

      ${StyledImage} {
        transform: translateY(24px);
      }
    }
  `}
`;

class Catalog extends Component {
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

        <BackgroundMiddle
          ref={el => this.Animate.add(el, {
            from: 'middle-bottom',
            to: 'middle-top',
            props: {
              '--ty': {
                from: '25%',
                to: '-25',
                timing: 'sineOut',
              },
            },
          })} />

        <Wrapper>

          <Title>
            <ScrollReveal
              {...revealConfig}
              delay={200}>
              An Array of Custom Equipment at Your Fingertips
            </ScrollReveal>
          </Title>

          <Description>
            <ScrollReveal
              {...revealConfig}
              delay={400}>
              {
                `Browse through a continuously expanding library of ` +
                `crowd-sourced designs, or start a new project from scratch.`
              }
            </ScrollReveal>
          </Description>

          <Items>

            <Info>
              <Text>
                {
                  `Vention's growing library of structural, motion, and ` +
                  `control components enables you to build an array of ` +
                  `custom industrial applications without ever worrying ` +
                  `about part compatibility.`
                }
              </Text>
              <Button
                color={this.props.theme.color.secondary}
                padding="7px 0"
                overrides={buttonStyles}>
                Download Catalog
              </Button>
            </Info>

            <ItemsGrid>
              {data.map(item => (
                <Item to={item.url}>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemImageWrap>
                    <StyledImage src={item.src} alt={item.title} />
                  </ItemImageWrap>
                </Item>
              ))}
            </ItemsGrid>

          </Items>

          <Press />

        </Wrapper>
      </Section>
    )
  }
}

export default withTheme(Catalog);
