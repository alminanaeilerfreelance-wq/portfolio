import Image from "next/image";
import profle from "@/public/profile.png";
import Link from "next/link";

import Blog from "./_components/Blogs";
import Clients from "./_components/Clients";
import Testimonial from "./_components/Testimonial";
import ContactForm from "./_components/ContactForm";
import Portfolio from "./_components/Portfolio";
import Skills from "./_components/Skills";
import PersonalInfoText from "./_components/PersonalInfoText";
import HeaderContentText from "./_components/HeaderContentText";
import PersonalInfoLink from "./_components/PersonalInfoLink";

import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  CloudArrowUpIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  NewspaperIcon,
  PencilSquareIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

const heroStats = [
  { value: "14+ Yrs.", label: "IT and production support" },
  { value: "3+ Yrs.", label: "Web application delivery" },
  { value: "AI + Cloud", label: "Automation-ready systems" },
];

const serviceCards = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive business workflows with AI-assisted forms, document handling, notifications, reporting, and internal operations.",
    icon: CpuChipIcon,
  },
  {
    title: "Software Engineering",
    description:
      "Build full-stack business apps, admin portals, e-commerce workflows, dashboards, APIs, and secure database-backed features.",
    icon: CodeBracketSquareIcon,
  },
  {
    title: "Cloud Code and Deployment",
    description:
      "Prepare projects for reliable hosting, environment configuration, GitHub delivery, Vercel deployment, API testing, and ongoing releases.",
    icon: CloudArrowUpIcon,
  },
  {
    title: "Maintenance and Support",
    description:
      "Improve existing systems through debugging, performance fixes, database updates, UI cleanup, and long-term technical support.",
    icon: WrenchScrewdriverIcon,
  },
];

const processCards = [
  {
    title: "1. Discover",
    description:
      "Map the business workflow, users, data, tools, pain points, and the result the project must deliver.",
    icon: NewspaperIcon,
  },
  {
    title: "2. Design",
    description:
      "Plan screens, data models, integrations, hosting needs, and the simplest architecture that can grow.",
    icon: PencilSquareIcon,
  },
  {
    title: "3. Build and Automate",
    description:
      "Develop the application, connect APIs, add AI-assisted automation, and keep the interface practical for daily use.",
    icon: CodeBracketSquareIcon,
  },
  {
    title: "4. Deploy and Improve",
    description:
      "Launch, test, monitor, fix issues, and continue improving the system as the client workflow evolves.",
    icon: PresentationChartLineIcon,
  },
];

const capabilityList = [
  "NERN and Laravel/PHP business applications",
  "AI workflow automation and API integrations",
  "Cloud-ready deployment, GitHub, Vercel, and AWS support",
  "Database design with MongoDB, MySQL, and Firebase",
];

