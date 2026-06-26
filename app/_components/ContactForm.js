"use client";

import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async () => {
    setLoading(true);
    setStatus("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);

    if (response.ok) {
      setStatus("Message sent successfully.");
      setForm({
        name: "",
        email: "",
        location: "",
        budget: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("Message could not be sent. Please try again.");
    }
  };

  return (
    <>
      <div className="p-fluid flex flex-col gap-2">
        <InputText
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Name*"
        />
        <InputText
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Email*"
        />
        <InputText
          value={form.location}
          onChange={(event) => update("location", event.target.value)}
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Location"
        />
        <div className="flex gap-6">
          <div className="w-1/3">
            <InputText
              value={form.budget}
              onChange={(event) => update("budget", event.target.value)}
              className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
              placeholder="Budget*"
            />
          </div>
          <div className="w-2/3">
            <InputText
              value={form.subject}
              onChange={(event) => update("subject", event.target.value)}
              className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
              placeholder="Subject*"
            />
          </div>
        </div>
        <InputTextarea
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Message*"
          rows={5}
          cols={30}
        />
      </div>
      <Button
        onClick={submit}
        className="bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 mt-9"
        label={loading ? "Sending..." : "Submit"}
        icon="pi pi-send"
        iconPos="right"
      />
      {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
    </>
  );
}
