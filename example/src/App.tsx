import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OutsidePressHandler, { EventProvider } from 'react-native-outside-press';

export default function App() {
  return (
    <EventProvider style={styles.container}>
      <OutsidePressHandler
        disabled={false}
        onOutsidePress={() => {
          console.log('Pressed outside the black box!');
        }}
      >
        <View style={styles.blackBox} />
      </OutsidePressHandler>
      <Text onPress={() => console.log('Pressed!')}>Press Me</Text>
      <OutsidePressHandler
        disabled={false}
        onOutsidePress={() => {
          console.log('Pressed outside the red box!');
        }}
      >
        <View style={styles.redBox} />
      </OutsidePressHandler>
    </EventProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackBox: {
    height: 200,
    backgroundColor: 'black',
  },
  redBox: {
    height: 200,
    backgroundColor: 'red',
  },
});
