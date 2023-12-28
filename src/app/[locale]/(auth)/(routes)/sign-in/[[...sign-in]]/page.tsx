"use client";

import { SignIn } from "@clerk/nextjs";
import { Page } from "@/components/Page";

interface Props {
  params: { locale: string };
}

export default function LoginPage({ params: { locale } }: Props) {
  return (
    <Page htmlTitle="ServiceInfo">
      <Page.Paths>
        <Page.Path href="/sign-in">Login</Page.Path>
      </Page.Paths>

      <Page.Body>
        <div style={{ width: "fit-content", marginInline: "auto" }}>
          <SignIn path={`/${locale}/sign-in`} />
        </div>
      </Page.Body>
    </Page>
  );
}
