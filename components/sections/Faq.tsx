import { FAQS, COMPANY } from "@/lib/content";
import { SectionHeading } from "@/components/ui/primitives";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { Phone } from "lucide-react";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\n\n/g, " ") },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="section bg-warm-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-cgr grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="FAQs" title="Garage Door Repair FAQs" />
          <p className="mt-4 text-slate-600">
            Still have questions? Our dispatch team is available 24/7 to help.
          </p>
          <ButtonLink href={COMPANY.phoneHref} variant="emergency" className="mt-6">
            <Phone className="size-[18px]" /> Call {COMPANY.phone}
          </ButtonLink>
        </div>

        <Accordion items={FAQS} defaultOpen={0} />
      </div>
    </section>
  );
}
