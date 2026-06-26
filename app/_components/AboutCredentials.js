"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  MapPinIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import profle from "@/public/profile.png";
import {
  defaultExperience,
  defaultPersonalInfo,
  defaultTraining,
} from "@/app/_lib/defaultData";
import HeaderContentText from "./HeaderContentText";
import PersonalInfoLink from "./PersonalInfoLink";
import PersonalInfoText from "./PersonalInfoText";

const stats = [
  { value: "5+", label: "Years Experience", icon: CalendarDaysIcon },
  { value: "30+", label: "Projects Completed", icon: RocketLaunchIcon },
  { value: "20+", label: "Happy Clients", icon: UserGroupIcon },
];

const socialLinks = [
  { key: "facebook", icon: "facebook", label: "Facebook" },
  { key: "linkedin", icon: "linkedin", label: "LinkedIn" },
  { key: "instagram", icon: "instagram", label: "Instagram" },
  { key: "twitter", icon: "twitter", label: "Twitter" },
];

function descriptionLines(value) {
  if (!value) return [];

  return value
    .split(/\r?\n|(?<=\.)\s+(?=[A-Z])/)
    .map((item) => item.replace(/^[-•]\s*/, "").trim())
    .filter(Boolean);
}

function TimelineItem({ item, type }) {
  const title = type === "training" ? item.course : item.position;
  const subtitle = type === "training" ? item.certificate : item.company;
  const location = type === "training" ? item.address : item.location;
  const lines =
    type === "training"
      ? [location].filter(Boolean)
      : descriptionLines(item.jobDescription);

  return (
    <article className="relative grid gap-4 pl-10 sm:grid-cols-[8.5rem_1fr] sm:pl-0">
      <div className="text-sm font-bold text-[#071a3d]">
        <div>{item.year || "Present"}</div>
        <div className="mt-1 text-xs font-medium text-slate-500">Date period</div>
      </div>

      <div className="relative border-l border-slate-300 pb-8 pl-8 last:pb-0">
        <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
        <h3 className="text-lg font-black leading-snug text-[#071a3d]">
          {title || "Untitled"}
        </h3>
        {subtitle && (
          <div className="mt-1 text-sm font-black text-orange-600">
            {subtitle}
          </div>
        )}
        {location && type === "experience" && (
          <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <MapPinIcon className="h-4 w-4 text-blue-600" />
            {location}
          </div>
        )}
        {lines.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-sm leading-6 text-slate-700">
            {lines.map((line, index) => (
              <li className="flex gap-2" key={`${title}-${index}-${line}`}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function CredentialsColumn({ title, icon: Icon, items, type }) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,.35)]">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[#071a3d]">
            {title}
          </h2>
          <div className="mt-2 h-0.5 w-24 bg-gradient-to-r from-blue-600 to-slate-300" />
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <TimelineItem
            item={item}
            type={type}
            key={item._id || `${type}-${item.year}-${item.course || item.company}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutCredentials() {
  const [training, setTraining] = useState(defaultTraining);
  const [experience, setExperience] = useState(defaultExperience);
  const [personal, setPersonal] = useState(defaultPersonalInfo);

  useEffect(() => {
    fetch("/api/admin/training")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.length) setTraining(data.items);
      })
      .catch(() => {});

    fetch("/api/admin/experience")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.length) setExperience(data.items);
      })
      .catch(() => {});

    fetch("/api/admin/personal")
      .then((response) => response.json())
      .then((data) => {
        if (data.items?.[0]) setPersonal({ ...defaultPersonalInfo, ...data.items[0] });
      })
      .catch(() => {});
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#eef2f8] px-4 py-12 sm:px-6 lg:px-8 lg:py-20"
      id="about"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/50 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/50 blur-[120px]" />

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[26rem_1fr]">
          <aside className="overflow-hidden rounded-[2rem] border border-blue-900/10 bg-[#061223] p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,.24)] lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-blue-400/30 bg-blue-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.5),transparent_42%)]" />
              <Image
                src={profle}
                alt="Alminana Eiler B. profile"
                className="relative h-[21rem] w-full object-cover object-top"
                priority={false}
              />
            </div>

            <div className="px-3 pb-4 pt-6">
              <h2 className="text-4xl font-black uppercase leading-none tracking-wide">
                <PersonalInfoText field="name" fallback="Alminana Eiler B." />
              </h2>
              <div className="mt-3 text-lg font-medium text-white">
                AI Automation & Software Engineer
              </div>
              <div className="mt-4 h-1 w-16 rounded-full bg-blue-500" />

              <div className="mt-6 text-base leading-7 text-slate-200">
                <HeaderContentText
                  sectionKey="about"
                  field="content"
                  fallback="I work across the software development life cycle, from requirements and interface planning to coding, deployment, maintenance, and production support."
                />
              </div>

              <div className="mt-6 rounded-2xl border border-blue-400/35 bg-white/[0.04] p-5">
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-600 shadow-[0_0_28px_rgba(37,99,235,.45)]">
                    <CheckBadgeIcon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-wide text-blue-300">
                      Available for
                    </div>
                    <div className="mt-2 text-lg font-bold leading-7 text-white">
                      AI automation, cloud code, and business systems
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm font-black uppercase tracking-wide text-blue-300">
                  Connect with me
                </div>
                <div className="mt-4 flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      href={personal[social.key] || "#"}
                      aria-label={social.label}
                      className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white no-underline shadow-[0_10px_30px_rgba(37,99,235,.35)] transition hover:-translate-y-0.5 hover:bg-blue-500"
                      key={social.key}
                    >
                      <i className={`pi pi-${social.icon} text-xl leading-none`} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 divide-x divide-blue-300/25 border-t border-blue-300/20 pt-5">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div className="px-3 text-center" key={stat.label}>
                      <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-lg bg-blue-600 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-2xl font-black">{stat.value}</div>
                      <div className="mt-1 text-xs leading-4 text-slate-200">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="rounded-[2rem] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,.12)] sm:p-8 lg:p-12">
            <div className="relative mb-10 flex items-center justify-center">
              <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-blue-700/30 md:block" />
              <div className="relative inline-flex items-center gap-4 rounded-full bg-[#061223] px-8 py-4 text-white shadow-[0_16px_34px_rgba(15,23,42,.24)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600">
                  <AcademicCapIcon className="h-6 w-6" />
                </span>
                <span className="text-xl font-black uppercase tracking-wide">
                  Education & Experience
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              <CredentialsColumn
                title="Education"
                icon={AcademicCapIcon}
                items={training}
                type="training"
              />
              <div className="lg:border-l lg:border-slate-200 lg:pl-12">
                <CredentialsColumn
                  title="Experience"
                  icon={BriefcaseIcon}
                  items={experience}
                  type="experience"
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="#portfolio"
                className="inline-flex min-h-14 items-center justify-center rounded-lg bg-blue-700 px-6 py-4 text-base font-black uppercase tracking-wide text-white no-underline shadow-[0_12px_28px_rgba(37,99,235,.28)] transition hover:bg-blue-600"
              >
                <BriefcaseIcon className="mr-3 h-6 w-6" />
                View My Projects
                <ArrowRightIcon className="ml-3 h-5 w-5" />
              </Link>
              <PersonalInfoLink
                field="resume"
                fallback="/AlminanaEilerBResume.pdf"
                className="inline-flex min-h-14 items-center justify-center rounded-lg border border-blue-700 px-6 py-4 text-base font-black uppercase tracking-wide text-blue-700 no-underline transition hover:bg-blue-50"
              >
                <ArrowDownTrayIcon className="mr-3 h-6 w-6" />
                Download CV
              </PersonalInfoLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
