import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Reliable Roofing Experts"
      title="Protecting Your Home From The Elements"
      description="Rozo Roofing delivers premium installation, repair, and inspection services to keep your property safe, dry, and beautiful all year round."
      primaryButton={{
        text: "Get Your Free Quote",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Services",
        href: "#services",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/exterior-home_74190-4300.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-with-drill_23-2148748770.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesRevealCards
      tag="Why Rozo Roofing"
      title="Excellence in Every Shingle"
      description="Our team uses superior materials and proven techniques to ensure lasting protection for your residential and commercial properties."
      items={[
        {
          title: "Precision Installation",
          description: "Expert craftsmen ensure every tile is placed perfectly for long-term durability.",
          imageSrc: "http://img.b2bpic.net/free-photo/single-red-brick-resting-weathered-concrete-tile-roof_1308-190331.jpg",
        },
        {
          title: "Comprehensive Inspections",
          description: "We identify potential issues early to prevent costly damage down the road.",
          imageSrc: "http://img.b2bpic.net/free-photo/long-shot-men-working-together_23-2149343675.jpg",
        },
        {
          title: "Safety First Commitment",
          description: "Our professionals adhere to the strictest safety standards for your peace of mind.",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-with-hard-hat-level-checking-roof-timber-house_23-2148748854.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesImageBento
      tag="Our Expertise"
      title="Specialized Roofing Solutions"
      description="A diverse array of premium roofing services tailored to your specific architectural needs."
      items={[
        {
          title: "Asphalt Shingles",
          description: "The most versatile and durable standard for family homes.",
          imageSrc: "http://img.b2bpic.net/free-photo/stone-slate-roof-texture_23-2151932241.jpg",
        },
        {
          title: "Metal Roofing",
          description: "Modern, sleek, and exceptionally weather-resistant.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-iron-tin-fence-lined-background-metal-texture_158595-6441.jpg",
        },
        {
          title: "Tile Roofing",
          description: "Timeless elegance with superior heat resistance.",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13617.jpg",
        },
        {
          title: "Insulation Systems",
          description: "Energy efficient solutions for year-round comfort.",
          imageSrc: "http://img.b2bpic.net/free-photo/stainless-metal-horizontal-lines-background_23-2148744264.jpg",
        },
        {
          title: "Flat Roofing",
          description: "Advanced membranes for commercial and residential flat surfaces.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-wearing-protection-helmet_23-2149343634.jpg",
        },
        {
          title: "Slate Restoration",
          description: "Premium heritage-style protection for historic beauty.",
          imageSrc: "http://img.b2bpic.net/free-photo/seamless-gray-square-tile_1154-696.jpg",
        },
        {
          title: "Drainage Solutions",
          description: "Optimized water flow to keep your roof dry and secure.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-house-architecture-navy-roof-wooden-soffit-blue-sky_626616-509.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Our Impact"
      title="Built on Integrity"
      description="Data-driven results demonstrating our commitment to quality service and satisfied clients."
      metrics={[
        {
          value: "1200+",
          title: "Roofs Installed",
          description: "Successful projects completed with high-quality craft.",
          imageSrc: "http://img.b2bpic.net/free-photo/macro-water-drops-plant-leaf_23-2148678687.jpg",
        },
        {
          value: "98%",
          title: "Satisfaction Rate",
          description: "Our customers value our dedication to excellence.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-roof_23-2149343643.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Testimonials"
      title="Trusted by Homeowners"
      description="Hear what our valued clients have to say about our professionalism and craftsmanship."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "Homeowner",
          quote: "Rozo Roofing transformed my home. The crew was efficient and professional.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-long-blonde-hair-shorts-handsome-joyful-guy-bed-smiling-with-tablet-modern-apartment-lovely-couple-having-fun-true-emotions_197531-1600.jpg",
        },
        {
          name: "James Chen",
          role: "Property Manager",
          quote: "Reliable and responsive. They tackled my commercial roof in record time.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-family-celebrating-birthday-together_23-2150598986.jpg",
        },
        {
          name: "Linda Garcia",
          role: "Architect",
          quote: "Superior precision in installation and aesthetic detail. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-concept-excited-man-pointing-finger-paper-house-model-searching-flat-standing-ove_1258-165770.jpg",
        },
        {
          name: "Mark Evans",
          role: "Homeowner",
          quote: "The team explained everything clearly and delivered results as promised.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-positive-senior-foreman-hardhat-yellow-eyeglasses-showing-thumbs-up-gesture-smiling-happily-encouraging-his-working-crew-good-job-construction-renovation_343059-2731.jpg",
        },
        {
          name: "Karen Wright",
          role: "Homeowner",
          quote: "Fantastic service. Our energy bills actually dropped after their work.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-realtor-giving-keys-elderly-couple-smiling-family-glasses-standing-saleswoman-pink-suit-real-estate-purchase-concept_74855-22277.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Common Questions"
      title="Roofing FAQs"
      description="Get clear answers to the most frequently asked questions about your roofing projects."
      items={[
        {
          question: "How often should I inspect my roof?",
          answer: "At least twice a year, usually before and after winter to check for potential damage.",
        },
        {
          question: "What is the lifespan of a roof?",
          answer: "Depending on materials, modern roofs can last anywhere from 20 to 50+ years with proper maintenance.",
        },
        {
          question: "Are your estimates free?",
          answer: "Yes, we offer free, no-obligation quotes for all roofing repairs and replacements.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/collaboration-two-carpenters-building_329181-15699.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to secure your home? Contact Rozo Roofing today for your free inspection and consultation."
      primaryButton={{
        text: "Contact Us Now",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Call Support",
        href: "tel:555-123-4567",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
