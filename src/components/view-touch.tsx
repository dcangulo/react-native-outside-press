import React, { useRef } from 'react';
import { View } from 'react-native';
import type { ViewProps } from 'react-native';

interface IViewTouchProps extends ViewProps {
  onClick: () => void;
}

export default function ViewTouch(props: IViewTouchProps) {
  const hasTouch = useRef<boolean>(false);

  return (
    <View
      {...props}
      onTouchStart={(event) => {
        hasTouch.current = true;
        props.onTouchStart?.(event);
      }}
      /*
      // @ts-ignore */
      onClick={(event) => {
        if (hasTouch.current) return;
        // @ts-ignore
        props.onClick?.(event);
      }}
    >
      {props.children}
    </View>
  );
}
