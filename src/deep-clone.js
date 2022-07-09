import React from 'react';

export default function deepClone(children, event) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const props = { ...child.props };

    if (typeof child.props.onPress === 'function') {
      props.onPress = () => {
        event();
        return child.props.onPress();
      };
    }

    return React.cloneElement(child, props, deepClone(child.props.children, event));
  });
}
