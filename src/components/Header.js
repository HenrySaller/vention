import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import breakpoint, { map } from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';

import Button from '../helpers/Button';

import logoIcon from '../img/logo-icon.svg';
import logoTitle from '../img/logo-title.svg';

const Section = styled.section`
  height: ${props => props.theme.size.headerH};
  background-color: ${props => props.theme.color.white};
  box-shadow:
    0 1px 0 ${props => props.theme.color.blackDividers},
    0 2px 4px ${props => props.theme.color.blackDividers};
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
`;

const Placeholder = styled.div`
  margin-bottom: ${props => props.theme.size.headerH};
`;

const Wrapper = styled.div`
  max-width: ${props => props.theme.size.headerW};
  margin: 0 auto;

  ${({padding}) => map(padding, val => val && `
    padding: ${val};
  `)}
`;

Wrapper.defaultProps = {
  padding: {
    xsmall: '0 24px',
    small: '0 32px',
    medium: '0 56px',
  }
}

const Logo = styled(Link)`
  display: inline-block;
  font-size: 0;
  padding: 20px 0;
  cursor: pointer;
  user-select: none;
`;

const LogoTitle = styled.img`
  margin-left: 16px;

  ${breakpoint('xsmall', 'medium')`
    display: none;
  `}
`;

const Actions = styled.div`
  text-align: right;
  margin: 24px 0;
`;

class Header extends Component {
  render() {
    return (
      <header>
        <Section>
          <Wrapper>
            <Grid>

              <Grid.Unit size={{ xsmall: 1/4, medium: 1/2 }}>
                <Logo to="/">
                  <img src={logoIcon} alt="Vention Logo" />
                  <LogoTitle src={logoTitle} alt="Vention" />
                </Logo>
              </Grid.Unit>

              <Grid.Unit size={{ xsmall: 3/4, medium: 1/2 }}>
                <Actions>
                  <Button
                    variation="secondary"
                    shape="border"
                    margin="0 16px 0 0">
                    Login
                  </Button>
                  <Button
                    variation="main"
                    shape="fill">
                    Sign Up
                  </Button>
                </Actions>
              </Grid.Unit>

            </Grid>
          </Wrapper>
        </Section>
        <Placeholder />
      </header>
    );
  }
}

export default Header;
