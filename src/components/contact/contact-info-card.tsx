import { Card } from "@/components/ui/card";

const ORG_NAME = "Manas Goushala";
const OPERATED_BY = "Operated by Manas Rural Development Institute (MARDI)";
const ADDRESS_LINES = [
  "Manas Krushi Farm, Village Sajivali, Post Bhatsanagar, Taluka Shahapur",
  "District Thane, Maharashtra, India 421601",
];

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.41510009856665!2d73.4040125165883!3d19.492087946175648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7810fddb0cc29%3A0xa99500b162bfc03b!2sManas%20Krushi%20Farm!5e1!3m2!1sen!2sin!4v1785846986167!5m2!1sen!2sin" ;

export function ContactInfoCard() {
  return (
    <Card className="gap-0 overflow-hidden rounded-xl !py-0">
      <div className="px-6 py-6">
        <div className="mb-3 h-px w-10 bg-gold" />
        <p className="mb-4 font-heading text-lg text-foreground">Visit Us</p>

        <p className="font-heading text-2xl text-foreground">{ORG_NAME}</p>
        <p className="mt-1 mb-3 text-sm text-muted-foreground">{OPERATED_BY}</p>

        <address className="not-italic leading-relaxed text-muted-foreground">
          {ADDRESS_LINES.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </div>

      <div className="h-72 w-full border-t border-border">
        <iframe
          src={MAP_EMBED_SRC}
          title="Mardi Gowshala location"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Card>
  );
}