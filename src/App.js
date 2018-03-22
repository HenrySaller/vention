import { h, Component } from 'preact';
import styled, { ThemeProvider } from 'styled-components';
import media from './styles/media';
import theme from './styles/theme';
import './styles/global';

const Body = styled.div`
  &::before,
  &::after {
    content: '';
    display: block;
    height: 100em;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.color.main};

  ${media.tablet`
    color: ${props => props.theme.color.black};
  `}
`;

const Box = styled.div`
  will-change: transform;
  transition: opacity .1s linear;

  width: 5em;
  height: 5em;
  background: black;
  border-top: 1em solid red;
  transform: translateX(var(--tx));
`;

class App extends Component {
  animations = [];

  componentDidMount() {
    this.animations.push(basicScroll.create({
      elem: this.parallaxBox.base,
      from: 'top-top',
      to: 'bottom-bottom',
      direct: true,
      props: {
        '--tx': {
          from: '0',
          to: '50vw',
          timing: 'expoInOut',
        }
      }
    }));

    this.animations.forEach(instance => instance.start());
  }

  componentWillUnmount() {
    this.animations.forEach(instance => instance.destroy());
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Body>
          <header>
            <Title>Welcome to Preact</Title>
          </header>
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
          <Box ref={el => this.parallaxBox = el} />
        </Body>
      </ThemeProvider>
    );
  }
}

export default App;
