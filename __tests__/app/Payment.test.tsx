import React from 'react';
import { render } from '@testing-library/react-native';
import Payment from '@/app/(tabs)/Payment';

describe('Payment screen', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(React.createElement(Payment));
    expect(toJSON()).not.toBeNull();
  });

  it('displays the "Payment" text', () => {
    const { getByText } = render(React.createElement(Payment));
    expect(getByText('Payment')).toBeTruthy();
  });

  it('is exported as a default export function', () => {
    expect(typeof Payment).toBe('function');
  });

  it('renders exactly one Payment text element', () => {
    const { getAllByText } = render(React.createElement(Payment));
    const textElements = getAllByText('Payment');
    expect(textElements).toHaveLength(1);
  });

  it('snapshot matches', () => {
    const { toJSON } = render(React.createElement(Payment));
    expect(toJSON()).toMatchSnapshot();
  });
});