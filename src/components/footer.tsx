import Link from "next/link";
import { Logo } from "./logo";
import { Globe, Share2, AtSign } from "lucide-react";

const serviceLinks = [
  { href: "/services", label: "AC Repair" },
  { href: "/services", label: "Furnace Repair" },
  { href: "/services", label: "Heating Installation" },
  { href: "/services", label: "AC Installation" },
  { href: "/services", label: "HVAC Maintenance" },
  { href: "/services", label: "Indoor Air Quality" },
  { href: "/services", label: "Emergency HVAC Service" },
  { href: "/services", label: "Commercial HVAC" },
];

const quickLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Share2, href: "#", label: "Share" },
  { icon: AtSign, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Logo size={32} />
              <span className="font-bold text-2xl text-primary tracking-tight">
                Crystal Heating & Cooling
              </span>
            </Link>
            <p className="text-sm text-on-surface-variant mb-6 max-w-xs leading-relaxed">
              Professional heating and air conditioning services for
              residential and commercial properties. Licensed &amp; Insured.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-[#f97316] hover:text-white transition-all"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-bold text-[#0a192f] mb-6">Services</p>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary transition-all text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-bold text-[#0a192f] mb-6">Quick Links</p>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary transition-all text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold text-[#0a192f] mb-6">Contact</p>
            <address className="not-italic text-base text-on-surface-variant space-y-4">
              <p>
                482 Comfort Drive
                <br />
                Crystal Valley, CA 92024
              </p>
              <p className="font-bold text-primary">
                <a href="tel:+18002797825" className="hover:text-[#f97316] transition-colors">
                  1-800-CRYSTAL
                </a>
              </p>
              <p>
                <a href="mailto:info@crystalheatingcooling.com" className="hover:text-primary transition-colors">
                  info@crystalheatingcooling.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-on-surface-variant">
            &copy; {new Date().getFullYear()} Crystal Heating &amp; Cooling.
            Precision comfort, built to last.
          </p>
          <p className="text-sm text-on-surface-variant">
            Powered by{" "}
            <a
              href="https://www.forsastudio.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0a192f] underline decoration-[#f97316] decoration-2 underline-offset-4 hover:text-[#f97316] transition-colors"
            >
              Forsa Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
