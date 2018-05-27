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

  margin: 0;
  padding: 0;
  min-width: 0;

  border-style: solid;
  border-width: 0;
  border-bottom-width: 2px;

  font-family: ${props => props.theme.font.title};
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.06em;

  ${props => props.overrides /* optional style overrides */}
`;

class Input extends Component {
  render() {
    return <StyledInput {...this.props} />
  }
}

export default Input;
