import React from 'react';
import { render } from '@testing-library/react-native';
import forgotPassword from '@/app/(auth)/forgot-password';

describe('ForgotPassword screen', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(React.createElement(forgotPassword));
    expect(toJSON()).not.toBeNull();
  });

  it('displays the forgot-password text', () => {
    const { getByText } = render(React.createElement(forgotPassword));
    expect(getByText('forgot-password')).toBeTruthy();
  });

  it('renders a View as root container', () => {
    const { toJSON } = render(React.createElement(forgotPassword));
    const tree = toJSON() as any;
    expect(tree.type).toBe('View');
  });

  it('contains a Text child', () => {
    const { toJSON } = render(React.createElement(forgotPassword));
    const tree = toJSON() as any;
    expect(tree.children).toHaveLength(1);
    expect(tree.children[0].type).toBe('Text');
  });

  it('is exported as a default export function', () => {
    expect(typeof forgotPassword).toBe('function');
  });
});