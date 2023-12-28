import { useSelectedNavMenuKeys } from "@/utils/useSelectedNavMenuKeys";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
  auth,
  useUser,
} from "@clerk/nextjs";
import { Menu, type MenuProps } from "antd";
import Link from "next/link";

const signedInItems: MenuProps["items"] = [
  {
    label: <Link href="/profile">Profile</Link>,
    key: "/profile",
  },
  {
    label: (
      <span className="ant-menu-item-icon" style={{ verticalAlign: "middle" }}>
        <UserButton afterSignOutUrl="/" />
      </span>
    ),
    // style: { verticalAlign: "middle" },
    key: "profileMenu",
  },
];

const signedOutItems: MenuProps["items"] = [
  {
    label: <Link href="/sign-in">Login</Link>,
    key: "/:locale/sign-in",
  },
  {
    label: <Link href="/sign-up">Sign Up</Link>,
    key: "/:locale/sign-up",
  },
];

const AuthPanel = () => {
  const { isLoaded, isSignedIn } = useUser();
  const items = isSignedIn ? signedInItems : signedOutItems;
  const selectedKeys = useSelectedNavMenuKeys(items);

  return (
    isLoaded && (
      <Menu
        selectedKeys={selectedKeys}
        style={{
          marginLeft: "auto",
        }}
        className="nav"
        mode="horizontal"
        selectable={false}
        disabledOverflow
        items={items}
      />
    )
  );
};

export default AuthPanel;
