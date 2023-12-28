import { FC, useEffect } from "react";
import { PropsWithChildren } from "react";
import { ReactChildren } from "@/utils";
import { PagePath, PagePaths, PagePathsRenderer } from "./PagePath";
import { Col, ColProps, Row } from "antd";
import styles from "./Page.module.scss";
import classNames from "classnames";
import Head from "next/head";
import usePageCLient from "./PageClient";

export const PageBody: FC<
  PropsWithChildren<
    Pick<ColProps, "span" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "offset">
  >
> = () => <></>;

PageBody.defaultProps = {
  xs: { span: 24 },
  lg: { span: 22, offset: 1 },
  xl: { span: 20, offset: 2 },
  xxl: { span: 18, offset: 3 },
};

const _Page: FC<PropsWithChildren<{ htmlTitle?: string }>> = ({
  children,
  htmlTitle,
}) => {
  // const { t } = useTranslation();

  // usePageCLient();

  const pageBodyProps = ReactChildren.of(children).find(PageBody).props();
  const pathsProps = ReactChildren.of(children).find(PagePaths).props();
  const pathProps = pathsProps.children
    ? ReactChildren.of(pathsProps.children).find(PagePath).propsMany()
    : [];

  const { children: _, ...colBodyProps } = pageBodyProps;

  return (
    <div className={styles.page}>
      <Head>
        <title>
          {htmlTitle ? `${htmlTitle} / ` : ""}
          {/* {t("brand")} */}
        </title>
      </Head>

      {pageBodyProps && (
        <Row className={styles.body}>
          <Col {...colBodyProps}>
            <PagePathsRenderer pathProps={pathProps} />
            <div>{pageBodyProps.children}</div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export const Page = Object.assign(_Page, {
  Body: PageBody,
  Paths: PagePaths,
  Path: PagePath,
});
