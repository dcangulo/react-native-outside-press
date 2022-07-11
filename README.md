# React Native Outside Press
[![Package version](https://img.shields.io/npm/v/react-native-outside-press?style=for-the-badge&labelColor=000000)](https://www.npmjs.com/package/react-native-outside-press)
[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge&labelColor=000000)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-hotpink.svg?style=for-the-badge&labelColor=000000)](https://github.com/dcangulo/react-native-outside-press/pulls)

[airbnb/react-outside-click-handler](https://github.com/airbnb/react-outside-click-handler) but for React Native.

## Compatibility
| iOS                | Android            | Web                | Windows            | macOS              | Expo               |
|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## Installation
```bash
yarn add react-native-outside-press
```

## Usage
Wrap your app with `EventProvider`.
```js
import { EventProvider } from 'react-native-outside-press';

export default function App() {
  return (
    <EventProvider>
      <RestOfYourApp />
    <EventProvider/>
  );
}
```
`EventProvider` accepts `ViewProps`. See: https://reactnative.dev/docs/view#props

Then wrap every component you want to detect outside press.
```js
import { View } from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';

export default function MyComponent() {
  return (
    <OutsidePressHandler
      onOutsidePress={() => {
        console.log('Pressed outside the box!');
      }}
    >
      <View style={{ height: 200, width: 200, backgroundColor: 'black' }} />
    </OutsidePressHandler>
  );
}
```

## Changelogs
See [CHANGELOGS.md](CHANGELOGS.md)

## License
Copyright © 2022 David Angulo, released under the MIT license, see [LICENSE](LICENSE).
