import React from 'react';
import { render } from '@testing-library/react-native';
import Member from '@/app/(tabs)/Member';

describe('Member screen', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(React.createElement(Member));
    expect(toJSON()).not.toBeNull();
  });

  it('displays the "Member" text', () => {
    const { getByText } = render(React.createElement(Member));
    expect(getByText('Member')).toBeTruthy();
  });

  it('is exported as a default export function', () => {
    expect(typeof Member).toBe('function');
  });

  it('renders exactly one Member text element', () => {
    const { getAllByText } = render(React.createElement(Member));
    const textElements = getAllByText('Member');
    expect(textElements).toHaveLength(1);
  });

  it('snapshot matches', () => {
    const { toJSON } = render(React.createElement(Member));
    expect(toJSON()).toMatchSnapshot();
  });
});