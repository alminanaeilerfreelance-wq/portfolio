"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "9667688972";
const WHATSAPP_MESSAGE =
  "Hello Alminana, I found your portfolio and would like to discuss a project.";
const MESSENGER_USERNAME = "eilerclavelbutadalminana";

const chatLinks = [
  {
    name: "WhatsApp",
    description: "+966 768 8972",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE
    )}`,
    icon: "pi pi-whatsapp",
    className: "bg-[#25D366] hover:bg-[#1ebe5d]",
  },
  {
    name: "Messenger",
    description: "Facebook chat",
    href: `https://m.me/${MESSENGER_USERNAME}`,
    icon: "pi pi-facebook",
    className: "bg-[#0084FF] hover:bg-[#006fe0]",
  },
];

export default function ChatContactBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div
        className={`mb-4 w-[calc(100vw-3rem)] max-w-[340px] overflow-hidden rounded-2xl border border-blue-300/25 bg-[#061223]/95 text-white shadow-[0_22px_70px_rgba(0,0,0,0.35)] backdrop-blur transition ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
          <div className="flex items-start justify-between border-0 border-b border-solid border-white/10 bg-white/[0.06] p-4">
            <div>
              <div className="text-base font-bold">Chat Widget</div>
              <div className="mt-1 text-sm text-slate-300">
                Message me on WhatsApp or Messenger.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat widget"
              className="grid h-9 w-9 place-items-center rounded-full border border-solid border-white/10 bg-white/10 text-white"
            >
              <i className="pi pi-times text-sm leading-none"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 p-4">
            {chatLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with me on ${link.name}`}
                className={`${link.className} flex items-center gap-3 rounded-xl px-4 py-3 text-white no-underline shadow-[0_12px_30px_rgba(0,0,0,.20)] transition hover:-translate-y-0.5`}
                key={link.name}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <i className={`${link.icon} text-2xl leading-none`}></i>
                </span>
                <span className="text-left">
                  <span className="block text-sm font-semibold leading-5">
                    {link.name}
                  </span>
                  <span className="block text-xs leading-4 text-white/90">
                    {link.description}
                  </span>
                </span>
                <i className="pi pi-arrow-up-right ml-auto text-sm leading-none text-white/80"></i>
              </a>
            ))}
          </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label="Open chat widget"
        className="flex h-16 items-center gap-3 rounded-full border border-solid border-blue-300/40 bg-blue-600 px-5 text-white shadow-[0_0_30px_rgba(59,130,246,.55)] transition hover:-translate-y-0.5 hover:bg-blue-500"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20">
          <i className="pi pi-comments text-2xl leading-none"></i>
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-sm font-bold leading-5">Chat</span>
          <span className="block text-xs leading-4 text-white/85">
            WhatsApp / Messenger
          </span>
        </span>
      </button>
    </div>
  );
}
