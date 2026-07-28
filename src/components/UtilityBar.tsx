import { Phone, Mail, MapPin } from "lucide-react";

export function UtilityBar({ visible }: { visible: boolean }) {
  return (
    <div
      className={` hidden md:flex h-9 items-center justify-center gap-8 bg-[#F4F2EE] border-b border-border text-body text-xs  tracking-wide transition-all duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
    >
      <span className="flex items-center gap-1.5">
        <Phone size={12} /> +234 814 979 8764
      </span>

      <span className="flex items-center gap-1.5">
        <Mail size={12} /> hello@knostandco.com
      </span>

      <span className="flex items-center gap-1.5">
        <MapPin size={12} /> Lagos, Nigeria
      </span>
    </div>
  );
}