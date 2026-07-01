"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { projectImages } from "@/lib/images";

type ProjectFilter = "all" | "heating" | "cooling" | "commercial";

/* ─── Mobile Project Card (matches mobile mockup) ─── */
function MobileProjectCard({
  image,
  tag,
  title,
  location,
  description,
  aspect = "aspect-[3/4]",
  className = "",
}: {
  image: string;
  tag: string;
  title: string;
  location: string;
  description: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div
        className={`relative ${aspect} overflow-hidden rounded-[24px] shadow-[0_4px_20px_rgba(10,25,47,0.04)] transition-all duration-500`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.1em] text-primary uppercase">
            {tag}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <p className="text-white/80 text-base mb-2">{location}</p>
          <h3 className="text-white text-[32px] font-bold leading-tight tracking-[-0.02em]">
            {title}
          </h3>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-semibold text-primary">{title}</h3>
          <p className="text-base text-on-surface-variant">{description}</p>
        </div>
        <ArrowRight
          size={20}
          className="text-primary mt-1 shrink-0 group-hover:translate-x-2 transition-transform"
        />
      </div>
    </div>
  );
}

const mobileProjects = [
  { image: projectImages.rooftopUnit.src, tag: "Commercial", title: "Commercial Rooftop System", location: "Manhattan, NY", description: "Large rooftop HVAC unit installed on a commercial building.", category: "commercial" as const },
  { image: projectImages.rooftopSystem.src, tag: "Commercial", title: "Multi-Unit Rooftop Install", location: "Beverly Hills, CA", description: "Rooftop HVAC systems and ductwork for a multi-tenant property.", category: "commercial" as const },
  { image: projectImages.indoorFurnace.src, tag: "Heating", title: "Whole-Home Furnace Installation", location: "Denver, CO", description: "High-efficiency furnace and full ductwork replacement.", category: "heating" as const, aspect: "aspect-[16/9]" },
  { image: projectImages.heatPumpInstall.src, tag: "Heating", title: "Residential Heat Pump Install", location: "Greenwich, CT", description: "Energy-efficient heat pump installed for year-round comfort.", category: "heating" as const },
  { image: projectImages.ductlessMiniSplit.src, tag: "Cooling", title: "Ductless Mini-Split Installation", location: "Phoenix, AZ", description: "Ductless cooling for a room addition without existing ductwork.", category: "cooling" as const },
  { image: projectImages.ductwork.src, tag: "HVAC", title: "New Ductwork Installation", location: "Portland, OR", description: "Full ductwork replacement improving airflow and efficiency.", category: "cooling" as const, aspect: "aspect-[16/9]" },
  { image: projectImages.iaqSystem.src, tag: "Air Quality", title: "Indoor Air Quality System", location: "Malibu, CA", description: "Whole-home air filtration installed alongside a new furnace.", category: "heating" as const },
  { image: projectImages.thermostat.src, tag: "Cooling", title: "Smart Thermostat Upgrade", location: "New York, NY", description: "Smart thermostat install for precise, efficient comfort control.", category: "cooling" as const },
];

