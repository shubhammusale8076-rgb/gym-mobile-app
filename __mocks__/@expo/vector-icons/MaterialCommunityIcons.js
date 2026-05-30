const React = require('react');
const { Text } = require('react-native');

const MaterialCommunityIcons = ({ name, size, color, testID }) =>
  React.createElement(Text, { testID: testID || `icon-${name}` }, name);

MaterialCommunityIcons.displayName = 'MaterialCommunityIcons';

module.exports = MaterialCommunityIcons;
module.exports.default = MaterialCommunityIcons;