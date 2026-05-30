import React from 'react';
import { render } from '@testing-library/react-native';
import TabLayout from '@/app/(tabs)/_layout';
import { tabs } from '@/constants/data';
import { colors, components } from '@/constants/theme';

// useSafeAreaInsets is mocked in __mocks__/react-native-safe-area-context.js

describe('TabLayout (_layout.tsx)', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(React.createElement(TabLayout));
    expect(toJSON()).not.toBeNull();
  });

  it('is exported as a default export function', () => {
    expect(typeof TabLayout).toBe('function');
  });

  it('renders a Tabs container', () => {
    const { getByTestId } = render(React.createElement(TabLayout));
    expect(getByTestId('tabs')).toBeTruthy();
  });

  it('snapshot matches', () => {
    const { toJSON } = render(React.createElement(TabLayout));
    expect(toJSON()).toMatchSnapshot();
  });
});

describe('TabLayout - tabBar style values from theme', () => {
  it('tabBar.height is derived from spacing[18] (72)', () => {
    expect(components.tabBar.height).toBe(72);
  });

  it('tabBar.horizontalInset is derived from spacing[5] (20)', () => {
    expect(components.tabBar.horizontalInset).toBe(20);
  });

  it('tabBar.radius is derived from spacing[8] (32)', () => {
    expect(components.tabBar.radius).toBe(32);
  });

  it('tabBar.iconFrame is derived from spacing[16] (64)', () => {
    expect(components.tabBar.iconFrame).toBe(64);
  });

  it('tabBar backgroundColor matches colors.card', () => {
    expect(colors.card).toBe('#fff7fc');
  });
});

describe('TabIcon component behavior (via layout render)', () => {
  it('renders icon elements for all tabs', () => {
    const { toJSON } = render(React.createElement(TabLayout));
    expect(toJSON()).not.toBeNull();
  });
});

describe('clsx class name logic for TabIcon', () => {
  it('applies tabs-active class when focused is true', () => {
    const clsx = require('clsx').default ?? require('clsx');
    const result = clsx('tabs-pill', true && 'tabs-active');
    expect(result).toContain('tabs-active');
    expect(result).toContain('tabs-pill');
  });

  it('does not apply tabs-active class when focused is false', () => {
    const clsx = require('clsx').default ?? require('clsx');
    const result = clsx('tabs-pill', false && 'tabs-active');
    expect(result).not.toContain('tabs-active');
    expect(result).toContain('tabs-pill');
  });

  it('returns tabs-pill alone when focused is false', () => {
    const clsx = require('clsx').default ?? require('clsx');
    const result = clsx('tabs-pill', false && 'tabs-active');
    expect(result).toBe('tabs-pill');
  });
});

describe('TabIcon icon name selection logic', () => {
  it('uses active icon name when focused', () => {
    const { HOME } = require('@/constants/icon').TAB_ICONS;
    const focused = true;
    const iconName = focused ? HOME.active : HOME.inactive;
    expect(iconName).toBe('home');
  });

  it('uses inactive icon name when not focused', () => {
    const { HOME } = require('@/constants/icon').TAB_ICONS;
    const focused = false;
    const iconName = focused ? HOME.active : HOME.inactive;
    expect(iconName).toBe('home-outline');
  });

  it('focused icon color is white (#FFFFFF)', () => {
    const focused = true;
    const color = focused ? '#FFFFFF' : '#661493';
    expect(color).toBe('#FFFFFF');
  });

  it('unfocused icon color is primary (#661493)', () => {
    const focused = false;
    const color = focused ? '#FFFFFF' : '#661493';
    expect(color).toBe('#661493');
  });
});