import { useContext } from 'react';
import EventContext from './event-context';

export default function useEvent() {
  const eventContext = useContext(EventContext);

  return eventContext;
}
