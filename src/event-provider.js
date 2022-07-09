import React from 'react';
import useEventStore from './use-event-store';
import EventContext from './event-context';
import Container from './container';

export default function EventProvider(props) {
  const eventStore = useEventStore();

  return (
    <EventContext.Provider value={eventStore}>
      <Container {...props}>
        {props.children}
      </Container>
    </EventContext.Provider>
  );
}
