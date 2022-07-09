import React, { useRef, useEffect } from 'react';
import { Pressable } from 'react-native';
import useEvent from './use-event';
import deepClone from './deep-clone';
import type { IOutsidePressHandlerProps } from './interfaces';

export default function OutsidePressHandler(props: IOutsidePressHandlerProps) {
  const { children, onOutsidePress } = props;
  const id = useRef(Math.random().toString()).current;
  const { appendEvent, removeEvent, setSkippedEventId } = useEvent();
  const setSkippedEventIdFunc = () => setSkippedEventId(id);

  useEffect(() => {
    appendEvent({ id, onOutsidePress });

    return () => removeEvent(id);
  }, [onOutsidePress]);

  return (
    <Pressable onPress={setSkippedEventIdFunc}>
      {deepClone(children, setSkippedEventIdFunc)}
    </Pressable>
  );
}
