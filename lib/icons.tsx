import {
  Clock, Zap, Truck, Building2, FileCheck, Waves, Sun, CloudFog, Flame,
  Star, Award, BadgeCheck, ShieldCheck, ThumbsUp, type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  Clock, Zap, Truck, Building2, FileCheck, Waves, Sun, CloudFog, Flame,
  Star, Award, BadgeCheck, ShieldCheck, ThumbsUp,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? Clock;
  return <Cmp className={className} aria-hidden />;
}
