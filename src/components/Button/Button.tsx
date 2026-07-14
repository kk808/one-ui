import * as React from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "lg" | "md" | "sm";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-button font-sans transition-colors " +
  "disabled:cursor-not-allowed focus-visible:outline-none";

const sizeClasses: Record<ButtonSize, string> = {
  lg: "px-8 py-4 text-button-lg",
  md: "px-8 py-3.5 text-button-md",
  sm: "px-6 py-2 text-button-sm",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-neutral-white " +
    "hover:bg-primary-navy " +
    "active:bg-primary-dark " +
    "focus-visible:bg-primary-navy focus-visible:ring-2 focus-visible:ring-neutral-black focus-visible:ring-offset-0 " +
    "disabled:bg-primary-light disabled:text-neutral-greyblue",
  secondary:
    "bg-neutral-white text-primary border border-primary " +
    "hover:bg-primary-light " +
    "active:bg-primary-sky " +
    "focus-visible:bg-primary-light focus-visible:ring-2 focus-visible:ring-neutral-black focus-visible:ring-offset-0 " +
    "disabled:border-neutral-greyblue disabled:text-neutral-greyblue disabled:bg-neutral-white",
  tertiary:
    "bg-transparent text-primary " +
    "hover:bg-primary-light " +
    "active:bg-primary-sky " +
    "focus-visible:bg-primary-light focus-visible:ring-2 focus-visible:ring-neutral-black focus-visible:ring-offset-0 " +
    "disabled:text-neutral-greyblue disabled:bg-transparent",
};

function Spinner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`animate-spin ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "lg",
      isLoading = false,
      iconLeft,
      iconRight,
      className = "",
      disabled,
      children,
      ...rest
    },
    ref
  ) => {
    const iconSize = size === "lg" ? "size-6" : size === "md" ? "size-5" : "size-4";

    return (
      <button
        ref={ref}
        className={[baseClasses, sizeClasses[size], variantClasses[variant], className]
          .filter(Boolean)
          .join(" ")}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        {...rest}
      >
        {isLoading ? (
          <Spinner className={iconSize} />
        ) : (
          iconLeft && <span className={iconSize}>{iconLeft}</span>
        )}
        <span>{children}</span>
        {!isLoading && iconRight && <span className={iconSize}>{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
