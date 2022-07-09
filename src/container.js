import React, { useEffect } from 'react';
import { Platform, View } from 'react-native';
import useEvent from './use-event';

export default function Container(props) {
  const { events, skippedEventId, setSkippedEventId } = useEvent();
  const runEvents = () => {
    events.forEach((event) => {
      if (event.id === skippedEventId) return;
      event.onOutsidePress();
    });

    if (skippedEventId) setSkippedEventId(null);
  };

  useEffect(() => {
    if (skippedEventId) runEvents();
  }, [skippedEventId]);

  return Platform.select({
    web: (
      <View {...props} onClick={runEvents}>
        {props.children}
      </View>
    ),
    default: (
      <View {...props} onTouchStart={runEvents}>
        {props.children}
      </View>
    ),
  });
}
