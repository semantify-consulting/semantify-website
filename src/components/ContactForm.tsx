"use client";

import { useState } from "react";

const budgets = [
  "Under €10k",
  "€10k–€25k",
  "€25k–€60k",
  "€60k+",
  "Not sure",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `New enquiry from ${name || "the website"}`;
    const body = [
      `Name: ${name}`,
      `Organisation: ${org}`,
      `Budget: ${budget || "Not specified"}`,
      "",
      "What you need:",
      need,
    ].join("\n");
    window.location.href = `mailto:hello@semantify.co?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const labelClass =
    "font-body text-sm font-medium text-dark";
  const inputClass =
    "font-body text-[15px] text-dark bg-white border border-[#E8E7E3] rounded-md px-4 py-3 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/15 transition duration-150 ease-snappy";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClass}>
          Name <span className="text-blue">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="org" className={labelClass}>
          Organisation
        </label>
        <input
          id="org"
          type="text"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="need" className={labelClass}>
          What you need <span className="text-blue">*</span>
        </label>
        <textarea
          id="need"
          required
          rows={5}
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="budget" className={labelClass}>
          Budget range
        </label>
        <select
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={inputClass}
        >
          <option value="">Select a range</option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center px-8 py-4 bg-blue rounded-lg text-white font-body text-base font-semibold hover:bg-blue/90 active:scale-[0.98] transition duration-150 ease-snappy mt-2"
      >
        Send enquiry
      </button>
      <p className="font-body text-[13px] text-muted leading-5">
        This opens your email client with the details pre-filled. Prefer email?
        Write to{" "}
        <a href="mailto:hello@semantify.co" className="text-blue hover:underline">
          hello@semantify.co
        </a>
        .
      </p>
    </form>
  );
}
