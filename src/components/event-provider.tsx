import React from 'react';
import type { ViewProps } from 'react-native';
import useEventStore from '../hooks/use-event-store';
import EventContext from '../event-context';
import Container from './container';

export default function EventProvider(props: ViewProps) {
  const eventStore = useEventStore();

  return (
    <EventContext.Provider value={eventStore}>
      <Container {...props}>{props.children}</Container>
    </EventContext.Provider>
  );
}
