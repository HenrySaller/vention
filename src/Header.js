import { h, Component } from 'preact';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.color.white};
`;

const Wrapper = styled.div`
  max-width: ${props => props.theme.size.header};
  margin: 0 3.5em;
`;

class Header extends Component {
  render() {
    return (
      <Section>
        <Wrapper>
          <h2>Header</h2>
        </Wrapper>
      </Section>
    );
  }
}

export default Header;
