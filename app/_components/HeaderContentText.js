"use client";

import { useEffect, useState } from "react";

export default function HeaderContentText({ sectionKey, field = "title", fallback }) {
  const [value, setValue] = useState(fallback);

  useEffect(() => {
    fetch("/api/admin/headers")
      .then((response) => response.json())
      .then((data) => {
        const item = data.items?.find((entry) => entry.key === sectionKey);
        const nextValue = item?.[field];
        const defaultTitle =
          sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);
        const isSeedTitle = field === "title" && nextValue === defaultTitle;
        const isSeedContent =
          field === "content" &&
          typeof nextValue === "string" &&
          nextValue.startsWith(`Manage the ${sectionKey} section content`);

        if (nextValue && !isSeedTitle && !isSeedContent) setValue(nextValue);
      })
      .catch(() => {});
  }, [sectionKey, field]);

  return <>{value}</>;
}
