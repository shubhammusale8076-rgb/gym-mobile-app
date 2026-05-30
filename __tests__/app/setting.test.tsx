import React from 'react';
import { render } from '@testing-library/react-native';
import setting from '@/app/(tabs)/setting';

describe('setting screen', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(React.createElement(setting));
    expect(toJSON()).not.toBeNull();
  });

  it('displays the "setting" text', () => {
    const { getByText } = render(React.createElement(setting));
    expect(getByText('setting')).toBeTruthy();
  });

  it('is exported as a default export function', () => {
    expect(typeof setting).toBe('function');
  });

  it('renders exactly one setting text element', () => {
    const { getAllByText } = render(React.createElement(setting));
    const textElements = getAllByText('setting');
    expect(textElements).toHaveLength(1);
  });

  it('snapshot matches', () => {
    const { toJSON } = render(React.createElement(setting));
    expect(toJSON()).toMatchSnapshot();
  });
});