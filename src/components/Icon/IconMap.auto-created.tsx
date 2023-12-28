// eslint-disable
// this file created automatically, doesn't update it
// use yarn build:icons

import React from 'react';
import { IconType } from './IconType.auto-created';
import Icon from '@ant-design/icons';
import { ReactComponent as Account } from '@/assets/images/icons/account.svg';
import { ReactComponent as Arrowdown } from '@/assets/images/icons/arrow-down.svg';
import { ReactComponent as Arrowup } from '@/assets/images/icons/arrow-up.svg';
import { ReactComponent as Bell } from '@/assets/images/icons/bell.svg';
import { ReactComponent as Clipboard } from '@/assets/images/icons/clipboard.svg';
import { ReactComponent as Dollar } from '@/assets/images/icons/dollar.svg';
import { ReactComponent as Edit } from '@/assets/images/icons/edit.svg';
import { ReactComponent as Home } from '@/assets/images/icons/home.svg';
import { ReactComponent as Inbox } from '@/assets/images/icons/inbox.svg';
import { ReactComponent as Layout } from '@/assets/images/icons/layout.svg';
import { ReactComponent as Mappin } from '@/assets/images/icons/map-pin.svg';
import { ReactComponent as Maximize } from '@/assets/images/icons/maximize.svg';
import { ReactComponent as Paperclip } from '@/assets/images/icons/paperclip.svg';
import { ReactComponent as Piechart } from '@/assets/images/icons/pie-chart.svg';
import { ReactComponent as Rectangle } from '@/assets/images/icons/rectangle.svg';
import { ReactComponent as Settings } from '@/assets/images/icons/settings.svg';
import { ReactComponent as Sidenavcollapse } from '@/assets/images/icons/side-nav-collapse.svg';
import { ReactComponent as Sidenavexpand } from '@/assets/images/icons/side-nav-expand.svg';
import { ReactComponent as Template } from '@/assets/images/icons/template.svg';
import { ReactComponent as User } from '@/assets/images/icons/user.svg';
import { ReactComponent as Users } from '@/assets/images/icons/users.svg';

export const IconMap: Record<IconType, React.ComponentType> = {
  'account': () => <Icon component={() => <Account />} />,
  'arrow-down': () => <Icon component={() => <Arrowdown />} />,
  'arrow-up': () => <Icon component={() => <Arrowup />} />,
  'bell': () => <Icon component={() => <Bell />} />,
  'clipboard': () => <Icon component={() => <Clipboard />} />,
  'dollar': () => <Icon component={() => <Dollar />} />,
  'edit': () => <Icon component={() => <Edit />} />,
  'home': () => <Icon component={() => <Home />} />,
  'inbox': () => <Icon component={() => <Inbox />} />,
  'layout': () => <Icon component={() => <Layout />} />,
  'map-pin': () => <Icon component={() => <Mappin />} />,
  'maximize': () => <Icon component={() => <Maximize />} />,
  'paperclip': () => <Icon component={() => <Paperclip />} />,
  'pie-chart': () => <Icon component={() => <Piechart />} />,
  'rectangle': () => <Icon component={() => <Rectangle />} />,
  'settings': () => <Icon component={() => <Settings />} />,
  'side-nav-collapse': () => <Icon component={() => <Sidenavcollapse />} />,
  'side-nav-expand': () => <Icon component={() => <Sidenavexpand />} />,
  'template': () => <Icon component={() => <Template />} />,
  'user': () => <Icon component={() => <User />} />,
  'users': () => <Icon component={() => <Users />} />,
}
