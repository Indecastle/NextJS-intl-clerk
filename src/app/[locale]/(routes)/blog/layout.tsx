import { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "My Love BLog",
  description: "Generated my blog",
  openGraph: {
    title: "My og blog",
  },
};

export default function BlogLayout({ children }: PropsWithChildren<unknown>) {
  return children;
}
