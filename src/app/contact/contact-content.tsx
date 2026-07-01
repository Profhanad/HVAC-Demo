"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Clock, MapPin } from "lucide-react";
import { contactImages } from "@/lib/images";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export function ContactContent() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
      setTimeout(() => setFormState("idle"), 2000);
    }, 1000);
  }

  return (
    <div className="pt-24 pb-20 px-6 max-w-lg md:max-w-[1280px] mx-auto">
      {/* ═══════════ HERO ═══════════ */}
      <section className="mb-12">
        <FadeIn delay={0.1}>
          <span className="inline-block px-3 py-1 bg-on-tertiary-container/10 text-on-tertiary-container rounded-full text-[10px] font-bold tracking-[0.1em] uppercase mb-4">
            ALWAYS AVAILABLE
          </span>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="text-[40px] md:text-[72px] font-bold md:font-extrabold text-primary leading-tight tracking-[-0.02em] md:tracking-[-0.04em] mb-4">
            How can we help you today?
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Professional heating and air conditioning services for
            residential and commercial properties. Reach out for expert care.
          </p>
        </FadeIn>
      </section>

      <div className="md:grid md:grid-cols-2 md:gap-12">
        {/* ═══════════ LEFT COLUMN ═══════════ */}
        <div>
          {/* Emergency Quick-Dial */}
          <FadeIn delay={0.1}>
            <section className="mb-4">
              <a
                href="tel:+18002797825"
                className="block bg-primary p-8 rounded-[24px] relative overflow-hidden group"
              >
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <Phone
                    size={48}
                    className="text-white mb-4"
                  />
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    24/7 Emergency Dial
                  </h2>
                  <p className="text-base text-white/70 mb-6">
                    Immediate dispatch for heating and cooling emergencies
                  </p>
                  <div className="w-full bg-on-tertiary-container py-4 rounded-full flex items-center justify-center gap-3">
                    <Phone size={18} className="text-white" />
                    <span className="text-white font-bold tracking-widest">
                      1-800-CRYSTAL
                    </span>
                  </div>
                </div>
              </a>
            </section>
          </FadeIn>

          {/* Business Hours + Map */}
          <StaggerContainer className="grid grid-cols-1 gap-4 mb-4" staggerDelay={0.1}>
            {/* Business Hours */}
            <StaggerItem>
              <div className="bg-white border border-outline-variant shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-6 rounded-[24px]">
                <div className="flex items-center gap-3 mb-4 text-on-tertiary-container">
                  <Clock size={20} />
                  <h3 className="text-xs font-bold uppercase tracking-[0.1em]">
                    Operational Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="text-on-surface-variant">Mon – Fri</span>
                    <span className="font-bold text-primary">
                      7:00 AM – 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-base border-t border-outline-variant pt-3">
                    <span className="text-on-surface-variant">Sat – Sun</span>
                    <span className="font-bold text-primary text-right">
                      Emergency Only
                      <br />
                      <span className="text-xs font-normal text-on-surface-variant">
                        Dispatch Surcharge Applies
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Map / Location */}
            <StaggerItem>
              <div className="bg-white border border-outline-variant shadow-[0_4px_20px_rgba(10,25,47,0.04)] rounded-[24px] overflow-hidden h-64">
                <div className="h-full relative bg-surface-container">
                  <Image
                    src={contactImages.map.src}
                    alt={contactImages.map.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/5" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-outline-variant/30">
                    <p className="text-[10px] font-bold text-on-tertiary-container tracking-[0.1em] uppercase mb-1">
                      HEADQUARTERS
                    </p>
                    <p className="text-base font-bold text-primary flex items-center gap-2">
                      <MapPin size={14} className="shrink-0" />
                      482 Comfort Drive, Crystal Valley, CA
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* ═══════════ RIGHT COLUMN / FORM ═══════════ */}
        <div>
          <FadeIn delay={0.2}>
            <section className="bg-white border border-outline-variant shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-8 rounded-[24px] mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Request Service
              </h3>
              <p className="text-base text-on-surface-variant mb-8">
                Quick response guaranteed within 2 hours.
              </p>
              <form className="space-y-6" onSubmit={handleSubmit} aria-label="Request service form">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold tracking-[0.1em] mb-2 text-on-surface-variant uppercase">
                    FULL NAME
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Julianne Sterling"
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 text-base transition-all outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold tracking-[0.1em] mb-2 text-on-surface-variant uppercase">
                    PHONE NUMBER
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 text-base transition-all outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-xs font-bold tracking-[0.1em] mb-2 text-on-surface-variant uppercase">
                    SERVICE TYPE
                  </label>
                  <select id="serviceType" className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 text-base transition-all outline-none">
                    <option>Air Conditioning Repair</option>
                    <option>Furnace Repair</option>
                    <option>Heating Installation</option>
                    <option>Air Conditioning Installation</option>
                    <option>HVAC Maintenance</option>
                    <option>Indoor Air Quality</option>
                    <option>Emergency HVAC Service</option>
                    <option>Commercial Projects</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className={`w-full py-5 rounded-full text-2xl font-semibold shadow-lg transition-colors ${
                    formState === "sent"
                      ? "bg-green-600 text-white"
                      : "bg-primary text-on-primary hover:bg-secondary"
                  }`}
                >
                  {formState === "idle" && "Submit Request"}
                  {formState === "sending" && "Sending..."}
                  {formState === "sent" && "Request Sent!"}
                </button>
              </form>
            </section>
          </FadeIn>
        </div>
      </div>

    </div>
  );
}
