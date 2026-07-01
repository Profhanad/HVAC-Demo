"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Siren,
  Snowflake,
  Flame,
  Wind,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Clock,
  ThumbsUp,
  Headset,
} from "lucide-react";
import { FadeIn } from "@/components/motion";
import { serviceImages } from "@/lib/images";

/* ─── Data ─── */

const trustBadges = [
  { icon: Shield, title: "Licensed & Insured", description: "Fully licensed, insured, and background-checked." },
  { icon: Clock, title: "Upfront Pricing", description: "No surprises. Honest pricing you can trust." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", description: "We're not happy until you're 100% satisfied." },
  { icon: Headset, title: "24/7 Emergency Service", description: "We're here when you need us most." },
];

const coolingServices = [
  "Air Conditioning Repair",
  "Air Conditioning Installation",
  "Ductless Mini-Splits",
  "AC Maintenance",
  "Duct Cleaning",
  "Smart Thermostats",
  "Seasonal Tune-Ups",
  "Refrigerant Recharge",
];

const heatingServices = [
  "Furnace Repair",
  "Furnace Installation",
  "Heating Installation",
  "Heat Pump Services",
  "Thermostat Installation",
  "Emergency Heating Repair",
];

const maintenanceServices = [
  "HVAC Maintenance Plans",
  "Indoor Air Quality",
  "Seasonal Tune-Ups",
  "Duct Cleaning & Sealing",
  "Humidifiers & Dehumidifiers",
  "Emergency HVAC Service",
];

type ServiceTab = "all" | "cooling" | "heating" | "maintenance";

export function ServicesContent() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("all");

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <header className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20">
            <div className="max-w-2xl">
              <FadeIn delay={0.1}>
                <span className="inline-block px-3 py-1 mb-6 bg-[#f97316]/10 text-[#f97316] text-xs font-bold uppercase tracking-[0.15em] rounded-full">
                  Our Services
                </span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="text-[40px] md:text-[64px] lg:text-[72px] font-extrabold text-primary leading-[1.1] tracking-[-0.04em] mb-8">
                  Complete Home
                  <br />
                  Comfort Solutions
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
                  Heating and air conditioning services you can count on. One
                  trusted team for your entire home.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#0a192f] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#f97316] transition-all duration-300 flex items-center gap-3 group"
                  >
                    Request Service
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+18002797825"
                    className="text-[#f97316] font-bold text-base flex items-center gap-2 hover:gap-3 transition-all px-4 py-4"
                  >
                    24/7 Emergency Service <ArrowRight size={16} />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Trust badges — desktop only */}
            <FadeIn delay={0.4} className="hidden lg:block shrink-0">
              <div className="grid grid-cols-2 gap-6 max-w-md">
                {trustBadges.map((badge) => (
                  <div key={badge.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
                      <badge.icon size={18} className="text-on-surface-variant" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary leading-tight">{badge.title}</p>
                      <p className="text-xs text-on-surface-variant leading-snug mt-0.5">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* ═══════════ SERVICE TABS ═══════════ */}
      <section className="border-b border-outline-variant bg-white sticky top-[60px] md:top-[68px] z-30">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="flex gap-1 overflow-x-auto py-3 -mb-px">
              {([
                { key: "all" as const, label: "All Services", icon: CheckCircle },
                { key: "cooling" as const, label: "Cooling", icon: Snowflake },
                { key: "heating" as const, label: "Heating", icon: Flame },
                { key: "maintenance" as const, label: "Maintenance & Air Quality", icon: Wind },
              ]).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    activeTab === tab.key
                      ? "bg-[#0a192f] text-white"
                      : "text-on-surface-variant hover:bg-surface-container-low"
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ COOLING SECTION ═══════════ */}
      {(activeTab === "all" || activeTab === "cooling") && (
        <section className="py-20 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Text side */}
              <FadeIn className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Snowflake size={22} className="text-secondary" />
                  </div>
                  <div className="h-px flex-1 bg-outline-variant max-w-[60px]" />
                </div>
                <h2 className="text-[36px] md:text-[48px] font-extrabold text-primary leading-[1.15] tracking-[-0.03em] mb-4 uppercase">
                  Cooling
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
                  Stay cool and comfortable with professional AC solutions.
                  From repairs to full system installs, we keep your home at
                  the perfect temperature.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-12">
                  {coolingServices.map((s) => (
                    <Link
                      key={s}
                      href="/contact"
                      className="flex items-center justify-between py-2.5 border-b border-outline-variant/50 group"
                    >
                      <span className="flex items-center gap-3 text-[15px] text-on-surface group-hover:text-primary transition-colors">
                        <CheckCircle size={16} className="text-[#f97316] shrink-0" />
                        {s}
                      </span>
                      <ArrowRight size={14} className="text-on-surface-variant opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#0a192f] text-white px-8 py-4 rounded-full font-bold hover:bg-[#f97316] transition-all duration-300 group"
                >
                  Explore Cooling Services
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>

              {/* Image side */}
              <FadeIn delay={0.2} className="lg:w-1/2 w-full">
                <div className="relative">
                  <div className="overflow-hidden rounded-[24px] aspect-[4/5] lg:aspect-[3/4] relative group">
                    <Image
                      src={serviceImages.cooling.src}
                      alt={serviceImages.cooling.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-4 md:left-auto md:-bottom-6 md:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-outline-variant/30">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Snowflake size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Stay Cool All Summer</p>
                      <p className="text-xs text-on-surface-variant">Reliable cooling solutions</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ HEATING SECTION ═══════════ */}
      {(activeTab === "all" || activeTab === "heating") && (
        <section className={`py-20 md:py-32 ${activeTab === "all" ? "bg-surface-container-low" : ""}`}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-start">
              {/* Text side */}
              <FadeIn className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#f97316]/10 flex items-center justify-center">
                    <Flame size={22} className="text-[#f97316]" />
                  </div>
                  <div className="h-px flex-1 bg-outline-variant max-w-[60px]" />
                </div>
                <h2 className="text-[36px] md:text-[48px] font-extrabold text-primary leading-[1.15] tracking-[-0.03em] mb-4 uppercase">
                  Heating
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
                  Keep your home warm and comfortable all season. From furnace
                  repairs to complete system installations, we&apos;ve got you
                  covered.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-12">
                  {heatingServices.map((s) => (
                    <Link
                      key={s}
                      href="/contact"
                      className="flex items-center justify-between py-2.5 border-b border-outline-variant/50 group"
                    >
                      <span className="flex items-center gap-3 text-[15px] text-on-surface group-hover:text-primary transition-colors">
                        <CheckCircle size={16} className="text-[#f97316] shrink-0" />
                        {s}
                      </span>
                      <ArrowRight size={14} className="text-on-surface-variant opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#0a192f] text-white px-8 py-4 rounded-full font-bold hover:bg-[#f97316] transition-all duration-300 group"
                >
                  Explore Heating Services
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>

              {/* Image side */}
              <FadeIn delay={0.2} className="lg:w-1/2 w-full">
                <div className="relative">
                  <div className="overflow-hidden rounded-[24px] aspect-[4/5] lg:aspect-[3/4] relative group">
                    <Image
                      src={serviceImages.heating.src}
                      alt={serviceImages.heating.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-outline-variant/30">
                    <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center">
                      <Flame size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Trusted Heating Experts</p>
                      <p className="text-xs text-on-surface-variant">Licensed &amp; certified technicians</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ MAINTENANCE & AIR QUALITY SECTION ═══════════ */}
      {(activeTab === "all" || activeTab === "maintenance") && (
        <section className="py-20 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Text side */}
              <FadeIn className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0a192f]/5 flex items-center justify-center">
                    <Wind size={22} className="text-[#0a192f]" />
                  </div>
                  <div className="h-px flex-1 bg-outline-variant max-w-[60px]" />
                </div>
                <h2 className="text-[36px] md:text-[48px] font-extrabold text-primary leading-[1.15] tracking-[-0.03em] mb-4 uppercase">
                  Maintenance &amp; Air Quality
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
                  Regular maintenance and cleaner indoor air keep your system
                  efficient and your home healthier, season after season.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-12">
                  {maintenanceServices.map((s) => (
                    <Link
                      key={s}
                      href="/contact"
                      className="flex items-center justify-between py-2.5 border-b border-outline-variant/50 group"
                    >
                      <span className="flex items-center gap-3 text-[15px] text-on-surface group-hover:text-primary transition-colors">
                        <CheckCircle size={16} className="text-[#f97316] shrink-0" />
                        {s}
                      </span>
                      <ArrowRight size={14} className="text-on-surface-variant opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#0a192f] text-white px-8 py-4 rounded-full font-bold hover:bg-[#f97316] transition-all duration-300 group"
                >
                  Explore Maintenance Plans
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>

              {/* Image side */}
              <FadeIn delay={0.2} className="lg:w-1/2 w-full">
                <div className="relative">
                  <div className="overflow-hidden rounded-[24px] aspect-[4/5] lg:aspect-[3/4] relative group">
                    <Image
                      src={serviceImages.maintenance.src}
                      alt={serviceImages.maintenance.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-4 md:left-auto md:-bottom-6 md:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-outline-variant/30">
                    <div className="w-10 h-10 rounded-full bg-[#0a192f] flex items-center justify-center">
                      <Wind size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Cleaner Air, Lower Bills</p>
                      <p className="text-xs text-on-surface-variant">Maintenance plans &amp; IAQ upgrades</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ EMERGENCY BANNER ═══════════ */}
      <section className="relative bg-[#0a192f] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={serviceImages.emergency.src}
            alt={serviceImages.emergency.alt}
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/95 to-[#0a192f]/70" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20 relative z-10">
          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center lg:text-left">
                <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                  <Siren size={20} className="text-[#f97316]" />
                  <span className="text-xs font-bold text-[#f97316] uppercase tracking-[0.15em]">
                    24/7 Emergency Service
                  </span>
                </div>
                <h2 className="text-[32px] md:text-[40px] font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-4">
                  HVAC Emergency?
                </h2>
                <p className="text-base text-white/60 leading-relaxed mb-8">
                  No heat, no AC, strange smells, or a system that just won&apos;t
                  turn on — our emergency team is always on call. Fast
                  response, transparent pricing.
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {["No Heat", "AC Failure", "Furnace Failure", "Strange Smells", "System Won't Start"].map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <a
                  href="tel:+18002797825"
                  className="bg-[#f97316] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#0a192f] transition-all duration-300 flex items-center gap-3 shadow-xl"
                >
                  <Phone size={20} />
                  1-800-CRYSTAL
                </a>
                <span className="text-white/40 text-sm">Available 24/7</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 mb-6 bg-[#f97316]/10 text-[#f97316] text-xs font-bold uppercase tracking-[0.15em] rounded-full">
                One Team, Complete Home Comfort
              </span>
              <h2 className="text-[32px] md:text-[48px] font-extrabold text-primary leading-[1.15] tracking-[-0.03em] mb-6">
                Need Service? We&apos;re Here to Help.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl mx-auto">
                From emergency repairs to system installations, Crystal
                Heating &amp; Cooling is ready to keep your home comfortable
                year-round.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#f97316] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0a192f] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Request Service Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+18002797825"
                  className="border-2 border-[#0a192f] text-[#0a192f] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0a192f] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
