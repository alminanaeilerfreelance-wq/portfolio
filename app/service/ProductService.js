export const ProductService = {
  getProductsData() {
    return [
      {
        id: "1000",
        name: "Laravel and PHP application development",
        description:
          "Business systems, e-commerce modules, admin tools, and maintainable server-side code.",
        image: "blog-1.jpg",
        category: "Backend",
      },
      {
        id: "1001",
        name: "React.js interface implementation",
        description:
          "Responsive frontends, reusable screens, and production UI work for web applications.",
        image: "blog-2.jpg",
        category: "Frontend",
      },
      {
        id: "1002",
        name: "API design and integration",
        description:
          "REST APIs, Postman testing, JSON/Ajax workflows, and application connectivity.",
        image: "blog-3.jpg",
        category: "API",
      },
      {
        id: "1003",
        name: "Database and cloud tooling",
        description:
          "MySQL, MongoDB, Firebase, AWS, and data structures for web applications.",
        image: "blog-4.jpg",
        category: "Data",
      },
      {
        id: "1004",
        name: "Website maintenance and support",
        description:
          "Debugging, performance fixes, upgrades, and long-term production support.",
        image: "blog-1.jpg",
        category: "Maintenance",
      },
      {
        id: "1005",
        name: "Technical support foundation",
        description:
          "Windows, Mac, LAN/WAN, software, hardware, and end-user troubleshooting experience.",
        image: "blog-2.jpg",
        category: "Support",
      },
      {
        id: "1006",
        name: "HTML, CSS, and SCSS layouts",
        description:
          "Cross-browser, standards-compliant layouts and polished screen implementation.",
        image: "blog-3.jpg",
        category: "UI",
      },
      {
        id: "1007",
        name: "GitHub and Git Bash workflow",
        description:
          "Version control, project organization, and collaborative development habits.",
        image: "blog-4.jpg",
        category: "Tools",
      },
      {
        id: "1008",
        name: "E-commerce and admin workflows",
        description:
          "Object-oriented software for catalog, order, admin, and data management features.",
        image: "blog-1.jpg",
        category: "E-commerce",
      },
      {
        id: "1009",
        name: "Production deployment support",
        description:
          "Testing, deployment, monitoring, fixes, and enhancements for release cycles.",
        image: "blog-2.jpg",
        category: "Deployment",
      },
    ];
  },

  getClientsData() {
    return [
      {
        id: "1",
        name: "AIPAIT",
        image: "google.svg",
      },
      {
        id: "2",
        name: "Al-Otaishan IP and Technology",
        image: "dribbble.svg",
      },
      {
        id: "3",
        name: "Power Plus",
        image: "linkedin.svg",
      },
      {
        id: "4",
        name: "Philippine Long Distance Telephone Company",
        image: "amazon.svg",
      },
      {
        id: "5",
        name: "TESDA",
        image: "medium.svg",
      },
      {
        id: "6",
        name: "Udemy",
        image: "spotify.svg",
      },
    ];
  },

  getTestimonialData() {
    return [
      {
        id: "1",
        text: "Web Developer at AIPAIT since July 2021, building and supporting internet and intranet applications, PHP systems, databases, and modular software products.",
        userName: "AIPAIT",
        userPost: "Website Developer",
        userCompany: "Saudi Arabia",
      },
      {
        id: "2",
        text: "Web Designer at Al-Otaishan Intellectual Property and Technology from July 2019 to July 2021, focused on CSS layouts, HTML interfaces, Photoshop templates, and website maintenance.",
        userName: "Al-Otaishan IP and Technology",
        userPost: "Web Designer",
        userCompany: "Al Qassim",
      },
      {
        id: "3",
        text: "Earlier technical support and telecom engineering roles built a strong troubleshooting foundation across operating systems, networks, hardware, and user support.",
        userName: "Power Plus and PLDT",
        userPost: "Technical Support / Telecom Engineer",
        userCompany: "Philippines",
      },
    ];
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },
  getClientsHome() {
    return Promise.resolve(this.getClientsData().slice(0, 6));
  },
  getTestimonials() {
    return Promise.resolve(this.getTestimonialData().slice(0, 3));
  },
};
