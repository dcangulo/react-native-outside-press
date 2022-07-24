import React, { useEffect } from 'react';
import { Platform, View } from 'react-native';
import type { ViewProps } from 'react-native';
import useEvent from '../hooks/use-event';
import type { IEvent } from '../hooks/use-event-store';

export default function Container(props: ViewProps) {
  const { events, skippedEventId, setSkippedEventId } = useEvent();
  const runEvents = () => {
    events.forEach((event: IEvent) => {
      if (event.id === (global as any).rnopSkippedEventId) return;
      if (event.disabled) return;

      event.onOutsidePress();
    });

    if ((global as any).rnopSkippedEventId) setSkippedEventId('');
  };

  useEffect(() => {
    if (skippedEventId) runEvents();
  }, [skippedEventId]);

  return Platform.select({
    web: (
      <View
        {...props}
        /*
        // @ts-ignore */
        onClick={runEvents}
      >
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
