import React, { useRef, useEffect } from 'react';
import { Pressable } from 'react-native';
import useEvent from '../hooks/use-event';
import deepClone from '../utils/deep-clone';

interface IOutsidePressHandlerProps {
  children: JSX.Element;
  onOutsidePress: () => void;
}

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
