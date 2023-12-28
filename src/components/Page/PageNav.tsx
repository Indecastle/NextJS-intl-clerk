import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { FC, PropsWithChildren, useMemo, useState } from "react";
import classNames from "classnames";
import { ReactChildren } from "@/utils";
import styles from "./Page.module.scss";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useRouteMatchPredicate } from "@/utils/react";
import { Icon } from "../Icon";
import { useRouter } from "next/navigation";

export type PageNavProps = PropsWithChildren<{
  expandedWidth?: number;
  basePath: string;
}>;

export interface PageNavItemProps {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const PageNavItem: FC<PageNavItemProps> = () => <></>;

function PageNav(props: PageNavProps) {
  const { expandedWidth, basePath, children } = props;
  const { push } = useRouter();

  const [expanded, setExpanded] = useState(true);
  const items = ReactChildren.of(children).find(PageNavItem).propsMany();
  const match = useRouteMatchPredicate(basePath);
  const matched = items.find((x) => match(x.href));
  const selected = useMemo(() => (matched ? [matched.href] : []), [matched]);

  return (
    <div className={classNames(styles.nav, "Page_Nav")}>
      <Sider
        width={expandedWidth!}
        onCollapse={() => setExpanded(!expanded)}
        trigger={
          expanded ? (
            <Icon type="side-nav-collapse" />
          ) : (
            <Icon type="side-nav-expand" />
          )
        }
        collapsed={!expanded}
        collapsible
        theme="light"
        className="nav"
      >
        <Menu
          mode="inline"
          className="nav"
          inlineCollapsed={!expanded}
          // _internalDisableMenuItemTitleTooltip
          selectedKeys={selected}
          items={items.map((item) => ({
            key: item.href,
            icon: item.icon,
            label: item.children,
            onClick: () => push(item.href),
          }))}
        />
      </Sider>
    </div>
  );
}

export const PageNavExports = {
  PageNav,
  PageNavItem,
};
