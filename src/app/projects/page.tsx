import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projects | Crystal Heating & Cooling",
  description:
    "Browse our portfolio of heating and air conditioning projects — from furnace and heat pump installations to central AC upgrades and commercial rooftop systems.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
