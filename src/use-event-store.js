import { useState, useMemo } from 'react';

export default function useEventStore() {
  const [events, setEvents] = useState([]);
  const [skippedEventId, setSkippedEventId] = useState(null);
  const eventActions = useMemo(() => ({
    events,
    appendEvent: (newEvent) => setEvents((state) => [...state, newEvent]),
    removeEvent: (id) => setEvents((state) => state.filter((event) => event.id !== id)),
    skippedEventId,
    setSkippedEventId,
  }), [skippedEventId, events]);

  return eventActions;
}
