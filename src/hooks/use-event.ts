import { useContext } from 'react';
import EventContext from '../event-context';
import type { EventContextType } from '../event-context';

export default function useEvent() {
  const eventContext = useContext(EventContext) as EventContextType;

  return eventContext;
}
