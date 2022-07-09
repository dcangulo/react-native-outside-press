import { useState, useMemo } from 'react';

export default function useEventStore() {
  const [events, setEvents] = useState([]);
  const [skippedEventId, setSkippedEventId] = useState(null);
  const event = useMemo(() => ({
    events,
    appendEvent: (newEvent) => setEvents((state) => [...state, newEvent]),
    removeEvent: (id) => setEvents((state) => state.filter((event) => event.id !== id)),
    skippedEventId,
    setSkippedEventId,
  }), [skippedEventId, events]);

  return event;
}
