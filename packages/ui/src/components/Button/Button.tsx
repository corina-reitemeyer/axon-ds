import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "link"
  | "neutral"
  | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4";

const variantClasses: Record<ButtonVariant, string> = {
  primary: `bg-primary-500 text-neutral-0 hover:bg-primary-700 active:bg-primary-900 ${focusRing}`,
  secondary: `bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50 active:border-primary-700 active:bg-primary-300 active:text-primary-900 ${focusRing}`,
  tertiary: `bg-primary-50 text-primary-700 hover:bg-primary-100 active:bg-primary-300 active:text-primary-900 ${focusRing}`,
  link: `bg-transparent text-primary-700 hover:bg-primary-50 active:bg-primary-100 active:text-primary-900 ${focusRing}`,
  neutral:
    "bg-neutral-50 text-neutral-900 border border-neutral-200 hover:bg-neutral-200",
  danger: `bg-danger-500 text-neutral-0 hover:bg-danger-700 active:bg-danger-900 ${focusRing}`,
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: "inline-flex items-center justify-center gap-2 h-7 px-2.5 rounded-full text-2xs",
  sm: "inline-flex items-center justify-center gap-2 h-8 px-3 rounded-full text-xs",
  md: "inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full text-sm",
  lg: "inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full text-base",
  xl: "inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "font-sans font-medium transition-colors disabled:opacity-40 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
