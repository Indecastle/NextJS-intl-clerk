import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    // <div style={{ width: "fit-content", marginInline: "auto" }}>{children}</div>
    children
  );
}
