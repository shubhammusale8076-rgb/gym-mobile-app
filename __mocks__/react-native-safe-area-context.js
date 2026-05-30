const React = require('react');
const { View } = require('react-native');

module.exports = {
  SafeAreaView: ({ children, ...props }) =>
    React.createElement(View, { testID: 'safe-area-view', ...props }, children),
  SafeAreaProvider: ({ children }) =>
    React.createElement(View, { testID: 'safe-area-provider' }, children),
  useSafeAreaInsets: jest.fn(() => ({ top: 0, bottom: 34, left: 0, right: 0 })),
  useSafeAreaFrame: jest.fn(() => ({ x: 0, y: 0, width: 390, height: 844 })),
};