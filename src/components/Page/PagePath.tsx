"use client";

import { FC, PropsWithChildren, ReactNode } from "react";
import { ReactChildren } from "@/utils";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import styles from "./Page.module.scss";
import Link from "next/link";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";

export type PagePathProps = PropsWithChildren<{ href?: string }>;
export const PagePath: FC<PagePathProps> = () => <></>;

export const PagePaths: React.FC<PropsWithChildren<{}>> = () => {
  return <></>;
};

export type PagePathsProps = PropsWithChildren<{}>;

export const PagePathsRenderer: React.FC<{ pathProps: PagePathProps[] }> = ({
  pathProps,
}) => {
  function itemRender(
    route: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>,
    params: any,
    routes: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[],
    paths: string[]
  ): ReactNode {
    const last = routes.indexOf(route) === routes.length - 1;

    return last ? (
      <span>{route.title}</span>
    ) : (
      <Link href={route.path!}>{route.title}</Link>
    );
  }

  return (
    <div className={styles.pathsContainer}>
      <Breadcrumb
        className={styles.paths}
        items={[
          {
            path: "/",
            title: <HomeOutlined />,
          },
          ...pathProps.map((path, index) => ({
            path: path.href,
            title: path.children,
          })),
        ]}
        itemRender={itemRender}
      ></Breadcrumb>
    </div>
  );
};
