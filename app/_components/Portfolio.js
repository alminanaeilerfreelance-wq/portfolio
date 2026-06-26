"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { defaultPortfolio } from "@/app/_lib/defaultData";

const imageSrc = (portfolio) => {
  const value = portfolio.image || portfolio.imageUrl || "";
  if (value.startsWith("/") || value.startsWith("http") || value.startsWith("data:")) return value;
  return `/portfolio/${value}`;
};

export default function Page() {
  const [portfolioData, setPortfolioData] = useState(defaultPortfolio);

  useEffect(() => {
    fetch("/api/admin/portfolio")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.length) setPortfolioData(data.items);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
        {portfolioData.map((portfolio) => (
          <div
            key={portfolio._id || portfolio.title}
            className="bg-white rounded-lg border border-solid border-[#E6E8EB] overflow-hidden "
          >
            <div className="relative h-[248px]">
              <Image
                src={imageSrc(portfolio)}
                fill
                className="object-cover"
                alt={portfolio.title}
                unoptimized
              />
            </div>
            <div className="p-8">
              <div className="text-gray-400 text-xs font-medium">
                {portfolio.category}
              </div>
              <div className="text-gray-900 text-lg font-semibold mb-1">
                {portfolio.title}
              </div>
              <div className="text-gray-600 text-sm mt-3">
                {portfolio.description}
              </div>

              <Link
                href={portfolio.link}
                className="p-button p-button-outlined mt-5 text-primary-500 font-bold no-underline"
                target={portfolio.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  portfolio.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {portfolio.linkLabel || "Case Study"}
                <ArrowRightIcon className="size-6 text-primary-500 ml-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
