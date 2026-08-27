import React, { useState } from "react";
import { motion } from "framer-motion";
import BlueprintGrid from "../components/BlueprintGrid";
import MagneticButton from "../components/MagneticButton";
import { WordReveal, FadeUpText } from "../components/AnimatedText";

function FloatingInput({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative pt-5">
      <label
        htmlFor={id}
        className={`absolute left-0 font-display font-extrabold tracking-widest transition-all duration-200 pointer-events-none ${
          active
            ? "top-0 text-[8px] text-accent-gold"
            : "top-5 text-[10px] text-text-secondary"
        } uppercase`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder={active ? placeholder : ""}
        className="w-full bg-transparent border-b border-black/15 py-2 text-sm text-text-primary focus:border-accent-gold outline-none transition-colors duration-300"
      />
    </div>
  );
}

function FloatingSelect({
  label,
  id,
  name,
  value,
  onChange,
  required,
  options,
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative pt-5">
      <label
        htmlFor={id}
        className={`absolute left-0 font-display font-extrabold tracking-widest transition-all duration-200 pointer-events-none ${
          active
            ? "top-0 text-[8px] text-accent-gold"
            : "top-5 text-[10px] text-text-secondary"
        } uppercase`}
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="w-full bg-transparent border-b border-black/15 py-2 text-sm text-text-primary focus:border-accent-gold outline-none transition-colors duration-300 cursor-pointer"
      >
        <option value="" disabled />
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function FloatingTextarea({
  label,
  id,
  name,
  value,
  onChange,
  required,
  rows = 4,
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative pt-5">
      <label
        htmlFor={id}
        className={`absolute left-0 font-display font-extrabold tracking-widest transition-all duration-200 pointer-events-none ${
          active
            ? "top-0 text-[8px] text-accent-gold"
            : "top-5 text-[10px] text-text-secondary"
        } uppercase`}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={rows}
        placeholder={active ? "Describe your project scope" : ""}
        className="w-full bg-transparent border-b border-black/15 py-2 text-sm text-text-primary focus:border-accent-gold outline-none transition-colors duration-300 resize-none"
      />
    </div>
  );
}

const requirementOptions = [
  { value: "building", label: "Building Industry" },
  { value: "mining", label: "Mining & Crushing" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "excavation", label: "Excavation" },
];

const contactMeta = [
  { label: "Corporate Office", value: "xxxxxxx" },
  { label: "Direct Mail", value: "info@3circles.ae" },
  { label: "Hotline", value: "+971 4 333 3333" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you. A representative from 3 Circles will reach out to you shortly.",
    );
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      requirement: "",
      message: "",
    });
  };

  return (
    <section className="relative min-h-screen bg-bg-primary pt-32 md:pt-40 pb-24 overflow-hidden">
      <BlueprintGrid />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <FadeUpText>
              <span className="font-display text-[9px] font-extrabold tracking-[0.35em] text-accent-gold uppercase mb-5 block">
                Inquiries
              </span>
            </FadeUpText>
            <h1 className="font-display text-4xl md:text-5xl xl:text-[56px] font-extrabold leading-[1.05] tracking-tight text-text-primary uppercase mb-12">
              <WordReveal text="Start A" delay={0} />
              <br />
              <WordReveal text="Conversation" delay={0.05} />
            </h1>

            <div className="flex flex-col gap-0 mb-12">
              {contactMeta.map((item, i) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1.5 py-6 border-b border-border-color first:border-t first:border-border-color"
                >
                  <span className="font-display text-[9px] font-extrabold tracking-widest text-text-secondary uppercase">
                    {item.label}
                  </span>
                  <span className="font-body text-base font-medium text-text-primary">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <FloatingInput
                label="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
              <FloatingInput
                label="Company"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <FloatingInput
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
              <FloatingInput
                label="Phone"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
              />
            </div>
            <FloatingSelect
              label="Project Requirement"
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              options={requirementOptions}
            />
            <FloatingTextarea
              label="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <div>
              <MagneticButton
                type="submit"
                className="font-display text-[10px] font-extrabold tracking-[0.2em] py-4 px-10 bg-text-primary text-white border border-text-primary rounded-full hover:bg-accent-gold hover:border-accent-gold hover:text-text-primary transition-all duration-300"
              >
                START A CONVERSATION
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