export default function Home() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-[#061223] pt-10 text-white"
        id="home"
      >
        <div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-[position:right_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#061223_0%,#061223_42%,rgba(6,18,35,.94)_56%,rgba(6,18,35,.58)_72%,rgba(6,18,35,.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.72)_0%,rgba(6,18,35,.10)_44%,rgba(2,6,23,.85)_100%)]" />
        <div className="absolute left-8 top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-10 right-8 h-96 w-96 rounded-full bg-cyan-400/20 blur-[150px]" />

        <div className="container relative z-1 mx-auto min-h-[calc(100vh-6rem)] py-14 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-3xl rounded-2xl border border-blue-300/15 bg-[#061223]/55 p-5 shadow-[0_24px_90px_rgba(0,0,0,.35)] backdrop-blur-md sm:p-7 lg:p-8">
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Automation",
                  "Software Engineering",
                  "Cloud Solutions",
                ].map((item) => (
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,.16)]"
                    key={item}
                  >
                    <RocketLaunchIcon className="size-3.5 text-cyan-300" />
                    {item}
                  </span>
                ))}
              </div>

              <h1 className="mt-7 max-w-2xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
                <HeaderContentText
                  sectionKey="home"
                  fallback="I Build Smart Business Systems"
                />
              </h1>

              <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-blue-600 text-sm font-black text-white shadow-[0_0_22px_rgba(59,130,246,.45)]">
                  AE
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    Portfolio of
                  </span>
                  <span className="block text-lg font-bold text-cyan-100">
                    <PersonalInfoText field="name" fallback="Alminana Eiler B." />
                  </span>
                </span>
              </div>

              <div className="mt-6 rounded-xl border border-blue-300/20 bg-white/[0.06] p-5 text-base leading-8 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] sm:text-lg">
                <HeaderContentText
                  sectionKey="home"
                  field="content"
                  fallback="I am a Web Developer specializing in building high-performance web applications, secure e-commerce systems, and internal enterprise tools using the NERN stack (MongoDB, Express, Next.js, Node.js). Driven by efficiency, I leverage Anthropic's advanced AI models to seamlessly integrate intelligent automation, while optimizing cloud code to build scalable, resilient systems designed for modern digital transformation."
                />
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-blue-300 bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-bold text-white no-underline shadow-[0_0_32px_rgba(59,130,246,.55)] transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500"
                >
                  Let&apos;s Build Together
                  <ArrowRightIcon className="ml-3 size-5 text-white" />
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-cyan-300/35 bg-white/[0.06] px-7 py-4 font-bold text-white no-underline backdrop-blur transition hover:-translate-y-0.5 hover:bg-cyan-300/10"
                >
                  View My Work
                  <CodeBracketSquareIcon className="ml-3 size-5 text-blue-300" />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((stat) => (
                  <div
                    className="rounded-lg border border-blue-300/20 bg-white/[0.07] p-4 shadow-[0_0_30px_rgba(59,130,246,.12)]"
                    key={stat.label}
                  >
                    <div className="text-xl font-black text-cyan-100">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs leading-5 text-slate-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
                <div className="rounded-lg border border-blue-300/20 bg-white/[0.07] p-4 shadow-[0_0_30px_rgba(59,130,246,.12)]">
                  <div className="text-xl font-black text-cyan-100">Scalable</div>
                  <div className="mt-2 text-xs leading-5 text-slate-300">
                    Cloud-ready code
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden min-h-[540px] lg:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="relative bg-[#061223] px-0 pb-16" id="about">
        <div className="container relative z-10 mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_30px_100px_rgba(0,0,0,.35)] backdrop-blur lg:p-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="relative flex justify-center rounded-xl border border-blue-300/20 bg-white/[0.06] p-5">
                <Image
                  src={profle}
                  alt="Alminana Eiler B. profile"
                  className="h-auto max-h-[430px] w-auto object-contain"
                />
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1 rounded-lg border border-white/10 bg-[#080f24]/90 p-3 shadow-[0_18px_60px_rgba(0,0,0,.35)] backdrop-blur">
                  {["facebook", "linkedin", "instagram", "twitter"].map((item) => (
                    <Link
                      href="#"
                      className="grid h-10 w-10 place-items-center rounded-md text-cyan-200 no-underline hover:bg-blue-600 hover:text-white"
                      aria-label={item}
                      key={item}
                    >
                      <i className={`pi pi-${item} text-xl leading-none`}></i>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                  Professional portfolio
                </div>
                <h2 className="mt-3 text-4xl font-bold text-white lg:text-5xl">
                  <HeaderContentText
                    sectionKey="about"
                    fallback="AI automation and software engineering for real business work."
                  />
                </h2>
                <div className="my-6 text-lg leading-8 text-slate-300">
                  <HeaderContentText
                    sectionKey="about"
                    field="content"
                    fallback="I work across the software development life cycle, from requirements and interface planning to coding, deployment, maintenance, and production support."
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {capabilityList.map((item) => (
                    <div className="flex gap-3 text-slate-200" key={item}>
                      <CheckCircleIcon className="mt-1 size-5 shrink-0 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="#portfolio"
                    className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-bold text-white no-underline shadow-[0_0_28px_rgba(59,130,246,.45)] hover:bg-blue-500"
                  >
                    My Projects
                  </Link>
                  <PersonalInfoLink
                    field="resume"
                    fallback="/AlminanaEilerBResume.pdf"
                    className="inline-flex items-center rounded-lg border border-cyan-400/50 px-6 py-3 font-bold text-cyan-100 no-underline hover:bg-cyan-400/10"
                  >
                    <ArrowDownTrayIcon className="mr-3 size-6 text-cyan-200" />
                    Download CV
                  </PersonalInfoLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />

      <section className="bg-gray-50 pb-10 lg:pb-32 pt-24 lg:pt-52" id="process">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                Delivery process
              </div>
              <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 mt-3">
                <HeaderContentText
                  sectionKey="process"
                  fallback="A practical process from idea to launch"
                />
              </h2>
              <div className="text-gray-500 text-lg leading-8">
                <p className="mb-4">
                  <HeaderContentText
                    sectionKey="process"
                    field="content"
                    fallback="I start by understanding the client workflow, then design practical screens, dependable data structures, automation points, and code that can be supported after launch."
                  />
                </p>
                <p>
                  The goal is simple: fewer manual steps, cleaner user
                  experiences, stable applications, and systems that are ready
                  for growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {processCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    className={`bg-white p-7 rounded-lg border border-gray-200 group hover:shadow-[0_24px_80px_0_rgba(43,56,76,0.12)] ${
                      index % 2 === 0 ? "lg:translate-y-6" : ""
                    }`}
                    key={card.title}
                  >
                    <div className="w-14 h-14 p-4 rounded-md bg-cyan-50 group-hover:bg-primary-500 mb-6">
                      <Icon className="size-6 text-cyan-700 group-hover:text-white" />
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      {card.title}
                    </div>
                    <p className="text-gray-600 leading-7">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-24 bg-white" id="portfolio">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
              Selected work
            </div>
            <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 mt-3">
              <HeaderContentText sectionKey="portfolio" fallback="Portfolio" />
            </h2>
            <div className="text-gray-500 text-lg leading-8">
              <HeaderContentText
                sectionKey="portfolio"
                field="content"
                fallback="Business systems and client-facing applications, including warehouse management, quotation workflows, websites, and automation-ready tools built for secure daily operations."
              />
            </div>
          </div>
          <Portfolio />
          <div className="mt-12 text-center">
            <Link
              href="#services"
              className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-10 lg:py-24 bg-[linear-gradient(135deg,#ecfeff_0%,#ffffff_45%,#f8fafc_100%)]"
        id="blogs"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
              Technical strengths
            </div>
            <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 mt-3">
              <HeaderContentText sectionKey="blogs" fallback="Knowledge Areas" />
            </h2>
            <div className="text-gray-500 text-lg leading-8">
              <HeaderContentText
                sectionKey="blogs"
                field="content"
                fallback="Practical skills from years of web development, AI-assisted coding, cloud deployment, technical support, and production maintenance."
              />
            </div>
          </div>
          <div className="mt-16">
            <Blog />
          </div>
        </div>
      </section>


      <section className="py-10 lg:py-24 bg-gray-50" id="services">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-20 items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                Services
              </div>
              <h3 className="text-gray-950 text-4xl lg:text-5xl font-semibold mt-3">
                <HeaderContentText sectionKey="services" fallback="What I do" />
              </h3>
              <div className="text-gray-500 text-lg mt-6 leading-8">
                I build, automate, deploy, and maintain web applications for
                clients who need practical business tools, admin portals,
                customer workflows, reporting, and reliable data-driven
                features.
              </div>
              <div className="text-gray-500 text-lg mt-4 leading-8">
                My toolkit includes Next.js, React.js, Node.js, Laravel, PHP,
                MongoDB, MySQL, Firebase, AWS, Vercel, Postman, GitHub, and
                modern AI coding workflows.
              </div>

              <Link
                href="#contact"
                className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline mt-10"
              >
                Discuss a Project
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {serviceCards.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    className="bg-white rounded-lg border border-gray-200 p-7 hover:border-cyan-300 hover:shadow-[0_24px_80px_0_rgba(28,25,25,0.10)]"
                    key={service.title}
                  >
                    <div className="w-12 h-12 rounded-md bg-cyan-50 flex items-center justify-center mb-6">
                      <Icon className="size-6 text-cyan-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <div className="text-gray-600 mt-4 leading-7">
                      {service.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="lg:pt-12 pb-10 lg:pb-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-4 w-fit rounded-full border border-blue-300/25 bg-white/[0.04] px-4 py-2 text-sm font-bold uppercase tracking-wide text-blue-200">
            Resume highlight
          </div>
          <h2 className="text-white font-black text-4xl lg:text-5xl mb-6 text-center">
            Career Summary
          </h2>
          <div className="text-slate-300 text-center text-lg w-full lg:w-1/2 mx-auto leading-8">
            A resume-backed snapshot of web development, web design, technical
            support, telecom engineering, and continuous software maintenance.
          </div>
          <div className="mt-10">
            <Testimonial />
          </div>
        </div>
      </section>

      <section className="container mx-auto" id="contact">
        <div className="p-8 lg:p-20 bg-white rounded-2xl shadow-[0_59px_124px_0_rgba(0,0,0,0.12)] relative z-10 -mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                Contact
              </div>
              <h3 className="text-gray-900 text-4xl font-semibold mt-3">
                Let&apos;s discuss the system you want to build or improve.
              </h3>
              <div className="text-gray-500 text-lg mt-4 mb-6 leading-8">
                Available for AI automation, full-stack web development, cloud
                deployment, API/database work, maintenance, and production
                support.
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 group rounded-lg border border-transparent hover:border-cyan-200 hover:bg-white hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-5 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-cyan-50">
                    <i className="pi pi-map-marker group-hover:text-white text-cyan-700 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Address</div>
                    <div className="text-gray-900 font-medium mt-1">
                      <PersonalInfoText field="address" fallback="Al Qassim, Saudi Arabia" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group rounded-lg border border-transparent hover:border-cyan-200 hover:bg-white hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-5 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-cyan-50">
                    <i className="pi pi-at group-hover:text-white text-cyan-700 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Email</div>
                    <div className="text-gray-900 font-medium mt-1">
                      <PersonalInfoText field="email" fallback="alminanaeilerbutad20@gmail.com" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group rounded-lg border border-transparent hover:border-cyan-200 hover:bg-white hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-5 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-cyan-50">
                    <i className="pi pi-phone group-hover:text-white text-cyan-700 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Phone</div>
                    <div className="text-gray-900 font-medium mt-1">
                      <PersonalInfoText field="contact" fallback="+966 54 768 8972" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mt-8">
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                  aria-label="Facebook"
                >
                  <i className="pi pi-facebook group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                  aria-label="LinkedIn"
                >
                  <i className="pi pi-linkedin group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                  aria-label="Instagram"
                >
                  <i className="pi pi-instagram group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                  aria-label="Twitter"
                >
                  <i className="pi pi-twitter group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="text-gray-900 text-xl font-semibold">
                  Tell me what you want to automate, build, or fix.
                </div>
                <div className="text-gray-500 text-lg mt-3 leading-8">
                  Share the project goal, current problem, preferred timeline,
                  and any existing website or system details.
                </div>
              </div>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
