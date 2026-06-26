"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { defaultSkills } from "@/app/_lib/defaultData";

const imageSrc = (skill) => {
  const value = skill.image || "";
  if (value.startsWith("/") || value.startsWith("http")) return value;
  return `/uploads/${value}`;
};

export default function Skills() {
  const [skills, setSkills] = useState(defaultSkills);

  useEffect(() => {
    fetch("/api/admin/skills")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.length) setSkills(data.items);
      })
      .catch(() => {});
  }, []);

  const sliderItems = useMemo(
    () =>
      [0, 1, 2].flatMap((repeatIndex) =>
        skills
          .filter((skill) => skill.name)
          .map((skill, skillIndex) => ({
            ...skill,
            sliderKey: `${repeatIndex}-${skill._id || skill.name}-${skillIndex}`,
          }))
      ),
    [skills]
  );

  return (
    <section className="bg-white py-12 text-gray-900" id="skills">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
              Skills
            </div>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 lg:text-4xl">
              Tools and technologies
            </h2>
          </div>
          <p className="max-w-xl text-gray-500">
            A practical stack for building, automating, deploying, and
            maintaining modern business systems.
          </p>
        </div>
      </div>

      <div className="skill-slider relative overflow-hidden border-0 border-y border-solid border-gray-100 bg-white py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="skill-track flex w-max gap-5">
          {sliderItems.map((skill, index) => (
            <div
              className="flex min-w-[210px] items-center gap-4 rounded-lg border border-solid border-gray-100 bg-white p-4 shadow-[0_12px_36px_rgba(15,23,42,0.08)]"
              key={skill.sliderKey}
            >
              <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg bg-cyan-50">
                {skill.image ? (
                  <Image
                    src={imageSrc(skill)}
                    alt={`${skill.name} icon`}
                    fill
                    className="object-contain p-3"
                    unoptimized
                  />
                ) : (
                  <span className="text-lg font-black text-cyan-700">
                    {skill.name?.charAt(0)}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <div className="truncate text-lg font-semibold text-gray-900">
                  {skill.name}
                </div>
                <div className="text-sm text-gray-500">Skill</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
