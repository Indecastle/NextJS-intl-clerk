"use client";

import { Page } from "@/components/Page";
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <Page htmlTitle="ServiceInfo">
    <Page.Paths>
      <Page.Path href="/profile">Profile</Page.Path>
    </Page.Paths>

    <Page.Body>
      <div style={{ width: "fit-content", marginInline: "auto" }}>
        <UserProfile path="/profile" />
      </div>
    </Page.Body>
  </Page>
);

export default UserProfilePage;
