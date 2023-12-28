"use client";

import { SignUp } from "@clerk/nextjs";
import { Page } from "@/components/Page";

interface Props {
  params: { locale: string };
}

export default function RegisterPage({ params: { locale } }: Props) {
  return (
    <Page htmlTitle="ServiceInfo">
      <Page.Paths>
        <Page.Path href="/sign-up">Register</Page.Path>
      </Page.Paths>

      <Page.Body>
        <div style={{ width: "fit-content", marginInline: "auto" }}>
          <SignUp path={`/${locale}/sign-up`} />;
        </div>
      </Page.Body>
    </Page>
  );
}
