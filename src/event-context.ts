import { createContext } from 'react';
import type { EventContextType } from './interfaces';

const EventContext = createContext<EventContextType | null>(null);

export default EventContext;
