import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn(
      "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
      "font-serif font-bold leading-tight",
      "tracking-tight",
      className
    )}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn(
      "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
      "font-serif font-bold leading-tight",
      "tracking-tight",
      className
    )}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn(
      "text-xl sm:text-2xl lg:text-3xl xl:text-4xl",
      "font-serif font-semibold leading-snug",
      className
    )}>
      {children}
    </h3>
  );
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn(
      "text-lg sm:text-xl lg:text-2xl",
      "font-sans font-semibold leading-snug",
      className
    )}>
      {children}
    </h4>
  );
}

export function Body({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-base sm:text-lg lg:text-xl",
      "leading-relaxed",
      className
    )}>
      {children}
    </p>
  );
}

export function BodySmall({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-sm sm:text-base",
      "leading-normal",
      className
    )}>
      {children}
    </p>
  );
}

export function Caption({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-xs sm:text-sm",
      "leading-normal",
      className
    )}>
      {children}
    </p>
  );
}

export function Price({ children, className }: TypographyProps) {
  return (
    <span className={cn(
      "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
      "font-black tracking-tight",
      className
    )}>
      {children}
    </span>
  );
}

export function PriceSmall({ children, className }: TypographyProps) {
  return (
    <span className={cn(
      "text-xl sm:text-2xl lg:text-3xl",
      "font-bold",
      className
    )}>
      {children}
    </span>
  );
}