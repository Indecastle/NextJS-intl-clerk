import { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Description",
  openGraph: {
    title: "About OG Page",
  },
};

export default function AboutLayout({ children }: PropsWithChildren<unknown>) {
  return children;
}
