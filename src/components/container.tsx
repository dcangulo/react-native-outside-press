import React, { useEffect } from 'react';
import type { ViewProps } from 'react-native';
import useEvent from '../hooks/use-event';
import type { IEvent } from '../hooks/use-event-store';
import ViewTouch from './view-touch';

export default function Container(props: ViewProps) {
  const { events, skippedEventId, setSkippedEventId } = useEvent();
  const runEvents = () => {
    events.forEach((event: IEvent) => {
      if (event.id === (global as any).rnopSkippedEventId) return;
      event.onOutsidePress();
    });

    if ((global as any).rnopSkippedEventId) setSkippedEventId('');
  };

  useEffect(() => {
    if (skippedEventId) runEvents();
  }, [skippedEventId]);

  return (
    <ViewTouch
      {...props}
      onTouchStart={runEvents}
      onClick={runEvents}
    >
      {props.children}
    </ViewTouch>
  );
}
