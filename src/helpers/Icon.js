import { h, Component } from 'preact';
import styled, { css } from 'styled-components';

const iconStyles = css`
  font-family: ${props => props.theme.font.icon};
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
`;

const MaterialIcon = styled.div`
  ${iconStyles}

  font-size: ${props => props.size};
  vertical-align: ${props => props.align || 'middle'};
  line-height: 1;
  user-select: none;
  box-sizing: border-box;

  ${props => props.color && css`
    color: ${props.color};
  `}

  ${props => props.padding && css`
    padding: ${props.padding};
  `}

  ${props => props.border && props.color && css`
    border: ${props.border} solid ${props.color};
    border-radius: 50%;
  `}
`;

MaterialIcon.defaultProps = {
  size: '16px',
  align: 'middle',
}

class Icon extends Component {
  render() {
    return <MaterialIcon {...this.props}>{this.props.icon}</MaterialIcon>
  }
}

export default Icon;