export function ProjectsContent() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filteredProjects = filter === "all"
    ? mobileProjects
    : mobileProjects.filter((p) => p.category === filter);

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <header className="pt-24 md:pt-36 pb-12 md:pb-16 px-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <span className="text-xs font-bold text-on-tertiary-container uppercase tracking-[0.1em] mb-4 block">
                {/* Desktop: "Portfolio 2024", Mobile: "Our Legacy" */}
                <span className="hidden md:inline">Portfolio 2024</span>
                <span className="md:hidden">Our Legacy</span>
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              {/* Desktop heading */}
              <h1 className="hidden md:block text-[72px] font-extrabold text-primary leading-[1.1] tracking-[-0.04em] mb-6">
                HVAC projects, built to last.
              </h1>
              {/* Mobile heading */}
              <h1 className="md:hidden text-[48px] font-extrabold text-primary leading-[1.1] tracking-[-0.03em] mb-4">
                Our Work Speaks for Itself.
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                <span className="hidden md:inline">
                  Browse our portfolio of completed projects — from furnace
                  and heat pump installations to central AC upgrades and
                  commercial rooftop systems.
                </span>
                <span className="md:hidden">
                  Real HVAC projects for real homes and businesses. See the
                  quality craftsmanship we bring to every job.
                </span>
              </p>
            </FadeIn>
          </div>
          {/* Mobile filter buttons */}
          <FadeIn delay={0.4} className="md:hidden">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold tracking-[0.1em]">
                FILTERS
              </span>
              {(["all", "heating", "cooling", "commercial"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-[0.1em] transition-all ${
                    filter === f
                      ? "bg-primary text-on-primary"
                      : "border border-outline-variant text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ═══════════ DESKTOP BENTO GRID ═══════════ */}
      <section className="hidden md:block px-6 max-w-[1280px] mx-auto mb-24">
        <StaggerContainer
          className="grid grid-cols-12 gap-4"
          staggerDelay={0.1}
        >
          {/* Major Featured Project - 8 cols */}
          <StaggerItem className="col-span-8">
            <div className="group relative overflow-hidden rounded-[24px] h-[600px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
              <Image
                src={projectImages.rooftopUnit.src}
                alt={projectImages.rooftopUnit.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-12 text-white w-full">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-bold bg-accent px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wider">
                    Commercial
                  </span>
                  <h2 className="text-[40px] font-bold leading-tight tracking-[-0.02em] mb-4">
                    Commercial Rooftop HVAC System
                  </h2>
                  <p className="text-base max-w-md mb-6 opacity-90">
                    Full rooftop HVAC installation for a commercial building,
                    including new units, ductwork, and controls.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all"
                  >
                    Get a Quote <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Side Secondary - 4 cols */}
          <StaggerItem className="col-span-4">
            <div className="group relative overflow-hidden rounded-[24px] h-[600px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
              <Image
                src={projectImages.rooftopSystem.src}
                alt={projectImages.rooftopSystem.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-semibold mb-2">
                    Multi-Unit Rooftop System
                  </h3>
                  <p className="text-base opacity-90">
                    Rooftop HVAC systems and ductwork for a multi-tenant
                    property.
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Small Detail - 4 cols */}
          <StaggerItem className="col-span-4">
            <div className="group relative overflow-hidden rounded-[24px] h-[400px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
              <Image
                src={projectImages.closeupEquipment.src}
                alt={projectImages.closeupEquipment.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-white text-2xl font-semibold">
                  Details
                </span>
              </div>
            </div>
          </StaggerItem>

          {/* Before & After - 8 cols */}
          <StaggerItem className="col-span-8">
            <div className="relative overflow-hidden rounded-[24px] h-[400px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
              <div className="grid grid-cols-2 h-full">
                <div className="relative overflow-hidden border-r border-white/10">
                  <Image
                    src={projectImages.beforeUnit.src}
                    alt={projectImages.beforeUnit.alt}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Before
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={projectImages.afterUnit.src}
                    alt={projectImages.afterUnit.alt}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    After
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* HVAC Projects Row - 6 cols each */}
          <StaggerItem className="col-span-6">
            <div className="group relative overflow-hidden rounded-[24px] h-[500px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
              <Image
                src={projectImages.indoorFurnace.src}
                alt={projectImages.indoorFurnace.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10 text-white">
                <span className="text-xs font-bold bg-accent px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wider w-fit">
                  Heating
                </span>
                <h3 className="text-[32px] font-bold leading-tight tracking-[-0.02em] mb-2">
                  Whole-Home Furnace Install
                </h3>
                <p className="text-base opacity-80">
                  High-efficiency furnace install with full ductwork
                  replacement for a 4-bedroom home.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="col-span-6">
            <div className="group relative overflow-hidden rounded-[24px] h-[500px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
              <Image
                src={projectImages.ductlessMiniSplit.src}
                alt={projectImages.ductlessMiniSplit.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10 text-white">
                <span className="text-xs font-bold bg-accent px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wider w-fit">
                  Cooling
                </span>
                <h3 className="text-[32px] font-bold leading-tight tracking-[-0.02em] mb-2">
                  Ductless Mini-Split Install
                </h3>
                <p className="text-base opacity-80">
                  Ductless cooling system installed for a room addition
                  without existing ductwork.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Full Width Statement Block */}
          <StaggerItem className="col-span-12">
            <div className="bg-primary-container p-12 md:p-20 rounded-[24px] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-[40px] font-bold leading-tight tracking-[-0.02em] mb-8">
                  Every system is a commitment to comfort.
                </h2>
                <p className="text-lg text-surface-container-highest/80 mb-10 leading-relaxed">
                  We don&apos;t just fix furnaces and swap filters. We engineer
                  complete comfort solutions that integrate seamlessly with
                  your home — ensuring the systems you depend on are as
                  reliable as they are invisible.
                </p>
                <div className="flex gap-12">
                  <div>
                    <div className="text-[40px] font-bold text-accent leading-tight tracking-[-0.02em] mb-1">
                      500+
                    </div>
                    <div className="text-[10px] font-bold text-surface-container-highest uppercase tracking-[0.1em]">
                      Projects Completed
                    </div>
                  </div>
                  <div>
                    <div className="text-[40px] font-bold text-accent leading-tight tracking-[-0.02em] mb-1">
                      15yr
                    </div>
                    <div className="text-[10px] font-bold text-surface-container-highest uppercase tracking-[0.1em]">
                      Master Craftsmanship
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Bottom Two Cards - 6 cols each */}
          <StaggerItem className="col-span-6">
            <div className="group relative overflow-hidden rounded-[24px] h-[500px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
              <Image
                src={projectImages.heatPumpInstall.src}
                alt={projectImages.heatPumpInstall.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-[32px] font-bold leading-tight tracking-[-0.02em] mb-2">
                  Residential Heat Pump
                </h3>
                <p className="text-base opacity-80">
                  Energy-efficient heat pump installed for year-round heating
                  and cooling.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="col-span-6">
            <div className="group relative overflow-hidden rounded-[24px] h-[500px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(10,25,47,0.08)]">
              <Image
                src={projectImages.ductwork.src}
                alt={projectImages.ductwork.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-[32px] font-bold leading-tight tracking-[-0.02em] mb-2">
                  New Ductwork Installation
                </h3>
                <p className="text-base opacity-80">
                  Full ductwork replacement improving airflow and system
                  efficiency throughout the home.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ═══════════ MOBILE CARD GALLERY ═══════════ */}
      <section className="md:hidden px-6 mb-20">
        <div className="grid grid-cols-1 gap-10">
          {filteredProjects.map((p) => (
            <FadeIn key={p.title}>
              <MobileProjectCard
                image={p.image}
                tag={p.tag}
                title={p.title}
                location={p.location}
                description={p.description}
                aspect={p.aspect}
              />
            </FadeIn>
          ))}
          {filteredProjects.length === 0 && (
            <p className="text-center text-on-surface-variant py-12">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ═══════════ MOBILE STATS SECTION ═══════════ */}
      <section className="md:hidden bg-primary-container px-6 py-16 mb-20">
        <FadeIn>
          <span className="text-xs font-bold text-on-tertiary-container uppercase tracking-[0.1em] mb-4 block">
            Precision Delivered
          </span>
          <h2 className="text-[32px] font-bold text-white leading-tight tracking-[-0.02em] mb-8">
            Every system is a commitment to comfort.
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-[40px] font-bold text-accent leading-tight tracking-[-0.02em]">
                500+
              </div>
              <div className="text-xs font-bold text-surface-container-highest/70 uppercase tracking-[0.1em]">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-accent leading-tight tracking-[-0.02em]">
                98%
              </div>
              <div className="text-xs font-bold text-surface-container-highest/70 uppercase tracking-[0.1em]">
                Client Retention
              </div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-accent leading-tight tracking-[-0.02em]">
                20+
              </div>
              <div className="text-xs font-bold text-surface-container-highest/70 uppercase tracking-[0.1em]">
                Years Active
              </div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-accent leading-tight tracking-[-0.02em]">
                4.9
              </div>
              <div className="text-xs font-bold text-surface-container-highest/70 uppercase tracking-[0.1em]">
                Average Rating
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <section className="bg-surface-container-low py-16 md:py-24 px-6 overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <FadeIn className="max-w-xl" direction="right">
            <h2 className="text-[32px] md:text-[40px] font-bold leading-tight tracking-[-0.02em] mb-6 text-primary">
              Ready to elevate your home comfort?
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Whether it&apos;s a furnace upgrade, a new AC system, or a
              commercial install, our team brings precision to every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Start Your Project
              </Link>
              <a
                href="tel:+18002797825"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
              >
                Call 1-800-CRYSTAL
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="hidden md:block">
            <div className="w-72 h-72 rounded-full border-[24px] border-surface-container-highest flex items-center justify-center group cursor-pointer relative">
              <div className="absolute inset-0 bg-accent/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              <div className="text-center relative z-10">
                <Clock
                  size={64}
                  className="mx-auto mb-4 text-primary group-hover:rotate-12 transition-transform"
                />
                <p className="text-2xl font-semibold text-primary">
                  Emergency?
                  <br />
                  <span className="text-accent">We&apos;re on call.</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
