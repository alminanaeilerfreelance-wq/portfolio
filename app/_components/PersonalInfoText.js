"use client";

import { useEffect, useState } from "react";

import { defaultPersonalInfo } from "@/app/_lib/defaultData";

export default function PersonalInfoText({ field, fallback, className = "" }) {
  const [info, setInfo] = useState(defaultPersonalInfo);

  useEffect(() => {
    fetch("/api/admin/personal")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.[0]) setInfo(data.items[0]);
      })
      .catch(() => {});
  }, []);

  return <span className={className}>{info[field] || fallback}</span>;
}
