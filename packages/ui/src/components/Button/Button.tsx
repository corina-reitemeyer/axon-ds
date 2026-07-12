import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-neutral-0 hover:bg-primary-700",
  secondary:
    "bg-neutral-50 text-neutral-900 border border-neutral-200 hover:bg-neutral-200",
  danger: "bg-danger-500 text-neutral-0 hover:opacity-90",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-3 py-1.5 rounded-sm",
  md: "text-base px-4 py-2 rounded-md",
  lg: "text-lg px-6 py-3 rounded-lg",
  xl: "inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "font-sans font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
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
