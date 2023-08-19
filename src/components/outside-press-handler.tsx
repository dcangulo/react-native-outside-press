import React, { useRef, useEffect } from 'react';
import { View, Platform } from 'react-native';
import type { ViewProps } from 'react-native';
import useEvent from '../hooks/use-event';
import deepClone from '../utils/deep-clone';

interface IOutsidePressHandlerProps extends ViewProps {
  onOutsidePress: () => void;
  disabled?: boolean;
}

export default function OutsidePressHandler(props: IOutsidePressHandlerProps) {
  const { children, onOutsidePress, disabled = false } = props;
  const id: string = useRef(Math.random().toString()).current;
  const { appendEvent, removeEvent, setSkippedEventId } = useEvent();
  const setSkippedEventIdFunc = () => setSkippedEventId(id);

  useEffect(() => {
    appendEvent({ id, onOutsidePress, disabled });

    return () => removeEvent(id);
  }, [onOutsidePress, disabled]);

  return Platform.select({
    web: (
      <View
        {...props}
        /*
        // @ts-ignore */
        onClick={setSkippedEventIdFunc}
      >
        {deepClone(children, setSkippedEventIdFunc)}
      </View>
    ),
    default: (
      <View {...props} onTouchStart={setSkippedEventIdFunc}>
        {children}
      </View>
    ),
  });
}
