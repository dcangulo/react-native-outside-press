import React, { useRef, useEffect } from 'react';
import { Pressable } from 'react-native';
import useEvent from './use-event';
import deepClone from './deep-clone';

export default function OutsidePressHandler({ children, onOutsidePress }) {
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
