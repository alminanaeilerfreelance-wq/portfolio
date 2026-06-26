"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../service/ProductService";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [testimonial, setTestimonial] = useState([]);
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

  useEffect(() => {
    fetch("/api/admin/testimonials")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.length) {
          setTestimonial(data.items);
        } else {
          ProductService.getTestimonials().then((fallback) =>
            setTestimonial(fallback.slice(0, 6))
          );
        }
      })
      .catch(() => {
        ProductService.getTestimonials().then((fallback) =>
          setTestimonial(fallback.slice(0, 6))
        );
      });
  }, []);

  const testimonialTemplate = (testimonial) => {
    return (
      <div className="mx-auto w-full max-w-4xl px-3 text-center">
        <div className="rounded-2xl border border-solid border-blue-200/15 bg-white/[0.06] px-6 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur md:px-10">
          <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-3xl font-black text-white shadow-[0_0_30px_rgba(37,99,235,.35)]">
            &quot;
          </div>
          <div className="text-lg font-medium leading-8 text-slate-200 md:text-xl">
            {testimonial.text}
          </div>
          <div className="mt-7 text-lg font-black text-white">
            {testimonial.userName}
          </div>
          <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-cyan-200">
            {testimonial.userPost}, {testimonial.userCompany}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card bg-transparent">
      <Carousel
        value={testimonial}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={testimonialTemplate}
        showNavigators={false}
      />
    </div>
  );
}
