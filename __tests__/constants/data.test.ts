import { tabs } from '@/constants/data';
import { TAB_ICONS } from '@/constants/icon';

describe('constants/data - tabs array', () => {
  it('exports a tabs array', () => {
    expect(Array.isArray(tabs)).toBe(true);
  });

  it('has exactly 5 tab entries', () => {
    expect(tabs).toHaveLength(5);
  });

  it('first tab is index/Home', () => {
    expect(tabs[0].name).toBe('index');
    expect(tabs[0].title).toBe('Home');
  });

  it('second tab is member/Members', () => {
    expect(tabs[1].name).toBe('member');
    expect(tabs[1].title).toBe('Members');
  });

  it('third tab is payment/Payments', () => {
    expect(tabs[2].name).toBe('payment');
    expect(tabs[2].title).toBe('Payments');
  });

  it('fourth tab is attendance/Attendance', () => {
    expect(tabs[3].name).toBe('attendance');
    expect(tabs[3].title).toBe('Attendance');
  });

  it('fifth tab is setting/Setting', () => {
    expect(tabs[4].name).toBe('setting');
    expect(tabs[4].title).toBe('Setting');
  });

  it('each tab has a name, title, and icon field', () => {
    tabs.forEach((tab) => {
      expect(typeof tab.name).toBe('string');
      expect(typeof tab.title).toBe('string');
      expect(tab.icon).toBeDefined();
      expect(typeof tab.icon).toBe('object');
    });
  });

  it('Home tab uses TAB_ICONS.HOME', () => {
    expect(tabs[0].icon).toBe(TAB_ICONS.HOME);
  });

  it('Members tab uses TAB_ICONS.MEMBERS', () => {
    expect(tabs[1].icon).toBe(TAB_ICONS.MEMBERS);
  });

  it('Payments tab uses TAB_ICONS.PAYMENTS', () => {
    expect(tabs[2].icon).toBe(TAB_ICONS.PAYMENTS);
  });

  it('Attendance tab uses TAB_ICONS.ATTENDANCE', () => {
    expect(tabs[3].icon).toBe(TAB_ICONS.ATTENDANCE);
  });

  it('Setting tab uses TAB_ICONS.Setting', () => {
    expect(tabs[4].icon).toBe(TAB_ICONS.Setting);
  });

  it('each icon has active and inactive fields', () => {
    tabs.forEach((tab) => {
      expect(typeof tab.icon.active).toBe('string');
      expect(typeof tab.icon.inactive).toBe('string');
    });
  });

  it('all tab names are unique', () => {
    const names = tabs.map((t) => t.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(names.length);
  });

  it('all tab titles are unique', () => {
    const titles = tabs.map((t) => t.title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('tab names are non-empty strings', () => {
    tabs.forEach((tab) => {
      expect(tab.name.trim().length).toBeGreaterThan(0);
    });
  });
});