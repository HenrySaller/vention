import { h, Component } from 'preact';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';
import Copyright from './copyright';

const Body = styled.div`
  background-color: ${props => props.theme.color.grey50};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Main = styled.main`
  flex-grow: 1;
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

class Home extends Component {
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
      <Body>
        <header>
          <Header />
        </header>
        <Main>
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
          <Box ref={el => this.parallaxBox = el} />
        </Main>
        <footer>
          <Footer />
          <Copyright />
        </footer>
      </Body>
    );
  }
}

export default Home;
