import { h, Component } from 'preact';
import styled from 'styled-components';

// !!!
// TODO: Write an actual component instead of this placeholder.
// !!!

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  background-color: transparent;
  box-shadow: none;
  border: none;
  margin: none;
  min-width: 0;

  font-family: ${props => props.theme.font.main};
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.06em;

  ${props => props.overrides /* optional style overrides */}
`;

class Input extends Component {
  render() {
    return <StyledInput {...this.props} />
  }
}

export default Input;
