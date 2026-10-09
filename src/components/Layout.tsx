import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Reviews",
    "href": "#testimonials"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="shift" siteBackground="gridDots" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Rozo Roofing"
      ctaButton={{
        text: "Get Quote",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Rozo Roofing © 2024. All rights reserved."
      copyright="Built for reliability and protection."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",
        },
        {
          icon: Twitter,
          href: "#",
        },
        {
          icon: Instagram,
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
