interface IEvent {
  id: string;
  onOutsidePress: () => void;
}

interface IOutsidePressHandlerProps {
  children: JSX.Element;
  onOutsidePress: () => void;
}

type EventContextType = {
  events: IEvent[];
  appendEvent: (newEvent: IEvent) => void;
  removeEvent: (id: string) => void;
  skippedEventId: string;
  setSkippedEventId: (id: string) => void;
};

export {
  IEvent,
  IOutsidePressHandlerProps,
  EventContextType,
};
