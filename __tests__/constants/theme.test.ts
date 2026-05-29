import { colors, spacing, components, theme } from '@/constants/theme';

describe('constants/theme - colors', () => {
  it('exports a colors object', () => {
    expect(colors).toBeDefined();
    expect(typeof colors).toBe('object');
  });

  it('has a primary color value', () => {
    expect(colors.primary).toBe('#661493');
  });

  it('has a card color value', () => {
    expect(colors.card).toBe('#fff7fc');
  });

  it('has a background color value', () => {
    expect(colors.background).toBe('#fff9e3');
  });

  it('has a foreground color value', () => {
    expect(colors.foreground).toBe('#081126');
  });

  it('has an accent color value', () => {
    expect(colors.accent).toBe('#ea7a53');
  });

  it('has a success color value', () => {
    expect(colors.success).toBe('#16a34a');
  });

  it('has a destructive color value', () => {
    expect(colors.destructive).toBe('#dc2626');
  });

  it('has a subscription color value', () => {
    expect(colors.subscription).toBe('#8fd1bd');
  });

  it('has a muted color value', () => {
    expect(colors.muted).toBe('#f6eecf');
  });

  it('has a mutedForeground color value', () => {
    expect(colors.mutedForeground).toBe('rgba(0, 0, 0, 0.6)');
  });

  it('has a border color value', () => {
    expect(colors.border).toBe('rgba(0, 0, 0, 0.1)');
  });

  it('contains exactly the expected color keys', () => {
    const expectedKeys = [
      'background', 'foreground', 'card', 'muted', 'mutedForeground',
      'primary', 'accent', 'border', 'success', 'destructive', 'subscription',
    ];
    expect(Object.keys(colors).sort()).toEqual(expectedKeys.sort());
  });
});

describe('constants/theme - spacing', () => {
  it('exports a spacing object', () => {
    expect(spacing).toBeDefined();
    expect(typeof spacing).toBe('object');
  });

  it('spacing[0] is 0', () => {
    expect(spacing[0]).toBe(0);
  });

  it('spacing[1] is 4', () => {
    expect(spacing[1]).toBe(4);
  });

  it('spacing[2] is 8', () => {
    expect(spacing[2]).toBe(8);
  });

  it('spacing[4] is 16', () => {
    expect(spacing[4]).toBe(16);
  });

  it('spacing[8] is 32', () => {
    expect(spacing[8]).toBe(32);
  });

  it('spacing[16] is 64', () => {
    expect(spacing[16]).toBe(64);
  });

  it('spacing[18] is 72', () => {
    expect(spacing[18]).toBe(72);
  });

  it('spacing[30] is 120', () => {
    expect(spacing[30]).toBe(120);
  });

  it('spacing values are multiples of 4', () => {
    Object.values(spacing).forEach((value) => {
      expect(value % 4).toBe(0);
    });
  });

  it('spacing values are all non-negative numbers', () => {
    Object.values(spacing).forEach((value) => {
      expect(typeof value).toBe('number');
      expect(value).toBeGreaterThanOrEqual(0);
    });
  });
});

describe('constants/theme - components', () => {
  it('exports a components object', () => {
    expect(components).toBeDefined();
    expect(typeof components).toBe('object');
  });

  it('has tabBar component config', () => {
    expect(components.tabBar).toBeDefined();
  });

  it('tabBar.height equals spacing[18] (72)', () => {
    expect(components.tabBar.height).toBe(72);
  });

  it('tabBar.horizontalInset equals spacing[5] (20)', () => {
    expect(components.tabBar.horizontalInset).toBe(20);
  });

  it('tabBar.radius equals spacing[8] (32)', () => {
    expect(components.tabBar.radius).toBe(32);
  });

  it('tabBar.iconFrame equals spacing[16] (64)', () => {
    expect(components.tabBar.iconFrame).toBe(64);
  });

  it('tabBar.itemPaddingVertical equals spacing[2] (8)', () => {
    expect(components.tabBar.itemPaddingVertical).toBe(8);
  });

  it('tabBar properties are all positive numbers', () => {
    Object.values(components.tabBar).forEach((value) => {
      expect(typeof value).toBe('number');
      expect(value).toBeGreaterThan(0);
    });
  });
});

describe('constants/theme - theme (combined export)', () => {
  it('exports a theme object', () => {
    expect(theme).toBeDefined();
    expect(typeof theme).toBe('object');
  });

  it('theme.colors is the same reference as exported colors', () => {
    expect(theme.colors).toBe(colors);
  });

  it('theme.spacing is the same reference as exported spacing', () => {
    expect(theme.spacing).toBe(spacing);
  });

  it('theme.components is the same reference as exported components', () => {
    expect(theme.components).toBe(components);
  });

  it('theme has exactly colors, spacing, and components keys', () => {
    expect(Object.keys(theme).sort()).toEqual(['colors', 'components', 'spacing']);
  });
});