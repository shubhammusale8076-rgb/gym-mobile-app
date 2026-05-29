import React from 'react';
import { render } from '@testing-library/react-native';
import Attendance from '@/app/(tabs)/Attendance';

describe('Attendance screen', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(React.createElement(Attendance));
    expect(toJSON()).not.toBeNull();
  });

  it('displays the "Attendance" text', () => {
    const { getByText } = render(React.createElement(Attendance));
    expect(getByText('Attendance')).toBeTruthy();
  });

  it('is exported as a default export function', () => {
    expect(typeof Attendance).toBe('function');
  });

  it('renders a single Text element with correct content', () => {
    const { getAllByText } = render(React.createElement(Attendance));
    const textElements = getAllByText('Attendance');
    expect(textElements).toHaveLength(1);
  });

  it('snapshot matches', () => {
    const { toJSON } = render(React.createElement(Attendance));
    expect(toJSON()).toMatchSnapshot();
  });
});