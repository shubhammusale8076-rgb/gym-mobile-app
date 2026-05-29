const React = require('react');

module.exports = {
  Tabs: Object.assign(
    ({ children, screenOptions }) => React.createElement('View', { testID: 'tabs' }, children),
    {
      Screen: ({ name, options }) =>
        React.createElement('View', { testID: `tab-screen-${name}` }),
    }
  ),
  Link: ({ href, children, className, ...props }) =>
    React.createElement('View', { testID: 'link', ...props }, children),
  useLocalSearchParams: jest.fn(() => ({ id: '42' })),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  })),
};