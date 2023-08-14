import React from 'react';

export default function deepClone(children: React.ReactNode, func: () => void) {
  return React.Children.map(
    children,
    (child: React.ReactNode): React.ReactNode => {
      if (!React.isValidElement(child)) return child;

      const props: any = { ...child.props };

      if (typeof child.props.onPress === 'function') {
        props.onPress = () => {
          func();
          return child.props.onPress();
        };
      }

      return React.cloneElement(
        child,
        props,
        deepClone(child.props.children, func)
      );
    }
  );
}
