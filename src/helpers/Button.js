import { h, Component } from 'preact';
import styled, { withTheme } from 'styled-components';

import Icon from './Icon';

const StyledButton = styled.button`
  appearance: none;
  cursor: pointer;
  user-select: none;
  font-size: 0;

  border-radius: 18px;
  border-style: solid;
  border-width: 2px;
  border-color: ${props => {
    return props.shape === 'border' ? props.config.color : 'transparent'
  }};

  color: ${props => {
    return props.shape !== 'fill' ? props.config.color : props.theme.color.white
  }};
  background-color: ${props => {
    return props.shape === 'fill' ? props.config.color : 'transparent'
  }};

  padding: ${props => props.config.padding};
  margin: ${props => props.config.margin || 0};

  ${props => props.overrides /* optional style overrides */}
`;

const Text = styled.span`
  appearance: none;
  font-family: ${props => props.theme.font.title};
  font-size: ${props => props.fontSize || '14px'};
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.06em;
  vertical-align: middle;
  padding: 0 5px;
`;

class Button extends Component {
  render() {
    const config = {
      color: this.props.color || this.props.theme.color[this.props.variation],
      isIcon: this.props.iconPosition === 'inside',
      iconBefore: this.props.iconPosition === 'before',
      iconAfter: this.props.iconPosition === 'after',
    };

    config.hasIcon = config.iconBefore || config.iconAfter;
    config.margin = this.props.margin;
    config.padding = this.props.padding || (
        config.isIcon     ? '5px'
      : !config.hasIcon   ? '5px 14px'
      : config.iconBefore ? '5px 14px 5px 5px'
                          : '5px 5px 5px 14px');

    const iconConfig = {
      icon: this.props.icon,
      size: this.props.iconSize || (config.isIcon ? '18px' : '16px'),
    }

    return (
      <StyledButton config={config} {...this.props}>
        {(config.isIcon || config.iconBefore)
          && <Icon {...iconConfig} />}
        {!config.isIcon
          && <Text {...this.props}>{this.props.children}</Text>}
        {config.iconAfter
          && <Icon {...iconConfig} />}
      </StyledButton>
    );
  }
}

export default withTheme(Button);
