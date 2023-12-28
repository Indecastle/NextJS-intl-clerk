"use client";

import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { MenuProps, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import NavPanel from "./NavPanel";
import AuthPanel from "./AuthPanel";
import styles from "./Header.module.scss";

const TheHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      className={styles.header}
      style={{
        background: colorBgContainer,
        display: "flex",
      }}
    >
      <div className="demo-logo" />
      <NavPanel />
      <AuthPanel />
    </Header>
  );
};

export default TheHeader;
