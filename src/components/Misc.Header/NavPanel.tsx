import { useSelectedNavMenuKeys } from "@/utils/useSelectedNavMenuKeys";
import { AccountBookOutlined, SettingOutlined } from "@ant-design/icons";
import { Col, Menu, Row, Space } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import styles from "./Header.module.scss";

function useNavMenu() {
  const t = useTranslations("NavPanel");

  const items: ItemType[] = [
    {
      label: <Link href="/blog">{t("blog")}</Link>,
      key: "/blog",
      icon: <AccountBookOutlined />,
    },
    {
      label: t("other"),
      key: "OtherSubmenu",
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link href="/about">{t("about")}</Link>,
          key: "/about",
        },
      ],
    },
  ].filter((x) => !!x) as ItemType[];

  const selectedKeys = useSelectedNavMenuKeys(items);

  return (
    <Menu
      selectedKeys={selectedKeys}
      className="nav"
      mode="horizontal"
      disabledOverflow
      items={items}
    />
  );
}

const NavPanel = () => {
  const navMenu = useNavMenu();

  return (
    <Row justify="space-between" gutter={[0, 0]}>
      <Col>
        <Space size="large">
          <Link href="/" className={classNames("", "ms-2")}>
            <Image
              className={styles.logo}
              src={Logo}
              alt="Follow us on Twitter"
            />
          </Link>
        </Space>
      </Col>
      <Col>{navMenu}</Col>
    </Row>
  );
};

export default NavPanel;
