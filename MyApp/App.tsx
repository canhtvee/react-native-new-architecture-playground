/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {RTNCalculator} from 'rtn-calculator';

console.log(RTNCalculator);

(async function () {
  console.log('RTNCalculator:add', await RTNCalculator?.add(1, 2));
  console.log('RTNCalculator:sub', await RTNCalculator?.sub(3, 2));
})();

function App(): JSX.Element {
  return <SafeAreaView></SafeAreaView>;
}

export default App;
