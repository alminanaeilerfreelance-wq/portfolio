"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../service/ProductService";

import Image from "next/image";
import Link from "next/link";

const imageSrc = (client) => {
  const value = client.image || "";
  if (value.startsWith("/") || value.startsWith("http")) return value;
  return `/clients/${value}`;
};

export default function Page() {
  const [clients, setClients] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  useEffect(() => {
    fetch("/api/admin/clients")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.length) {
          setClients(data.items);
        } else {
          ProductService.getClientsHome().then((fallback) =>
            setClients(fallback.slice(0, 6))
          );
        }
      })
      .catch(() => {
        ProductService.getClientsHome().then((fallback) =>
          setClients(fallback.slice(0, 6))
        );
      });
  }, []);

  const clientsTemplate = (client) => {
    return (
      <div className="mx-3">
        <div className="group flex min-h-[112px] items-center justify-center gap-4 rounded-lg border border-solid border-cyan-200/20 bg-white/[0.06] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.09]">
          <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white/10">
            <Image
              src={imageSrc(client)}
              alt={client.name}
              fill
              className="object-contain p-3"
              unoptimized
            />
          </div>
          {client.name && (
            <div className="min-w-0">
              <div className="truncate text-lg font-bold text-white">
                {client.name}
              </div>
              <div className="mt-1 text-sm font-medium uppercase tracking-wide text-cyan-200/80">
                Client / Employer
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="card bg-transparent">
      <Carousel
        value={clients}
        numVisible={6}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={clientsTemplate}
        showIndicators={false}
        showNavigators={false}
      />
    </div>
  );
}
