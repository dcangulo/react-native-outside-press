import { createContext } from 'react';
import type { IEvent } from './hooks/use-event-store';

export type EventContextType = {
  events: IEvent[];
  appendEvent: (newEvent: IEvent) => void;
  removeEvent: (id: string) => void;
  skippedEventId: string;
  setSkippedEventId: (id: string) => void;
};

const EventContext = createContext<EventContextType | null>(null);

export default EventContext;
