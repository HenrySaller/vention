import { h, Component } from 'preact';
import styled from 'styled-components';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

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

class Home extends Component {
  render() {
    return (
      <Body>

        <Header />

        <Main>
          <Hero />
          <Steps />
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
