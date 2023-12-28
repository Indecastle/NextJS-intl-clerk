"use client";

import { useTranslations } from "next-intl";
import { Page } from "@/components/Page";
import { getTranslations } from "next-intl/server";

export default function NotFound() {
  // const t = useTranslations("Index");
  return (
    <Page htmlTitle="ServiceInfo">
      <Page.Paths>
        <Page.Path>#404</Page.Path>
      </Page.Paths>

      <Page.Body>
        <div className="text-center">
          <h2>Oh no! This page can't be found.</h2>
          <p>
            We're sorry but this page is either missing or the web address isn't
            quite right.
          </p>
        </div>
      </Page.Body>
    </Page>
  );
}
