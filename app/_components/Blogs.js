"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../service/ProductService";
import { defaultBlogs } from "@/app/_lib/defaultData";

import Image from "next/image";
import Link from "next/link";

const imageSrc = (product) => {
  const value = product.image || "";
  if (value.startsWith("/") || value.startsWith("http")) return value;
  return `/blogs/${value}`;
};

export default function Page() {
  const [products, setProducts] = useState([]);
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
    fetch("/api/admin/blogs")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.length) {
          setProducts(data.items);
        } else {
          ProductService.getProductsSmall().then((fallback) =>
            setProducts(fallback.slice(0, 9))
          );
        }
      })
      .catch(() => setProducts(defaultBlogs));
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="bg-white rounded-lg border border-solid border-gray-50 mx-3 overflow-hidden">
        <div className="relative w-full h-56">
          <Image
            src={imageSrc(product)}
            alt={product.title || product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-gray-400 text-sm">{product.category}</div>
          <Link
            href={product.link || "#"}
            className="text-gray-950 text-lg font-medium no-underline"
            target={product.link?.startsWith("http") ? "_blank" : undefined}
            rel={product.link?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {product.title || product.name}
          </Link>
          <p className="text-gray-600 text-sm mt-3">{product.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
