import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import AntIcon from '@ant-design/icons';
import { IconType } from './IconType.auto-created';
import { IconMap } from './IconMap.auto-created';
import classNames from 'classnames';

export interface IconProps
  extends Omit<Partial<CustomIconComponentProps>, 'component'> {
  type: IconType;
}

export function Icon({ type: icon, ...props }: IconProps) {
  return (
    <AntIcon
      component={IconMap[icon]}
      {...props}
      className={classNames(props.className, `icon-${icon}`)}
    />
  );
}
