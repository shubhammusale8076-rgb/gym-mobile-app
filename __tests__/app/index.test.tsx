import React from 'react';
import { render } from '@testing-library/react-native';
import App from '@/app/(tabs)/index';

// Mock global.css import
jest.mock('@/global.css', () => ({}), { virtual: true });

describe('Home/Index screen (app/(tabs)/index)', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(React.createElement(App));
    expect(toJSON()).not.toBeNull();
  });

  it('displays the KINETIX brand name', () => {
    const { getByText } = render(React.createElement(App));
    expect(getByText('KINETIX')).toBeTruthy();
  });

  it('displays the "Transform Yourself" call-to-action', () => {
    const { getByText } = render(React.createElement(App));
    expect(getByText('Transform Yourself')).toBeTruthy();
  });

  it('contains a Link to the login screen', () => {
    const { getByTestId } = render(React.createElement(App));
    expect(getByTestId('link')).toBeTruthy();
  });

  it('is exported as a default export function', () => {
    expect(typeof App).toBe('function');
  });

  it('snapshot matches', () => {
    const { toJSON } = render(React.createElement(App));
    expect(toJSON()).toMatchSnapshot();
  });
});