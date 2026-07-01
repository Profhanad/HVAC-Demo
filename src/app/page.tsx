"use client";

import Image from "next/image";
import Link from "next/link";
import { heroImage, featuredProjectImage, aboutImages } from "@/lib/images";
import {
  ArrowRight,
  Snowflake,
  Flame,
  Wind,
  Gauge,
  AlertTriangle,
  Siren,
  CheckCircle,
  Star,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/motion";
import { Avatar, AvatarStack } from "@/components/avatar";

/* ─── Data ─── */
const trustMetrics = [
  { num: 20, suffix: "+", label: "Years Experience" },
  { num: 15, suffix: "k+", label: "Systems Serviced" },
  { num: 4.9, suffix: "/5", label: "Average Rating", decimal: true },
  { num: 24, suffix: "/7", label: "Emergency Service" },
];

const problems = [
  {
    icon: Snowflake,
    title: "AC Not Cooling",
    description:
      "Central air repair, refrigerant service, and compressor diagnostics.",
    cta: "Cool Down",
  },
  {
    icon: Flame,
    title: "No Heat",
    description:
      "Furnace repair, heat pump service, and full heating system replacement.",
    cta: "Warm Up",
  },
  {
    icon: Wind,
    title: "Poor Air Quality",
    description: "Air purification, filtration upgrades, and duct cleaning.",
    cta: "Breathe Easy",
  },
  {
    icon: AlertTriangle,
    title: "Strange Noises or Smells",
    description:
      "Fast diagnostics to catch small issues before they become expensive ones.",
    cta: "Get Diagnosed",
  },
  {
    icon: Gauge,
    title: "High Energy Bills",
    description:
      "Efficiency tune-ups and system upgrades that lower your monthly costs.",
    cta: "Save Energy",
  },
];

const projectChecklist = [
  "High-Efficiency Equipment",
  "Clean, Code-Compliant Installation",
  "Full System Performance Test",
];

const testimonials = [
  {
    quote:
      "Our AC went out during the hottest week of the year. Crystal had a technician out same-day and fixed it fast — professional, honest, and reasonably priced.",
    name: "Rachel Torres",
    role: "Homeowner, Westfield",
  },
  {
    quote:
      "Our furnace died in the middle of January. Crystal had a tech at our door within two hours and the whole system replaced the next day. Lifesavers.",
    name: "James Mitchell",
    role: "Homeowner, Cedar Hills",
  },
  {
    quote:
      "Transparent pricing, professional crew, and a flawless heating installation. They finished on schedule and left the workspace spotless.",
    name: "David Chen",
    role: "Local Business Owner",
  },
];

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <header className="relative flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <FadeIn delay={0.1}>
              <h1 className="text-[48px] md:text-[72px] font-extrabold text-[#0a192f] leading-[1.1] tracking-[-0.04em] mb-8">
                Heating. Cooling.
                <br />
                Done Right.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                Professional heating and air conditioning services for homes
                and businesses. Licensed, insured, and committed to getting
                the job done right the first time.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/contact"
                  className="bg-[#0a192f] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#f97316] transition-all duration-300 flex items-center gap-3 group"
                >
                  Get a Free Estimate
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <div className="flex items-center gap-4 py-5">
                  <AvatarStack count={3} />
                  <span className="text-sm font-semibold text-[#0a192f]">
                    Trusted by 500+ Homeowners
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="lg:col-span-5 relative h-[500px] lg:h-[700px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ═══════════ TRUST METRICS ═══════════ */}
      <section className="bg-surface-container-low py-12">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustMetrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 0.1}>
              <div
                className={`space-y-1 ${i > 0 ? "md:border-l md:border-outline-variant" : ""}`}
              >
                <div className="text-[40px] font-bold text-[#0a192f] leading-[1.2] tracking-[-0.02em]">
                  {metric.decimal ? (
                    <>{metric.num}{metric.suffix}</>
                  ) : (
                    <><AnimatedCounter value={metric.num} />{metric.suffix}</>
                  )}
                </div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.1em]">
                  {metric.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════ PROBLEM SELECTOR ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-[#0a192f] leading-[1.2] tracking-[-0.02em] mb-4">
              What can we help you with today?
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Select a category for immediate assistance or to schedule a
              diagnostic consultation.
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            staggerDelay={0.1}
          >
            {problems.map((p) => (
              <StaggerItem key={p.title}>
                <Link href="/services" className="block bg-white p-8 rounded-[24px] border border-outline-variant flex flex-col items-center text-center group shadow-[0_4px_20px_rgba(10,25,47,0.04)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
                  <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                    <p.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-6">
                    {p.description}
                  </p>
                  <span className="mt-auto text-[#0a192f] font-bold flex items-center gap-2 group-hover:text-[#f97316] transition-colors">
                    {p.cta} <ArrowRight size={16} />
                  </span>
                </Link>
              </StaggerItem>
            ))}

            {/* Emergency Card - Dark variant */}
            <StaggerItem>
              <a href="tel:+18002797825" className="block bg-[#0a192f] p-8 rounded-[24px] border border-[#0a192f] flex flex-col items-center text-center group shadow-xl transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.15)]">
                <div className="w-16 h-16 rounded-full bg-[#f97316] flex items-center justify-center mb-6">
                  <Siren size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Emergencies
                </h3>
                <p className="text-sm text-white/70 mb-6">
                  Rapid response for heating and cooling emergencies, day or
                  night.
                </p>
                <span className="mt-auto text-[#f97316] font-bold flex items-center gap-2">
                  Call Now <ArrowRight size={16} />
                </span>
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ FEATURED PROJECT ═══════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="lg:w-3/5 relative group cursor-pointer">
              <div className="overflow-hidden rounded-2xl aspect-[16/9] shadow-2xl">
                <Image
                  src={featuredProjectImage.src}
                  alt={featuredProjectImage.alt}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="lg:w-2/5">
              <div className="text-xs font-bold text-[#f97316] uppercase tracking-[0.2em] mb-4">
                Featured Project
              </div>
              <h2 className="text-[40px] font-bold text-[#0a192f] leading-[1.2] tracking-[-0.02em] mb-6">
                Central AC Installation
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                A complete central air conditioning replacement for a growing
                family. We sized the new high-efficiency system to the home,
                installed it cleanly, and delivered a turnkey solution — on
                time and on budget.
              </p>
              <ul className="space-y-4 mb-10">
                {projectChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#0a192f] font-semibold"
                  >
                    <CheckCircle size={20} className="text-[#f97316]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#0a192f] font-bold border-b-2 border-[#f97316] pb-1 hover:gap-4 transition-all"
              >
                View All Projects
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section className="py-16 md:py-24 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl translate-y-6">
                <Image
                  src={aboutImages.technician.src}
                  alt={aboutImages.technician.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={aboutImages.comfort.src}
                  alt={aboutImages.comfort.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="lg:w-1/2">
              <div className="text-xs font-bold text-[#f97316] uppercase tracking-[0.2em] mb-4">
                About Crystal Heating &amp; Cooling
              </div>
              <h2 className="text-[40px] font-bold text-[#0a192f] leading-[1.2] tracking-[-0.02em] mb-6">
                Honest technicians. Reliable comfort.
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                For over 20 years, Crystal Heating &amp; Cooling has kept
                homes and businesses comfortable year-round. Our licensed
                technicians show up on time, explain every recommendation in
                plain language, and stand behind every repair, installation,
                and maintenance visit we complete.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <ShieldCheck size={24} className="text-[#f97316]" />
                  <p className="text-sm font-bold text-[#0a192f]">Licensed &amp; Insured</p>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <Users size={24} className="text-[#f97316]" />
                  <p className="text-sm font-bold text-[#0a192f]">Residential &amp; Commercial</p>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <Wrench size={24} className="text-[#f97316]" />
                  <p className="text-sm font-bold text-[#0a192f]">Heating &amp; Cooling Experts</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-[#0a192f] leading-[1.2] tracking-[-0.02em] mb-4">
              What Our Customers Say
            </h2>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            staggerDelay={0.15}
          >
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="p-10 bg-white rounded-2xl border border-outline-variant flex flex-col transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
                  <div className="flex gap-1 text-[#f97316] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="text-base text-on-surface mb-8 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-4">
                    <Avatar name={t.name} size="md" index={testimonials.indexOf(t)} />
                    <div>
                      <div className="font-bold text-[#0a192f]">{t.name}</div>
                      <div className="text-xs text-on-surface-variant">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-16 md:py-24 bg-[#0a192f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,100 Q50,0 100,100"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            <path
              d="M0,80 Q50,-20 100,80"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-[48px] md:text-[72px] font-extrabold text-white leading-[1.1] tracking-[-0.04em] mb-8">
              Ready for a higher
              <br />
              standard of comfort?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether it&apos;s a heating repair, an AC installation, or a
              middle-of-the-night emergency, Crystal delivers the quality and
              reliability your home deserves.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-[#f97316] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#0a192f] transition-all duration-300 shadow-xl"
              >
                Schedule Your Visit
              </Link>
              <a
                href="tel:+18002797825"
                className="border-2 border-white/30 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all duration-300"
              >
                Call 1-800-CRYSTAL
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
