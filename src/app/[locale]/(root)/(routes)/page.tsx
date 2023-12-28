"use client";

import { useTranslations } from "next-intl";
import theme from "../../themeConfig";
import { Page } from "@/components/Page";
import { getTranslations } from "next-intl/server";

export default function Home() {
  const { colorBgContainer, borderRadiusLG } = theme.token!;
  const t = useTranslations("Index");
  return (
    <Page htmlTitle="ServiceInfo">
      <Page.Paths></Page.Paths>

      <Page.Body>{t("title")}</Page.Body>
    </Page>
  );
}
