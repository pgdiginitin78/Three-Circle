import React, { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import { WordReveal, FadeUpText } from "../components/AnimatedText";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ArrowRight,
} from "../components/Icons";

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
    <div className="relative pt-4">
      <label
        htmlFor={id}
        className={`absolute left-0 font-display font-extrabold tracking-widest transition-all duration-200 pointer-events-none ${
          active
            ? "top-0 text-[8px] 2xl:text-[12px] text-accent-gold"
            : "top-4 text-[9px] 2xl:text-[12px] text-text-secondary"
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
        className="w-full bg-transparent border-b border-black/15 py-1.5 text-xs sm:text-sm text-text-primary focus:border-accent-gold outline-none transition-colors duration-300"
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
    <div className="relative pt-4">
      <label
        htmlFor={id}
        className={`absolute left-0 font-display font-extrabold tracking-widest transition-all duration-200 pointer-events-none ${
          active
            ? "top-0 text-[8px] 2xl:text-[12px] text-accent-gold"
            : "top-4 text-[9px] 2xl:text-[12px] text-text-secondary"
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
        className="w-full bg-transparent border-b border-black/15 py-1.5 text-xs sm:text-sm text-text-primary focus:border-accent-gold outline-none transition-colors duration-300 cursor-pointer"
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
  rows = 3,
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative pt-4">
      <label
        htmlFor={id}
        className={`absolute left-0 font-display font-extrabold tracking-widest transition-all duration-200 pointer-events-none ${
          active
            ? "top-0 text-[8px] 2xl:text-[12px] text-accent-gold"
            : "top-4 text-[9px] 2xl:text-[12px] text-text-secondary"
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
        className="w-full bg-transparent border-b border-black/15 py-1.5 text-xs sm:text-sm text-text-primary focus:border-accent-gold outline-none transition-colors duration-300 resize-none"
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

const metaItems = [
  { icon: MapPinIcon, label: "Headquarters", value: "xxxxxxx" },
  { icon: MailIcon, label: "Email Enquiry", value: "info@3circles.ae" },
  { icon: PhoneIcon, label: "Phone Call", value: "+971 4 333 3333" },
];

export default function Contact() {
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
    <section
      id="contact"
      className="relative py-14 md:py-20 bg-bg-secondary border-b border-border-color overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div>
            <FadeUpText>
              <span className="font-display text-[9px] font-extrabold tracking-[0.35em] text-accent-gold uppercase block mb-3">
                Get In Touch
              </span>
            </FadeUpText>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-text-primary uppercase mb-8">
              <WordReveal text="Let's Build" delay={0} />
              <br />
              <WordReveal text="What's Next." delay={0.06} />
            </h2>

            <FadeUpText delay={0.15}>
              <div className="flex flex-col gap-6">
                {metaItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 pb-5 border-b border-border-color last:border-b-0 last:pb-0"
                    >
                      <div className="w-8 h-8 rounded-full bg-black/[0.03] border border-black/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-accent-gold" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-[8px] 2xl:text-[12px] font-extrabold tracking-[0.2em] text-text-secondary uppercase">
                          {item.label}
                        </span>
                        <span className="font-body text-xs sm:text-sm font-medium text-text-primary">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeUpText>
          </div>

          <motion.form
            className="flex flex-col gap-7"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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

            <div className="pt-2">
              <MagneticButton
                type="submit"
                className="group font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] py-3.5 px-8 bg-text-primary text-white border border-text-primary rounded-full hover:bg-accent-gold hover:border-accent-gold hover:text-text-primary transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
