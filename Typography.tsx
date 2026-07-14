import * as React from "react";

/**
 * Typography
 * Generated from Figma "Design System (Community)" — Typography frame (node 27:606).
 * https://www.figma.com/design/dPwETv2wkZwfdboyw8k7yN/Design-System--Community-?node-id=27-606
 *
 * Font family: Inter, Semi Bold (headlines) / Regular (body).
 *
 * The Figma file defines separate Desktop and Mobile type ramps. Rather than
 * shipping two components, these render the Mobile size by default and
 * switch to the Desktop size at the `md:` breakpoint, e.g.
 *   Headline 1: 28/36 (mobile) -> 64/76 (desktop, md:)
 *   Body 1:     16/24 (mobile) -> 18/28 (desktop, md:)
 *
 * Requires the tailwind.config.js shipped alongside this file (adds the
 * headline-*/body-* font-size tokens).
 */

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

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Maps to Figma's Headline 1-4 styles. Default: 1 */
  level?: HeadingLevel;
  /** Override the rendered tag without changing the visual size, e.g. an
   *  <h1> styled as Headline 3. Defaults to the tag matching `level`. */
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
  /** Maps to Figma's Body 1-3 styles. Default: 2 */
  size?: BodySize;
  /** Rendered tag. Default: "p" */
  as?: "p" | "span" | "div";
  /** Maps to Figma's Neutral color tokens for secondary/tertiary text */
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

export default { Heading, Text };
