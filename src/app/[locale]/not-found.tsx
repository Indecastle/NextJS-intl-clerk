"use client";

import { useTranslations } from "next-intl";
import { Page } from "@/components/Page";

export default function NotFound() {
  const t = useTranslations("Errors");

  return (
    <Page htmlTitle="ServiceInfo">
      <Page.Paths>
        <Page.Path>#404</Page.Path>
      </Page.Paths>

      <Page.Body>
        <div className="text-center">
          <h2>{t("notFoundStep1")}</h2>
          <p>{t("notFoundStep2")}</p>
        </div>
      </Page.Body>
    </Page>
  );
}
