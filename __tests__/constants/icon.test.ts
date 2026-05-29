import { icons, TAB_ICONS } from '@/constants/icon';
import type { TabIconConfig, IconKey } from '@/constants/icon';

describe('constants/icon - icons object', () => {
  it('exports an icons object', () => {
    expect(icons).toBeDefined();
    expect(typeof icons).toBe('object');
  });

  it('contains the wallet icon', () => {
    expect(icons).toHaveProperty('wallet');
  });

  it('contains the setting icon', () => {
    expect(icons).toHaveProperty('setting');
  });

  it('contains the activity icon', () => {
    expect(icons).toHaveProperty('activity');
  });

  it('contains the add icon', () => {
    expect(icons).toHaveProperty('add');
  });

  it('contains the back icon', () => {
    expect(icons).toHaveProperty('back');
  });

  it('contains the menu icon', () => {
    expect(icons).toHaveProperty('menu');
  });

  it('contains the plus icon', () => {
    expect(icons).toHaveProperty('plus');
  });

  it('contains the notion icon', () => {
    expect(icons).toHaveProperty('notion');
  });

  it('contains the dropbox icon', () => {
    expect(icons).toHaveProperty('dropbox');
  });

  it('contains the openai icon', () => {
    expect(icons).toHaveProperty('openai');
  });

  it('contains the adobe icon', () => {
    expect(icons).toHaveProperty('adobe');
  });

  it('contains the medium icon', () => {
    expect(icons).toHaveProperty('medium');
  });

  it('contains the figma icon', () => {
    expect(icons).toHaveProperty('figma');
  });

  it('contains the spotify icon', () => {
    expect(icons).toHaveProperty('spotify');
  });

  it('contains the github icon', () => {
    expect(icons).toHaveProperty('github');
  });

  it('contains the claude icon', () => {
    expect(icons).toHaveProperty('claude');
  });

  it('contains the canva icon', () => {
    expect(icons).toHaveProperty('canva');
  });

  it('has exactly 17 icon entries', () => {
    expect(Object.keys(icons)).toHaveLength(17);
  });
});

describe('constants/icon - TAB_ICONS', () => {
  it('exports a TAB_ICONS object', () => {
    expect(TAB_ICONS).toBeDefined();
    expect(typeof TAB_ICONS).toBe('object');
  });

  it('has a HOME entry', () => {
    expect(TAB_ICONS.HOME).toBeDefined();
  });

  it('HOME has active icon "home"', () => {
    expect(TAB_ICONS.HOME.active).toBe('home');
  });

  it('HOME has inactive icon "home-outline"', () => {
    expect(TAB_ICONS.HOME.inactive).toBe('home-outline');
  });

  it('has a MEMBERS entry', () => {
    expect(TAB_ICONS.MEMBERS).toBeDefined();
  });

  it('MEMBERS has active icon "account-multiple"', () => {
    expect(TAB_ICONS.MEMBERS.active).toBe('account-multiple');
  });

  it('MEMBERS has inactive icon "account-multiple-outline"', () => {
    expect(TAB_ICONS.MEMBERS.inactive).toBe('account-multiple-outline');
  });

  it('has a PAYMENTS entry', () => {
    expect(TAB_ICONS.PAYMENTS).toBeDefined();
  });

  it('PAYMENTS has active icon "wallet"', () => {
    expect(TAB_ICONS.PAYMENTS.active).toBe('wallet');
  });

  it('PAYMENTS has inactive icon "wallet-outline"', () => {
    expect(TAB_ICONS.PAYMENTS.inactive).toBe('wallet-outline');
  });

  it('has an ATTENDANCE entry', () => {
    expect(TAB_ICONS.ATTENDANCE).toBeDefined();
  });

  it('ATTENDANCE has active icon "calendar-month"', () => {
    expect(TAB_ICONS.ATTENDANCE.active).toBe('calendar-month');
  });

  it('ATTENDANCE has inactive icon "calendar-month-outline"', () => {
    expect(TAB_ICONS.ATTENDANCE.inactive).toBe('calendar-month-outline');
  });

  it('has a Setting entry', () => {
    expect(TAB_ICONS.Setting).toBeDefined();
  });

  it('Setting has active icon "cog"', () => {
    expect(TAB_ICONS.Setting.active).toBe('cog');
  });

  it('Setting has inactive icon "cog-outline"', () => {
    expect(TAB_ICONS.Setting.inactive).toBe('cog-outline');
  });

  it('every TAB_ICON entry has both active and inactive string keys', () => {
    Object.entries(TAB_ICONS).forEach(([key, config]) => {
      expect(typeof config.active).toBe('string');
      expect(typeof config.inactive).toBe('string');
      expect(config.active.length).toBeGreaterThan(0);
      expect(config.inactive.length).toBeGreaterThan(0);
    });
  });

  it('active and inactive icons differ for every tab', () => {
    Object.entries(TAB_ICONS).forEach(([key, config]) => {
      expect(config.active).not.toBe(config.inactive);
    });
  });

  it('inactive icons follow the outline naming convention', () => {
    Object.entries(TAB_ICONS).forEach(([key, config]) => {
      expect(config.inactive).toContain('outline');
    });
  });

  it('has exactly 5 tab icon configs', () => {
    expect(Object.keys(TAB_ICONS)).toHaveLength(5);
  });
});

describe('constants/icon - TabIconConfig type shape', () => {
  it('each config entry satisfies the TabIconConfig shape', () => {
    const isTabIconConfig = (obj: unknown): obj is TabIconConfig => {
      return (
        typeof obj === 'object' &&
        obj !== null &&
        'active' in obj &&
        'inactive' in obj
      );
    };

    Object.values(TAB_ICONS).forEach((config) => {
      expect(isTabIconConfig(config)).toBe(true);
    });
  });
});