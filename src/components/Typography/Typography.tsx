import * as React from "react";

export type HeadingLevel = 1 | 2 | 3 | 4;
export type BodySize = 1 | 2 | 3;

const headingSizeClasses: Record<HeadingLevel, string> = {
  1: "text-headline-1-mobile md:text-headline-1",
  2: "text-headline-2-mobile md:text-headline-2",
  3: "text-headline-3-mobile md:text-headline-3",
  4: "text-headline-4-mobile md:text-headline-4",
};

const headingTagByLevel: Record<HeadingLevel, "h1" | "h2" | "h3" | "h4"> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
}

export function Heading({
  level = 1,
  as,
  className = "",
  children,
  ...rest
}: HeadingProps) {
  const Tag = as ?? headingTagByLevel[level];
  return (
    <Tag
      className={["font-sans font-semibold text-neutral-black", headingSizeClasses[level], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const bodySizeClasses: Record<BodySize, string> = {
  1: "text-body-1-mobile md:text-body-1",
  2: "text-body-2-mobile md:text-body-2",
  3: "text-body-3-mobile md:text-body-3",
};

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: BodySize;
  as?: "p" | "span" | "div";
  tone?: "default" | "grey" | "lgrey";
  children: React.ReactNode;
}

const toneClasses: Record<NonNullable<TextProps["tone"]>, string> = {
  default: "text-neutral-black",
  grey: "text-neutral-grey",
  lgrey: "text-neutral-lgrey",
};

export function Text({
  size = 2,
  as = "p",
  tone = "default",
  className = "",
  children,
  ...rest
}: TextProps) {
  const Tag = as;
  return (
    <Tag
      className={["font-sans font-normal", bodySizeClasses[size], toneClasses[tone], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
