import { h, Component } from 'preact';

import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';

import Wrapper from '../helpers/Wrapper';
import ScrollReveal from '../helpers/ScrollReveal';
import Button from '../helpers/Button';
import Input from '../helpers/Input';

const Section = styled.section`
  background-color: ${props => props.theme.color.secondary};
  position: relative;
  z-index: 5;
  padding: 24px 0;
`;

const Title = styled.h2`
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.title};
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.06em;

  margin: 0;

  overflow: hidden;

  ${breakpoint('xsmall', 'medium')`
    margin-bottom: 24px;
  `}
`;

const Form = styled.form`
  display: flex;
`;

const inputStyles = css`
  border-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.white};

  margin-right: 40px;
  flex-grow: 1;
  flex-shrink: 1;

  &::placeholder {
    color: ${props => props.theme.color.white};
  }
`;

const buttonStyles = css`
  border-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.white};
`;

class Newsletter extends Component {
  render() {
    const revealConfig = {
      animateIn: 'active',
      duration: 0.8,
      animateOnce: true,
    }

    return (
      <Section>

        <Wrapper>
          <Grid>

            <Grid.Unit size={{ medium: 1 / 2 }}>
              <Title>
                <ScrollReveal
                  {...revealConfig}
                  delay={200}>
                  Subscribe to our Newsletter
                </ScrollReveal>
              </Title>
            </Grid.Unit>

            <Grid.Unit size={{ medium: 1 / 2 }}>
              <Form action="/subscribe">
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  overrides={inputStyles} />
                <Button
                  type="submit"
                  shape="border"
                  overrides={buttonStyles} >
                  Subscribe
                </Button>
              </Form>
            </Grid.Unit>

          </Grid>
        </Wrapper>

      </Section>
    )
  }
}

export default Newsletter;
