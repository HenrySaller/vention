import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

import { press as data } from '../data';

import styled from 'styled-components';

import ScrollReveal from '../helpers/ScrollReveal';

const Section = styled.div`
  background-color: transparent;
  text-align: center;
  padding-top: 80px;
`;

const Title = styled.h2`
  color: ${props => props.theme.color.white};
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
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.main};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.03em;

  margin: 0 auto;
  margin-bottom: 16px;
  max-width: 680px;

  overflow: hidden;
`;

const StyledLogo = styled.img`
  padding: 0 20px;
  margin-top: 40px;
`;

function Logo(props) {
  return (
    <Link to={props.brand.url}>
      <StyledLogo
        src={props.brand.src}
        alt={`${props.brand.title} Logo`} />
    </Link>
  )
}

class Press extends Component {
  render() {
    const revealConfig = {
      animateIn: 'active',
      duration: 0.8,
      animateOnce: true,
    }

    return (
      <Section>
        <Title>
          <ScrollReveal
            {...revealConfig}
            delay={200}>
            Vention on the News
          </ScrollReveal>
        </Title>

        <Description>
          <ScrollReveal
            {...revealConfig}
            delay={400}>
            See what trusted sources have to say about Vention.
          </ScrollReveal>
        </Description>

        {data.map((brand) => <Logo brand={brand} /> )}
      </Section>
    )
  }
}

export default Press;
