import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Flèche qui apparaît en glissant au survol.
 * À utiliser dans un parent portant la classe `group`.
 */
const HoverArrow = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "grid w-0 place-items-center overflow-hidden opacity-0 transition-all duration-300 ease-out",
      "group-hover:ml-2 group-hover:w-4 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:w-4 group-focus-visible:opacity-100",
      className,
    )}
    aria-hidden="true"
  >
    <ArrowRight className="h-4 w-4 shrink-0" />
  </span>
);

export default HoverArrow;
