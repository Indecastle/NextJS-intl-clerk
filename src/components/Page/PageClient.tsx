"use client";

import { useEffect } from "react";

export default function usePageCLient() {
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  useEffect(() => {
    document.body.removeAttribute("style");
  });
}
