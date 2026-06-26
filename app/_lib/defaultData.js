export const sectionNames = [
  "home",
  "about",
  "process",
  "portfolio",
  "blogs",
  "services",
  "contact",
];

const homeHeroContent =
  "I am a Web Developer specializing in building high-performance web applications, secure e-commerce systems, and internal enterprise tools using the NERN stack (MongoDB, Express, Next.js, Node.js). Driven by efficiency, I leverage Anthropic's advanced AI models to seamlessly integrate intelligent automation, while optimizing cloud code to build scalable, resilient systems designed for modern digital transformation.";

export const defaultPersonalInfo = {
  logo: "/logo-light.png",
  resume: "",
  name: "Alminana Eiler B.",
  email: "alminanaeilerbutad20@gmail.com",
  contact: "+966 54 768 8972",
  website: "https://alminanaeilerb.vercel.app/",
  address: "Al Qassim, Saudi Arabia",
  facebook: "#",
  linkedin: "#",
  twitter: "#",
  x: "#",
};

export const defaultHeaders = sectionNames.map((name, index) => ({
  key: name,
  title:
    name === "home"
      ? "I Build Smart Business Systems"
      : name.charAt(0).toUpperCase() + name.slice(1),
  content:
    name === "home"
      ? homeHeroContent
      : 
    name === "portfolio"
      ? "Selected work and systems, including the Warehouse Management System and IPLAW Firm Quotation System."
      : `Manage the ${name} section content from the admin dashboard.`,
  order: index + 1,
}));

export const defaultPortfolio = [
  {
    image: "/portfolio/wms.png",
    category: "WAREHOUSE MANAGEMENT",
    title: "Warehouse Management System",
    description:
      "A modern cloud-based solution for inventory, orders, stock tracking, reporting, and warehouse operations, built with Next.js, MongoDB, Render, and Vercel.",
    link: "https://wintercool-inventory-management-fro.vercel.app/dashboard",
    linkLabel: "Preview",
  },
  {
    image: "/portfolio/aipt.png",
    category: "INTELLECTUAL PROPERTY",
    title: "IPLAW Firm Quotation System",
    description:
      "A modern intellectual property management platform for client quotations, trademark, patent, copyright, design, and litigation services, built with Next.js, MongoDB, Render, and Vercel.",
    link: "https://aiptpricesystem.vercel.app/dashboard",
    linkLabel: "Preview",
  },
];

export const defaultBlogs = [
  {
    image: "/blogs/blog-1.jpg",
    category: "Backend",
    title: "Laravel and PHP application development",
    description:
      "Business systems, e-commerce modules, admin tools, and maintainable server-side code.",
    link: "#",
    linkLabel: "Preview",
  },
  {
    image: "/blogs/blog-2.jpg",
    category: "Frontend",
    title: "React.js interface implementation",
    description:
      "Responsive frontends, reusable screens, and production UI work for web applications.",
    link: "#",
    linkLabel: "Preview",
  },
];

export const defaultSkills = [
  { name: "Bootstraps", image: "/skills/bootstrap.svg" },
  { name: "GitHub", image: "/skills/github.svg" },
  { name: "GitBash", image: "/skills/gitbash.svg" },
  { name: "React Native", image: "/skills/react-native.svg" },
  { name: "Laravel", image: "/skills/laravel.svg" },
  { name: "POSTMAN", image: "/skills/postman.svg" },
  { name: "HTML and XML", image: "/skills/html-xml.svg" },
  { name: "Node.js", image: "/skills/nodejs.svg" },
  { name: "CSS/SCSS", image: "/skills/css-scss.svg" },
  { name: "AWS", image: "/skills/aws.svg" },
  { name: "MongoDB", image: "/skills/mongodb.svg" },
  { name: "RENDER", image: "/skills/render.svg" },
  { name: "TAILWIND", image: "/skills/tailwind.svg" },
  { name: "Cloud Code", image: "/skills/cloud-code.svg" },
];

export const defaultTraining = [
  {
    year: "2024",
    course: "AI Automation and Modern Web Development",
    certificate: "Certificate of Completion",
    address: "Online",
  },
  {
    year: "2023",
    course: "Cloud Deployment and API Integration",
    certificate: "Training Certificate",
    address: "Online",
  },
];

export const defaultExperience = [
  {
    year: "2021 - Present",
    company: "AIPAIT",
    position: "Web Developer",
    location: "Saudi Arabia",
    jobDescription:
      "Build and maintain web applications, internal systems, databases, API integrations, and production support workflows.",
  },
  {
    year: "Previous",
    company: "Al-Otaishan Intellectual Property and Technology",
    position: "IT / Developer",
    location: "Saudi Arabia",
    jobDescription:
      "Supported business systems, technical operations, web maintenance, and software improvements for internal teams.",
  },
];

export const defaultTestimonials = [
  {
    image: "",
    text: "Web Developer at AIPAIT since July 2021, building and supporting internet and intranet applications, PHP systems, databases, and modular software products.",
    userName: "AIPAIT",
    userPost: "Website Developer",
    userCompany: "Saudi Arabia",
  },
];

export const defaultClients = [
  { name: "AIPAIT", image: "/clients/google.svg" },
  { name: "Al-Otaishan IP and Technology", image: "/clients/dribbble.svg" },
  { name: "Power Plus", image: "/clients/linkedin.svg" },
  { name: "Udemy", image: "/clients/spotify.svg" },
];
