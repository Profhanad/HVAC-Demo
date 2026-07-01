import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Services | Crystal Heating & Cooling",
  description:
    "Professional heating and air conditioning services including AC repair, furnace repair, heating installation, AC installation, HVAC maintenance, indoor air quality, and 24/7 emergency service.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
