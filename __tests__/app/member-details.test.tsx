import React from 'react';
import { render } from '@testing-library/react-native';
import MemberDetails from '@/app/members/[id]';

// useLocalSearchParams is mocked in __mocks__/expo-router.js to return { id: '42' }
const { useLocalSearchParams } = require('expo-router');

describe('MemberDetails screen (app/members/[id])', () => {
  beforeEach(() => {
    useLocalSearchParams.mockReturnValue({ id: '42' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { toJSON } = render(React.createElement(MemberDetails));
    expect(toJSON()).not.toBeNull();
  });

  it('displays member ID in the text', () => {
    const { getByText } = render(React.createElement(MemberDetails));
    expect(getByText('Member Details : 42')).toBeTruthy();
  });

  it('is exported as a default export function', () => {
    expect(typeof MemberDetails).toBe('function');
  });

  it('renders a View as root container', () => {
    const { toJSON } = render(React.createElement(MemberDetails));
    const tree = toJSON() as any;
    expect(tree.type).toBe('View');
  });

  it('calls useLocalSearchParams to get the id param', () => {
    render(React.createElement(MemberDetails));
    expect(useLocalSearchParams).toHaveBeenCalled();
  });

  it('displays a different member ID when param changes', () => {
    useLocalSearchParams.mockReturnValue({ id: '99' });
    const { getByText } = render(React.createElement(MemberDetails));
    expect(getByText('Member Details : 99')).toBeTruthy();
  });

  it('handles numeric string IDs', () => {
    useLocalSearchParams.mockReturnValue({ id: '1' });
    const { getByText } = render(React.createElement(MemberDetails));
    expect(getByText('Member Details : 1')).toBeTruthy();
  });

  it('handles string IDs with alphanumeric content', () => {
    useLocalSearchParams.mockReturnValue({ id: 'abc123' });
    const { getByText } = render(React.createElement(MemberDetails));
    expect(getByText('Member Details : abc123')).toBeTruthy();
  });

  it('snapshot matches for default ID', () => {
    const { toJSON } = render(React.createElement(MemberDetails));
    expect(toJSON()).toMatchSnapshot();
  });

  it('does not render a Go Back link (removed in this PR)', () => {
    const { queryByText } = render(React.createElement(MemberDetails));
    expect(queryByText('Go Back')).toBeNull();
  });
});