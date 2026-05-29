const React = require('react');

// Simple functional mock for all React Native components used in the project
const mockComponent = (name) => {
  const Component = ({ children, testID, ...props }) =>
    React.createElement(name, { testID, ...props }, children);
  Component.displayName = name;
  return Component;
};

const View = mockComponent('View');
const Text = mockComponent('Text');
const TouchableOpacity = mockComponent('TouchableOpacity');
const TouchableHighlight = mockComponent('TouchableHighlight');
const Pressable = mockComponent('Pressable');
const ScrollView = mockComponent('ScrollView');
const FlatList = mockComponent('FlatList');
const Image = mockComponent('Image');
const TextInput = mockComponent('TextInput');
const SafeAreaView = mockComponent('SafeAreaView');
const StyleSheet = {
  create: (styles) => styles,
  flatten: (style) => style,
  hairlineWidth: 1,
};
const Platform = {
  OS: 'ios',
  select: (obj) => obj.ios ?? obj.default,
};
const Dimensions = {
  get: () => ({ width: 375, height: 812 }),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

module.exports = {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  ScrollView,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Platform,
  Dimensions,
};