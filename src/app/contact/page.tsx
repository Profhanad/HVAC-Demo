import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Crystal Heating & Cooling | Comfort in Every Detail",
  description:
    "Professional heating and air conditioning services for residential and commercial properties. Reach out for expert care.",
};

export default function ContactPage() {
  return <ContactContent />;
}
