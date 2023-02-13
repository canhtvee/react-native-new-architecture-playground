/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {RTNCalculator} from 'rtn-calculator';
import {RTNCenteredText} from 'rtn-centered-text';

console.log(RTNCalculator);
console.log(RTNCenteredText);

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <RTNCenteredText
        text="Hello World!"
        style={{width: '100%', height: 50}}
        onLayout={event => console.log('event', event.nativeEvent)}
      />
    </SafeAreaView>
  );
}

export default App;
