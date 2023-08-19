import React from 'react';
import { StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native';
import useEventStore from '../hooks/use-event-store';
import EventContext from '../event-context';
import Container from './container';

export default function EventProvider(props: ViewProps) {
  const { style, ...rest } = props;
  const eventStore = useEventStore();

  return (
    <EventContext.Provider value={eventStore}>
      <Container style={[styles.container, style]} {...rest}>
        {props.children}
      </Container>
    </EventContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
