import React from 'react';

export default function deepClone(children: JSX.Element, event: () => void) {
  return React.Children.map(children, (child: React.ReactNode): JSX.Element => {
    // @ts-ignore
    if (!React.isValidElement(child)) return child;

    const props: any = { ...child.props };

    if (typeof child.props.onPress === 'function') {
      props.onPress = () => {
        event();
        return child.props.onPress();
      };
    }

    return React.cloneElement(child, props, deepClone(child.props.children, event));
  });
}
