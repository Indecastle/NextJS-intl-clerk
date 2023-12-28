"use client";

import { Page } from "@/components/Page";
import { type Metadata } from "next";

export default function Blog() {
  return (
    <Page htmlTitle="ServiceInfo">
      <Page.Paths>
        <Page.Path href="/blog">Blog</Page.Path>
      </Page.Paths>

      <Page.Body>
        <h3>Blog</h3>
      </Page.Body>
    </Page>
  );
}
