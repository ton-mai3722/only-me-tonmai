import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/home',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      // { title: 'All', path: '/projects' },
      { title: 'My Projects', path: '/projects/my-projects' },
      // { title: 'Graphic Design', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <Icon icon="lucide:bar-chart-2" width="24" height="24" />,
  submenu: true,
    subMenuItems: [
      { title: 'Overview', path: '/reports/' },
      { title: 'Revenue', path: '/reports/revenue' },
      { title: 'series', path: '/reports/series' },
      { title: 'User', path: '/reports/user' },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];