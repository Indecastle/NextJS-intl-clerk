import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { PropsWithChildren } from "react";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Metadata.Index" });

  return {
    title: t("title"),
  };
}

export default function IndexLayout({ children }: PropsWithChildren<unknown>) {
  return children;
}
