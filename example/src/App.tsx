import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OutsidePressHandler, { EventProvider } from 'react-native-outside-press';

export default function App() {
  return (
    <EventProvider style={styles.container}>
      <OutsidePressHandler
        onOutsidePress={() => {
          console.log('Pressed outside the black box!');
        }}
      >
        <View style={styles.blackBox}>
          <Text
            style={styles.text}
            onPress={() => console.log('Pressed inside blackbox!')}
          >
            Press Me
          </Text>
        </View>
      </OutsidePressHandler>
      <Text onPress={() => console.log('Pressed!')}>Press Me</Text>
      <OutsidePressHandler
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
  text: {
    color: 'white',
  },
});
