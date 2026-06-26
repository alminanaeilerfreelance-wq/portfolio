"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { defaultPersonalInfo } from "@/app/_lib/defaultData";

export default function PersonalLogo({ variant = "dark" }) {
  const fallback = "/logo-light.png";
  const [logo, setLogo] = useState(defaultPersonalInfo.logo || fallback);

  useEffect(() => {
    fetch("/api/admin/personal")
      .then((response) => response.json())
      .then((data) => {
        const info = data.items?.[0];
        if (info?.logo && !info.logo.endsWith(".svg")) setLogo(info.logo);
      })
      .catch(() => {});
  }, []);

  return (
    <Image
      src={logo || fallback}
      alt="Alminana Eiler B. logo"
      width={1000}
      height={40}
      className="h-auto max-h-12 w-auto object-contain"
      unoptimized
    />
  );
}
