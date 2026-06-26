"use client";

import { useEffect, useState } from "react";

export default function PersonalInfoLink({
  field,
  fallback = "#",
  className = "",
  children,
}) {
  const [href, setHref] = useState(fallback);

  useEffect(() => {
    fetch("/api/admin/personal")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.[0]?.[field]) setHref(data.items[0][field]);
      })
      .catch(() => {});
  }, [field]);

  return (
    <a href={href || fallback} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
